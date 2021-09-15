package app.model;

import java.sql.Timestamp;

/**
 * Schnittstelle zum Verwalten eines Benutzerkontos.
 * Diese Schnittstelle ist der Zugriffspunkt zur Datenhaltungsschicht.
 * @author Johann Mantler
 *
 */
public interface Benutzerkonto extends Connectable {
	/**
	 * Registriert einen Benutzer.
	 * @param dto Die Benutzerdaten
	 */
	void signup(BenutzerDTO dto);
	
	/**
	 * Prüft ob der ob der Anwender unter dem gegebenen
	 * Namen in der Rolle Benutzer registriert ist.
	 * @param nameOrEmail 
	 * @return true falls er ein Benutzer ist, sonst false
	 */
	boolean isBenutzer(String nameOrEmail);
	
	/**
	 * Prüft ob der ob der Anwender unter dem gegebenen
	 * Namen in der Rolle Benutzer registriert ist.
	 * @param benutzername Der Name
	 * @return true falls er ein Benutzer ist, sonst false
	 */
	boolean isAdmin(String benutzername);
	
	/**
	 * Liefert das Passwort des Benutzers oder null
	 * wenn dieser nicht existiert.
	 * @param nameOrEmail 
	 * @return pass or null
	 */
	String getPass(String nameOrEmail);
	
	/**
	 * Setzt das Passwort eines Benutzers.
	 * @param hash der Hash mit welchem der Benutzer eindeutig identifiziert wird.
	 * @param pass das neue Passwort.
	 */
	void setPass(String hash, String pass);
	
	/**
	 * Setzt für einen Benutzer die Daten, welche nötig sind,
	 * um das Passwort zurück setzen zu lassen.
	 * @param time Zeitstempel zum Zeitpunkt der Hash-Generierung.
	 * @param hash Ein Hashwert, der den Benutzer eindeutig identifiziert.
	 * @param nameOrEmail Name oder E-Mail des Benutzers
	 */
	void setPassReset(Timestamp time,String hash, String nameOrEmail);
	
	/**
	 * Holt den Zeitstempel zu einem gegebenem Hash.
	 * @param hash Nach diesem Hash wird in der DB gesucht, um den Zeitstempel zu finden.
	 * @return Zeitstempel, oder null falls der Hash nicht in der DB auftaucht.
	 */
	Timestamp getResetTime(String hash);
	
	/**
	 * Suche nach der Email.
	 * @param email Email, nach der gesucht wird.
	 * @return true, falls gefunden, sonst false.
	 */
	boolean findEmail(String email);
	
	/**
	 * Holt die Daten des Anwenders und gibt
	 * diese als BenutzerDTO-Objekt wieder.
	 * @param nameOrEmail
	 * @return Ein Objekt vom Typ BenutzerDTO. Nur die zu einer 
	 * Registrierung relevanten Daten werden gesetzt!
	 */
	BenutzerDTO getBenutzer(String nameOrEmail);
	
	/**
	 * Setzt den Fragebogen für einen Benutzer.
	 * @param dto Ein FragebogenDTO mit den Daten.
	 */
	void setFragebogen(FragebogenDTO dto);
	
	/**
	 * Fuegt einen Erfolg ein.
	 * @param dto Beinhaltet die Daten des Erfolgs.
	 */
	public void addErfolg(ErfolgDTO dto);
	
	/**
	 * Liefert die Anzahl eingetragener Erfolge.
	 * @param benutzername
	 * @return die Erfolgsanzahl
	 */
	public int getAnzahlErfolg(String benutzername);
	
	/**
	 * Fuegt ein Problem ein.
	 * @param dto Beinhaltet die Daten des Problems.
	 */
	public void addProblem(ProblemDTO dto);
	
	/**
	 * Liefert die Anzahl eingetragener Probleme.
	 * @param benutzername
	 * @return die Problemsanzahl
	 */
	public int getAnzahlProbleme(String benutzername);
}
