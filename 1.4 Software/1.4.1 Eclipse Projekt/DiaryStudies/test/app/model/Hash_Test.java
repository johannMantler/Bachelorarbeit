package app.model;

import static org.junit.Assert.*;

import org.junit.Test;

import app.model.dbs.BenutzerDAO;
import app.model.dbs.BenutzerDAOTestModul;
import app.model.dbs.DBConfig;

/**
 * 
 * @author Johann Mantler
 *
 */
public class Hash_Test {

	/**
	 * Integrationstest. Füge einen Benutzer ein und prüfe
	 * ob sein Password auch richtig verschlüsselt wurde.
	 */
	@Test
	public final void test() {
		Benutzerkonto dao = new BenutzerDAO(true);
		String username = "blablabla";
		String pass = "paswort123aaab";
		String email = null;
		BenutzerDTO dto = new BenutzerDTO(username);
		dto.setEmail(email);
		dto.setPw(Hash.hashPass(pass, dto));
		dao.signup(dto);
		
		assertEquals(dao.getPass(username), Hash.hashPass(pass, username));
		
		//Tear down
		BenutzerDAOTestModul dao2 = new BenutzerDAOTestModul(true);
		dao.disconnect();
		dao2.delete(username);
		dao2.disconnect();
	}

	/**
	 * Prüfe ob dasPasswort vom Admin richtig verschlüsselt wurde.
	 */
	@Test
	public final void testHashPassStringString() {
		Benutzerkonto dao = new BenutzerDAO(true);
		assertEquals(dao.getPass(DBConfig.ADMIN_NAME_1), Hash.hashPass("pw", DBConfig.ADMIN_NAME_1));
		dao.disconnect();
	}

	/**
	 * Prüft, ob die Methode idempotent ist.
	 * Eingabe: Passwort ohne Salz
	 */
	@Test
	public final void testHash() {
		String pass = "Hallo";
		String salt = null;
		assertEquals(Hash.hash(pass, salt), Hash.hash(pass, salt));
	}
	
	/**
	 * Das Salz muss einen unterschied machen.
	 * Eingabe: Passwort mit salz und einmal ohne
	 */
	@Test
	public final void testHash_1() {
		String pass = "Hallo";
		String salt = null;
		assertNotEquals(Hash.hash(pass, salt), Hash.hash(pass, "salz"));
	}

}
