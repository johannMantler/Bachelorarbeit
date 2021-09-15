package app.model.dbs;

import static org.junit.Assert.*;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.Test;

import app.model.BenutzerDTO;
import app.model.ErfolgDTO;
import app.model.Export;

/**
 * Testet alle Methoden aus Erfolg
 * @author Johann Mantler
 *
 */
public class Erfolg_Test
{

	/**
	 * Testfall:
	 * Zu einem gegebenem Benutzer wird ein Erfolg eingetragen.
	 * Alle Erfolgsdaten sind DEFAULT-Werte.
	 * @throws SQLException 
	 */
	@Test
	public final void testAddErfolg_1() throws SQLException {
		String benutzername = "erfolg_1";
		ErfolgDTO erfolgDTO = new ErfolgDTO(benutzername);
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		
		//Neuen Benutzer einfuegen, dann Erfolg einfuegen
		dao.signup(new BenutzerDTO(benutzername, "pw"));
		dao.addErfolg(erfolgDTO);
		
		//Verify
		ResultSet rs = dao.query("SELECT * FROM Erfolg where name = '"+benutzername+"'");
		rs.next();
		assertEquals(benutzername, rs.getString("name"));
		assertEquals(Export.DEFAULT_STRING_VALUE, rs.getString("beschreibung"));
		assertEquals(Export.DEFAULT_STRING_VALUE, rs.getString("ursache"));
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("ursacheOrt"));
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("ursacheZukunft"));
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("kontrollierbar"));
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("ursacheAndereErfolge"));
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("wichtig"));
		assertEquals(Export.DEFAULT_STRING_VALUE, rs.getString("ort"));
		
		dao.delete(benutzername);
		dao.disconnect();
	}
	

	/**
	 * Testfall:
	 * Zu einem gegebenem Benutzer wird ein Erfolg eingetragen.
	 * Alle Erfolgsdaten sind ungleich DEFAULT-Werte.
	 * @throws SQLException 
	 */
	@Test
	public final void testAddErfolg_2() throws SQLException {
		String benutzername = "erfolg_2";
		String beschreibung = "Versenden einer Email hat heute endlich mal geklapptü";
		String ort = "Freizeit";
		String ursache = "keine Ahnung, ging einfach";
		String ursacheOrt = "4";
		String ursacheZukunft = "1";
		String ursacheAndereErfolge = "6";
		String kontrollierbar = "1";
		String wichtig = "5";
		
		ErfolgDTO erfolgDTO = new ErfolgDTO(benutzername);
		erfolgDTO.setBeschreibung(beschreibung);
		erfolgDTO.setKontrollierbar(kontrollierbar);
		erfolgDTO.setOrt(ort);
		erfolgDTO.setUrsache(ursache);
		erfolgDTO.setUrsacheAndereErfolge(ursacheAndereErfolge);
		erfolgDTO.setUrsacheOrt(ursacheOrt);
		erfolgDTO.setUrsacheZukunft(ursacheZukunft);
		erfolgDTO.setWichtig(wichtig);

		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		
		//Neuen Benutzer einfuegen, dann Erfolg einfuegen
		dao.signup(new BenutzerDTO(benutzername, "pw"));
		dao.addErfolg(erfolgDTO);
		
		//Verify
		ResultSet rs = dao.query("SELECT * FROM Erfolg where name = '"+benutzername+"'");
		rs.next();
		assertEquals(benutzername, rs.getString("name"));
		assertEquals(erfolgDTO.getBeschreibung(), rs.getString("beschreibung"));
		assertEquals(erfolgDTO.getUrsache(), rs.getString("ursache"));
		assertEquals(erfolgDTO.getUrsacheOrt(), rs.getInt("ursacheOrt"));
		assertEquals(erfolgDTO.getUrsacheZukunft(), rs.getInt("ursacheZukunft"));
		assertEquals(erfolgDTO.getKontrollierbar(), rs.getInt("kontrollierbar"));
		assertEquals(erfolgDTO.getUrsacheAndereErfolge(), rs.getInt("ursacheAndereErfolge"));
		assertEquals(erfolgDTO.getWichtig(), rs.getInt("wichtig"));
		assertEquals(erfolgDTO.getOrt(), rs.getString("ort"));
		
		dao.delete(benutzername);
		dao.disconnect();
	}
	
	/**
	 * Testfall:
	 * Zu einem gegebenem Benutzer werden x Erfolge aus
	 * jeweils unterschiedlichen DAO's eingetragen.
	 * @throws SQLException 
	 */
	@Test
	public final void testAddErfolg_3() throws SQLException {
		
		//Set up
		int anzahlErfolge = 10;
		String benutzername = "erfolg_3";
		ErfolgDTO erfolgDTO = new ErfolgDTO(benutzername);
		BenutzerDAOTestModul[] daos = new BenutzerDAOTestModul[anzahlErfolge];
		for(int i = 0; i < daos.length; i++) {
			daos[i] = new BenutzerDAOTestModul(true);
		}
		
		//Neuen Benutzer einfuegen, dann Erfolge einfuegen
		daos[0].signup(new BenutzerDTO(benutzername, "pw"));
		for(int i = 0; i < daos.length; i++) {
			daos[i].addErfolg(erfolgDTO);
		}

		//Verify
		ResultSet rs = daos[0].query("SELECT * FROM Erfolg where name = '"+benutzername+"'");
		
		for(int i = 0; i < daos.length; i++) {
			rs.next();
			assertEquals(benutzername, rs.getString("name"));
			assertEquals(Export.DEFAULT_STRING_VALUE, rs.getString("beschreibung"));
			assertEquals(Export.DEFAULT_STRING_VALUE, rs.getString("ursache"));
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("ursacheOrt"));
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("ursacheZukunft"));
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("kontrollierbar"));
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("ursacheAndereErfolge"));
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("wichtig"));
			assertEquals(Export.DEFAULT_STRING_VALUE, rs.getString("ort"));
		}
		
		daos[0].delete(benutzername);
		for(int i = 0; i < daos.length; i++) {
			daos[i].disconnect();;
		}
	}
	

}
