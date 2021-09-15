package app.model.dbs;

import java.sql.ResultSet;
import java.sql.SQLException;


/**
 * Erweitert die Klasse BenutzerDAO um einige weitere
 * Methoden, damit man BenutzerDAO besser testen kann.
 * @author Johann Mantler
 *
 */
public class BenutzerDAOTestModul extends BenutzerDAO {

	/**
	 * 
	 */
	public BenutzerDAOTestModul() {
		super();
	}
	/**
	 * 
	 * @param b
	 */
	public BenutzerDAOTestModul(boolean b)
	{
		super(b);
	}

	/**
	 * Loescht einen Benutzer aus der Datenbasis.
	 * @param name Name vom Benutzer, welcher geloescht werden soll.
	 */
	public void delete(String name) {
	
		try {
			stmt.executeUpdate("DELETE FROM Benutzer WHERE name = '"+name+"'");
			System.out.println("\nBenutzer "+name+" geloescht.");
		} catch (SQLException e) {
			System.err.println("\nBenutzer "+name+" nicht geloescht!");
			e.printStackTrace();
		}
	}
	
	/**
	 * Führt eine SQL-Query aus.
	 * @param q die Query
	 * @return das Ergebnis.
	 */
	public ResultSet query(String q) {
		ResultSet result = null;
		try {
			result = stmt.executeQuery(q);
			System.out.println("Query ausgeführt");
		} catch (SQLException e) {
			System.err.println("Query fehlgeschlagen");
			e.printStackTrace();
		}
		return result;
	}
}
