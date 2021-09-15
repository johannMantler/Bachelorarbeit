package app.model.dbs;

import static org.junit.Assert.*;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;

import org.junit.Test;

import app.model.BenutzerDTO;
import app.model.Benutzerkonto;
import app.model.Hash;

/**
 * Testet alle Methoden aus Benutzerkonto
 * @author Johann Mantler
 */
public class Benutzerkonto_Test
{

	/**
	 * Prüft, ob auf einer Connection x viele neue Benutzer eingefügt
	 * werden können.
	 * Danach werden diese wieder gelöscht.
	 * Ergebnis: Der Vorgang muss ohne Exceptions verlaufen und danach
	 * dürfen keine Benutzer mehr in der DB sein.
	 * Die Verifizierung erfolgt mit einem externen Tool.
	 */
	@Test
	public final void testSignup()
	{
		int x = 100;
		Benutzerkonto dao = new BenutzerDAO(true);
		BenutzerDTO[] arrDTO = new BenutzerDTO[x];
		String name = "testSignUp_1";
		for(int i = 0; i < x; i++) {
			arrDTO[i] = new BenutzerDTO(name+"_"+i, "pw");
		}
		//Alle User einfügen
		for(int i = 0; i < x; i++) {
			dao.signup(arrDTO[i]);
		}
		dao.disconnect();
		//Tear down
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		for(int i = 0; i < x; i++) {
			daoTestModul.delete(name+"_"+i);
		}
		daoTestModul.disconnect();
	}

	/**
	 * Prüft, ob auf y Connections x viele neue Benutzer eingefügt
	 * werden können.
	 * Danach werden diese wieder gelöscht.
	 * Ergebnis: Der Vorgang muss ohne Exceptions verlaufen und danach
	 * dürfen keine Benutzer mehr in der DB sein.
	 * Die Verifizierung erfolgt mit einem externen Tool.
	 */
	@Test
	public final void testSignup_2()
	{
		int x = 50;
		int y = x;
		Benutzerkonto[] arrDAO = new BenutzerDAO[y];
		BenutzerDTO[] arrDTO = new BenutzerDTO[x];
		String name = "testSignUp_2";
		for(int i = 0; i < x; i++) {
			arrDTO[i] = new BenutzerDTO(name+"_"+i, "pw");
			arrDAO[i] = new BenutzerDAO(true);
		}
		//Alle User einfügen
		for(int i = 0; i < x; i++) {
			arrDAO[i].signup(arrDTO[i]);
			arrDAO[i].disconnect();
		}
		//Tear down
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		for(int i = 0; i < x; i++) {
			daoTestModul.delete(name+"_"+i);
		}
		daoTestModul.disconnect();
	}
	
	
	
	/**
	 * Finde einen Benutzer der existiert.
	 * Eingabe: Benutzername
	 * Ausgabe: true
	 */
	@Test
	public final void testIsBenutzer_1() {
		String benutzername = "findMe_1";
		BenutzerDTO dto1 = new BenutzerDTO(benutzername,"pw");
		Benutzerkonto user1 = new BenutzerDAO(true);
		
		//einfügen und wiederfinden
		user1.signup(dto1);
		assertEquals(true, user1.isBenutzer(benutzername));
		
		//Tear down
		BenutzerDAOTestModul a = new BenutzerDAOTestModul();
		a.connect();
		a.delete(benutzername);
		a.disconnect();
		user1.disconnect();
	}
	
	/**
	 * Suche nach einen Benutzer der nicht existiert.
	 */
	@Test
	public final void testIsBenutzer_2() {
	
		Benutzerkonto user2 = new BenutzerDAOTestModul(true);
		assertEquals(false, user2.isBenutzer("youCantFindMe"));
		user2.disconnect();
	}

	/**
	 * Mit DAO-Objekt a wird ein Benutzer eingefuegt 
	 * und auf DAO-Objekt b muss dieser gefunden werden.
	 */
	@Test
	public final void testIsBenutzer_3() {
		
		String benutzername = "findMe_2";
		BenutzerDTO a_dto = new BenutzerDTO(benutzername,"");
		
		//einfuegen
		Benutzerkonto a = new BenutzerDAOTestModul(true);
		a.signup(a_dto);
		
		//finden
		Benutzerkonto b = new BenutzerDAOTestModul(true);
		assertEquals(true, b.isBenutzer(benutzername));
		
		//Tear down
		BenutzerDAOTestModul x = new BenutzerDAOTestModul(true);
		x.delete(benutzername);
		x.disconnect();
		
		a.disconnect();
		b.disconnect();
	}
	
	/**
	 * Finde einen Benutzer der existiert.
	 * Eingabe: email
	 * Ausgabe: true
	 */
	@Test
	public final void testIsBenutzer_4() {
		String benutzername = "findMe_1";
		String email = "findMe_1@web.de";
		BenutzerDTO dto1 = new BenutzerDTO(benutzername,"pw");
		dto1.setEmail(email);
		Benutzerkonto user1 = new BenutzerDAO(true);
		
		//einfügen und wiederfinden
		user1.signup(dto1);
		assertEquals(true, user1.isBenutzer(email));
		
		//Tear down
		BenutzerDAOTestModul a = new BenutzerDAOTestModul();
		a.connect();
		a.delete(benutzername);
		a.disconnect();
		user1.disconnect();
	}
	
	/**
	 * Testfall: Suche nach einen User, welcher
	 * ein Administrator ist.
	 */
	@Test
	public final void testIsAdmin() {
		String adminName = DBConfig.ADMIN_NAME_1;
		Benutzerkonto a = new BenutzerDAOTestModul(true);
		
		assertEquals(true, a.isAdmin(adminName));

		a.disconnect();
	}
	
	/**
	 * Testfall: Suche nach einen User, welcher
	 * kein Administrator ist.
	 */
	@Test
	public final void testIsAdmin_2() {
		String adminName = "ichbinkeinAdmin";
		Benutzerkonto a = new BenutzerDAOTestModul(true);
		
		assertEquals(false, a.isAdmin(adminName));

		a.disconnect();
	}

	/**
	 * Testfall:
	 * Es werden zwei Benutzer registriert und ihre Passwörter
	 * gesucht. Auch nach dem Passwort eines nicht existenten Benutzer wird gesucht.
	 * Eingabe: benutzername
	 */
	@Test
	public final void testgetPass_1(){
		String user1 = "user1";
		String user1PW = "DAuincefuw423423rni23uh";
		
		String user2 = "user2";
		String user2PW = ""; //leer
		
		Benutzerkonto dao = new BenutzerDAOTestModul(true);
		dao.signup(new BenutzerDTO(user1,user1PW));
		dao.signup(new BenutzerDTO(user2,user2PW));

		assertEquals(dao.getPass(user1), user1PW);
		assertEquals(dao.getPass(user2), user2PW);
		assertEquals(dao.getPass("michGibtsGarnicht"), null);
		
		//Tear down
		dao.disconnect();
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		daoTestModul.delete(user1);
		daoTestModul.delete(user2);
		daoTestModul.disconnect();
	}
	
	/**
	 * Testfall:
	 * Es werden zwei Benutzer registriert und ihre Passwörter
	 * gesucht. Auch nach dem Passwort eines nicht existenten Benutzer wird gesucht.
	 * Eingabe email
	 */
	@Test
	public final void testgetPass_2() {
		String user1 = "user3";
		String email1 = "email3@bla.de";
		String user1PW = "DAuincefuw423423rni23uh";
		
		String user2 = "user4";
		String email2 = "email4@bla.de";
		String user2PW = user1PW; 
		
		Benutzerkonto dao = new BenutzerDAOTestModul(true);
		BenutzerDTO dto = new BenutzerDTO(user1,user1PW);
		dto.setEmail(email1);
		dao.signup(dto);
		dto = new BenutzerDTO(user2,user2PW);
		dto.setEmail(email2);
		dao.signup(dto);

		assertEquals(dao.getPass(email1), user1PW);
		assertEquals(dao.getPass(email2), user2PW);
		assertEquals(dao.getPass("michGibtsGarnicht"), null);
		
		//Tear down
		dao.disconnect();
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		daoTestModul.delete(user1);
		daoTestModul.delete(user2);
		daoTestModul.disconnect();
	}

	/**
	 * Testfall:
	 * Hole das Passwort eines Administrators.
	 */
	@Test
	public final void testgetPass_3(){
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		assertEquals(daoTestModul.getPass(DBConfig.ADMIN_NAME_1), Hash.hash("pw",null));
	
		//Tear down
		daoTestModul.disconnect();
	}

	/**
	 * Testfall:
	 * Ein Administrator wird eingefügt und nach seinem Passwort gesucht.
	 * @throws SQLException 
	 */
	@Test
	public final void testgetPass_4() throws SQLException {
		String adminName = "ich bin einAA";
		String pass = "idshfisha";
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		dao.query("INSERT INTO Admin values("
				+ "'"+adminName+"','"+pass+"','admin@web.de','"+new Timestamp(new Date().getTime())+"' );");
		
		assertEquals(dao.getPass(adminName), pass);
		
		dao.query("DELETE FROM ADMIN WHERE name = '"+adminName+"'");
		dao.disconnect();
	}
	

	/**
	 * Ein Benutzer einfügen und dann sein DTO mit Hilfe
	 * seines Namens holen. Auch nach einem nicht existierendem
	 * Benutzer wird gesucht, dessen DTO nicht gefunden werden soll.
	 */
	@Test
	public final void testGetRegistrierung()
	{
		String user = "dsadasdasdasd";
		String email = "email3@bla.de";
		int gebJahr = 1990;
		String userPW = "DAuincefuw423423rni23uh";

		Benutzerkonto dao = new BenutzerDAOTestModul(true);
		BenutzerDTO dto = new BenutzerDTO(user,userPW);
		dto.setEmail(email);
		dto.setGebJahr(gebJahr);
		dao.signup(dto);

		assertEquals(dao.getBenutzer(user).getGebJahr(), gebJahr);
		assertEquals(dao.getBenutzer("michgibtsgarnicht"), null);
		
		//Tear down
		dao.disconnect();
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		daoTestModul.delete(user);
		daoTestModul.disconnect();
	}
	
	/**
	 * Ein Benutzer einfügen und dann sein DTO mit Hilfe
	 * seiner email holen. Auch nach einem nicht existierendem
	 * Benutzer wird gesucht, dessen DTO nicht gefunden werden soll.
	 */
	@Test
	public final void testGetRegistrierung_2()
	{
		String user = "dsadasdasdasdaaa";
		String email = "email3@bla.desa";
		int gebJahr = 1990;
		String userPW = "DAuincefuw423423rni23uh";

		Benutzerkonto dao = new BenutzerDAOTestModul(true);
		BenutzerDTO dto = new BenutzerDTO(user,userPW);
		Timestamp ts = dto.getRegistriertAm();
		dto.setEmail(email);
		dto.setGebJahr(gebJahr);
		dao.signup(dto);

		BenutzerDTO result = dao.getBenutzer(email);
		assertEquals(result.getGebJahr(), gebJahr);
		assertEquals(result.getRegistriertAm(), ts);
		assertEquals(dao.getBenutzer("michgibtsgarnicht"), null);
		
		//Tear down
		dao.disconnect();
		BenutzerDAOTestModul daoTestModul = new BenutzerDAOTestModul(true);
		daoTestModul.delete(user);
		daoTestModul.disconnect();
	}
	/**
	 * Versuche die Daten von einem nicht existenten Benutzer zu setzen.
	 */
	@Test
	public final void testSetPassReset() {
		Benutzerkonto dao = new BenutzerDAOTestModul(true);
		dao.setPassReset(null, null, "mich gibt es nicht");
		dao.disconnect();
	}
	
	/**
	 * Füge ein Benutzer ein, dann setze von diesem den Hash und Zeitstempel.
	 * @throws SQLException 
	 */
	@Test
	public final void testSetPassReset_1() throws SQLException {
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		String name = "reset_1";
		String hash = "dsaojdofhoiwjio4237jfioshfoizfweifoh";
		Timestamp t = new Timestamp(System.currentTimeMillis());
		dao.signup(new BenutzerDTO(name,"pw"));
		dao.setPassReset(t, hash, name);
		ResultSet rs = dao.query("Select * from Benutzer where name='"+name+"' or email='"+name+"'");
		rs.next();
		assertEquals(hash, rs.getString("pwreset"));
		assertEquals(t, rs.getTimestamp("resettime"));
		
		//Tear down
		dao.delete(name);
		dao.disconnect();
		rs.close();
	}
	
	/**
	 * Füge einen Benutzer ein und suche nach seiner email.
	 * Zudem suche nach einer nicht registrierten email.
	 */
	@Test
	public final void testFindEmail_1() {
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		String name = "findmyemail_1";
		String email = "hallo@hallo.de";
		BenutzerDTO dto = new BenutzerDTO(name, "");
		dto.setEmail(email);
		dao.signup(dto);
		
		assertEquals(true, dao.findEmail(email));
		assertEquals(false,dao.findEmail("michgibtsnicht"));
		
		//Tear down
		dao.delete(name);
		dao.disconnect();
	}
	
	/**
	 * Versuche das Passwort von einem nicht existenten Benutzer zu setzen.
	 */
	@Test
	public final void testSetPass() {
		Benutzerkonto dao = new BenutzerDAOTestModul(true);
		dao.setPass("mich gibts nicht", "pw");
		dao.disconnect();
	}
	
	/**
	 * Füge ein Benutzer ein, dann setze von diesem den Hash und Zeitstempel.
	 * Anschließend wird das Passwort neu gesetzt.
	 * @throws SQLException 
	 */
	@Test
	public final void testSetPass_1() throws SQLException {
		//Set up
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		String name = "reset_1";
		String oldPw = "oldPw";
		String newPw = "new";
		String hash = "dsaojdofhoiwjio4237jfioshfoizfweifoh";
		Timestamp t = new Timestamp(System.currentTimeMillis());
		dao.signup(new BenutzerDTO(name,oldPw));
		dao.setPassReset(t, hash, name);
		
		//Execute
		dao.setPass(hash, newPw);
		
		//Verify
		assertEquals(dao.getPass(name), Hash.hashPass(newPw, name));
		
		ResultSet rs = dao.query("Select * from Benutzer where name='"+name+"' or email='"+name+"'");
		rs.next();
		assertEquals("", rs.getString("pwreset"));
		
		//Tear down
		dao.delete(name);
		dao.disconnect();
		rs.close();
	}
	
}
