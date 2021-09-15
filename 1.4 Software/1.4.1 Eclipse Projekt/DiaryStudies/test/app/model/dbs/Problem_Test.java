package app.model.dbs;

import static org.junit.Assert.*;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.Test;

import app.model.BenutzerDTO;
import app.model.Export;
import app.model.ProblemDTO;
/**
 * Testet alle Methoden aus Problem
 * @author Johann Mantler
 *
 */
public class Problem_Test
{

	/**
	 * Testfall:
	 * Zu einem gegebenem Benutzer wird ein Problem eingetragen.
	 * Alle Problemdaten sind DEFAULT-Werte.
	 * @throws SQLException 
	 */
	@Test
	public final void testAddProblem_1() throws SQLException {
		String benutzername = "prob_1";
		ProblemDTO probDTO = new ProblemDTO(benutzername);
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		
		//Neuen Benutzer einfuegen, dann Erfolg einfuegen
		dao.signup(new BenutzerDTO(benutzername,"pw"));
		dao.addProblem(probDTO);
		
		//Verify
		ResultSet rs = dao.query("SELECT * FROM Problem where name = '"+benutzername+"'");
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
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("anzahlPersonen"));
		assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("compArbeitHeute"));
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
	public final void testAddProblem_2() throws SQLException {
		String benutzername = "prob_2";
		String beschreibung = "Versenden einer Email hat heute schon wieder nicht geklappt�";
		String ort = "2";
		String ursache = "keine Ahnung, ging einfach";
		String ursacheOrt = "4";
		String ursacheZukunft = "1";
		String ursacheAndereErfolge = "6";
		String kontrollierbar = "1";
		String wichtig = "5";
		
		ProblemDTO probDTO = new ProblemDTO(benutzername);
		probDTO.setBeschreibung(beschreibung);
		probDTO.setKontrollierbar(kontrollierbar);
		probDTO.setOrt(ort);
		probDTO.setUrsache(ursache);
		probDTO.setUrsacheAndereProbleme(ursacheAndereErfolge);
		probDTO.setUrsacheOrt(ursacheOrt);
		probDTO.setUrsacheZukunft(ursacheZukunft);
		probDTO.setWichtig(wichtig);

		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		
		//Neuen Benutzer einfuegen, dann Erfolg einfuegen
		dao.signup(new BenutzerDTO(benutzername,"pw"));
		dao.addProblem(probDTO);
		
		//Verify
		ResultSet rs = dao.query("SELECT * FROM Problem where name = '"+benutzername+"'");
		rs.next();
		assertEquals(benutzername, rs.getString("name"));
		assertEquals(probDTO.getBeschreibung(), rs.getString("beschreibung"));
		assertEquals(probDTO.getUrsache(), rs.getString("ursache"));
		assertEquals(probDTO.getUrsacheOrt(), rs.getInt("ursacheOrt"));
		assertEquals(probDTO.getUrsacheZukunft(), rs.getInt("ursacheZukunft"));
		assertEquals(probDTO.getKontrollierbar(), rs.getInt("kontrollierbar"));
		assertEquals(probDTO.getUrsacheAndereProbleme(), rs.getInt("ursacheAndereErfolge"));
		assertEquals(probDTO.getWichtig(), rs.getInt("wichtig"));
		assertEquals(probDTO.getOrt(), rs.getString("ort"));
		dao.delete(benutzername);
		dao.disconnect();
	}
	
	/**
	 * Testfall:
	 * Zu einem gegebenem Benutzer werden x Probleme aus
	 * jeweils unterschiedlichen DAO's eingetragen.
	 * @throws SQLException 
	 */
	@Test
	public final void testAddProblem_3() throws SQLException {
		
		//Set up
		int anzahlProbleme = 10;
		String benutzername = "prob_3";
		ProblemDTO probDTO = new ProblemDTO(benutzername);
		BenutzerDAOTestModul[] daos = new BenutzerDAOTestModul[anzahlProbleme];
		for(int i = 0; i < daos.length; i++) {
			daos[i] = new BenutzerDAOTestModul(true);
		}
		
		//Neuen Benutzer einfuegen, dann Erfolge einfuegen
		daos[0].signup(new BenutzerDTO(benutzername,"pw"));
		for(int i = 0; i < daos.length; i++) {
			daos[i].addProblem(probDTO);
		}

		//Verify
		ResultSet rs = daos[0].query("SELECT * FROM Problem where name = '"+benutzername+"'");
		
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
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("anzahlPersonen"));
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("compArbeitHeute"));
		}
		
		daos[0].delete(benutzername);
		for(int i = 0; i < daos.length; i++) {
			daos[i].disconnect();;
		}
	}
	

}
