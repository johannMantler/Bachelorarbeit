package app.model.dbs;

import static org.junit.Assert.*;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.junit.Test;

import app.model.BenutzerDTO;
import app.model.Export;
import app.model.FragebogenDTO;
/**
 * Testet alle Methoden aus Benutzerkonto
 * @author Johann Mantler
 */
public class Fragebogen_Test
{
	/**
	 * Testfall:
	 * Benutzer mit Fragebogen hinzufuegen, wobei der
	 * Fragebogen nur mit DEFAULT-Werten ausgefüllt ist.
	 * @throws SQLException 
	 */
	@Test
	public final void testSetFragebogen() throws SQLException {
		String benutzername = "findMe_4";
		BenutzerDTO benutzerDTO = new BenutzerDTO(benutzername,"");
		
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		
		//Einfuegen
		dao.signup(benutzerDTO);
		dao.setFragebogen(new FragebogenDTO(benutzername));
		
		//Verify
		ResultSet rs = dao.query("SELECT * FROM Fragebogen where name = '"+benutzername+"'");
		rs.next();
		for(int i = 1; i <= FragebogenDTO.FRAGEN_ANZAHL; i++) {
			assertEquals(Export.DEFAULT_INT_VALUE, rs.getInt("f"+i));
		}
		
		dao.delete(benutzername);
		dao.disconnect();
	}
	
	/**
	 * Testfall:
	 * Benutzer mit Fragebogen hinzufuegen, wobei der
	 * Fragebogen nur mit nicht DEFAULT-Werten ausgefüllt ist.
	 * @throws SQLException 
	 */
	@Test
	public final void testSetFragebogen_2() throws SQLException {

		//Set up
		String benutzername = "findMe_5";
		BenutzerDAOTestModul dao = new BenutzerDAOTestModul(true);
		dao.signup(new BenutzerDTO(benutzername,"pw"));
		FragebogenDTO fragenDTO = new FragebogenDTO(benutzername);
		String ersterWert = "1";
		String mittlereWerte = "3";
		String letzterWert = "5";
	
		fragenDTO.setFrage(0, ersterWert);
		for(int i = 1; i < FragebogenDTO.FRAGEN_ANZAHL-1; i++) {
			fragenDTO.setFrage(i, mittlereWerte);
		}
		fragenDTO.setFrage(FragebogenDTO.FRAGEN_ANZAHL-1, letzterWert);
		dao.setFragebogen(fragenDTO);
		
		//Verify
		ResultSet rs = dao.query("SELECT * FROM Fragebogen where name = '"+benutzername+"'");
		rs.next();
		assertEquals(rs.getInt("f1"), Export.parseInt(ersterWert));
		assertEquals(rs.getInt("f"+FragebogenDTO.FRAGEN_ANZAHL), Export.parseInt(letzterWert));
		for(int i = 2; i <= FragebogenDTO.FRAGEN_ANZAHL-1; i++) {
			assertEquals(Export.parseInt(mittlereWerte), rs.getInt("f"+i));
		}
		
		dao.delete(benutzername);
		dao.disconnect();
	}

}
