package app.model;

import java.io.UnsupportedEncodingException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;

import app.model.dbs.BenutzerDAO;

/**
 * 
 * @author Johann Mantler
 *
 */
public class Hash {
	
	private static final Benutzerkonto dao = new BenutzerDAO(true);
	private final static int ITERATION_NUMBER = 1000;
	
	/**
	 * Verschlüsselt das Passwort so, das es möglichst nie wieder
	 * entschlüsselt werden kann.
	 * @param pass Das Passwort
	 * @param salt 
	 * @return Das verschlüsselte Passwort
	 */
	public static String hashPass(String pass, BenutzerDTO dto) {
		String userSpecificSalt = new Integer(dto.getGebJahr()).toString() + dto.getRegistriertAm();
		return hash(pass, userSpecificSalt);
	}

	public static String hashPass(String pass, String user) { 
		String userSpecificSalt = null;
		if(!dao.isAdmin(user)) { //Admin PW braucht kein extra Salz, sein PW ist schon kompliziert genug
			BenutzerDTO dto = dao.getBenutzer(user);
			userSpecificSalt = new Integer(dto.getGebJahr()).toString() + dto.getRegistriertAm();
		}

		return hash(pass, userSpecificSalt);
	}

	
	public static String hash(String pass, String salt) {
		MessageDigest digest = null;
		try {
			digest = MessageDigest.getInstance( "SHA-256", "SUN" );
		} catch (NoSuchAlgorithmException | NoSuchProviderException e1) {
			e1.printStackTrace(); //das darf nicht passieren..
		}
		try {
			if(null != salt) {
				digest.update(salt.getBytes());
			}
			digest.update(pass.getBytes("UTF-8"));
			byte[] tmp = digest.digest();
			for(int i = 0; i < ITERATION_NUMBER; i++) {
				digest.reset();
		        tmp = digest.digest(tmp);
		    }
			pass = new BigInteger(1, tmp).toString(16);
		} catch (UnsupportedEncodingException e)
		{
			e.printStackTrace();
		}
		return pass;
	}
	
}
