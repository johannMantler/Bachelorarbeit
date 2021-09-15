package app.model.dbs;

import static org.junit.Assert.*;

import org.junit.Test;

import app.model.BenutzerDTO;

/**
 * Testet alle Methoden aus BenutzerDAOTestModul
 * @author Johann Mantler
 */
public class BenutzerDAOTestModul_Test {

	/**
	 * Testfall:
	 * Ein DAO-Objekt fuegt einen Benutzer ein und
	 * ein anderes DAO-Objekt loescht den Benutzer.
	 * Ein drittes DAO-Objekt sucht danach und darf es nicht mehr finden.
	 */
	@Test
	public final void testDelete() {
		String benutzername = "findMe_3";
		BenutzerDTO a_dto = new BenutzerDTO(benutzername,"");
		
		//einfuegen
		BenutzerDAOTestModul a = new BenutzerDAOTestModul(true);
		a.signup(a_dto);
		a.disconnect();
		
		//loeschen
		BenutzerDAOTestModul b = new BenutzerDAOTestModul(true);
		b.delete(benutzername);
		b.disconnect();
		
		//suchen und nicht finden
		BenutzerDAOTestModul c = new BenutzerDAOTestModul(true);
		assertEquals(false, c.isBenutzer(benutzername));
		c.disconnect();
	}

}
