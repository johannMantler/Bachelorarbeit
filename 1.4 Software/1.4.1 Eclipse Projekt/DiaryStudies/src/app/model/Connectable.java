package app.model;
/**
 * Definiert eine Schnittstelle zum Starten und Beenden
 * einer DB-Server-Verbindung.
 * @author J. Mantler
 */
public interface Connectable {
	/**
	 * Startet eine Sitzung (Connection) zum DB-Server.
	 */
	void connect();
	/**
	 * Gibt die DB-Server Verbindung wieder frei.
	 */
	void disconnect();
}
