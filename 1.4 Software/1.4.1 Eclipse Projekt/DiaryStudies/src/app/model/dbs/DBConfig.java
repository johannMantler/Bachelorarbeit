package app.model.dbs;


import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.Date;
import org.apache.tomcat.dbcp.dbcp.BasicDataSource;
import org.hsqldb.Server;

import app.model.Hash;

/**
 * Konfiguriert die HSQLDB und erzeugt die Tabellen, falls diese nicht
 * existieren.
 * @author Johann Mantler
 *
 */
public class DBConfig extends DBSConnect
{
	private Server hsqlServer;

	/** Ein Admin mit diesem Namen wird in der DB eingef�gt. */
	public static String ADMIN_NAME_1 = "admin";

	/**
	 * Startet den Datenbankserver und erstellt die Datenbank falls diese
	 * noch nicht vorhanden ist.
	 */
	public void start() {
		hsqlServer = new Server();
		// hsqlServer.setPort(9002);
		hsqlServer.setSilent(true);
		hsqlServer.setDatabaseName(0, "diaryStudies");
		hsqlServer.setDatabasePath(0, "file:/home/diarystudiesserver/Desktop/db/db"); //Linux: der Pfad muss schon vorher angelegt sein! ; Letzter Eintrag ist der DB-Name
		hsqlServer.setRestartOnShutdown(false);
		hsqlServer.start();
		this.createDB();
	}
	
	private void createDB() {
		String benutzerTabelle = "CREATE TABLE Benutzer ("
				+ "name VARCHAR(30) PRIMARY KEY," + "pw VARCHAR(64) not null,"
				+ "email VARCHAR(300) UNIQUE," 
				+ "pwreset VARCHAR(64),"
				+ "resettime TIMESTAMP"
				+")";

		String registrierungTabelle = "CREATE TABLE Registrierung ("
				+ "name VARCHAR(30)PRIMARY KEY,"
				+ "FOREIGN KEY (name) REFERENCES Benutzer ON DELETE CASCADE,"
				+ "registriertAm TIMESTAMP not null," + "gebJahr SMALLINT,"
				+ "geschlecht SMALLINT," + "abschluss SMALLINT,"
				+ "beruflich VARCHAR(200)," + "compPrivatJahre SMALLINT,"
				+ "compBeruflichJahre SMALLINT," + "compPrivatStd SMALLINT,"
				+ "compBeruflichStd SMALLINT," + "kenntnisComp SMALLINT,"
				+ "kenntnisOS SMALLINT," + "kenntnisInet SMALLINT,"
				+ "kenntnisSW SMALLINT," + "osWindows SMALLINT,"
				+ "osMac SMALLINT," + "osLinux SMALLINT," + "osAndere SMALLINT"
				+ ");";

		String fragebogenTabelle = "CREATE TABLE Fragebogen ("
				+ "name VARCHAR(30)PRIMARY KEY,"
				+ "FOREIGN KEY (name) REFERENCES Benutzer ON DELETE CASCADE,"
				+ "f1 SMALLINT," + "f2 SMALLINT," + "f3 SMALLINT,"
				+ "f4 SMALLINT," + "f5 SMALLINT," + "f6 SMALLINT,"
				+ "f7 SMALLINT," + "f8 SMALLINT," + "f9 SMALLINT,"
				+ "f10 SMALLINT," + "f11 SMALLINT," + "f12 SMALLINT,"
				+ "f13 SMALLINT," + "f14 SMALLINT," + "f15 SMALLINT,"
				+ "f16 SMALLINT," + "f17 SMALLINT," + "f18 SMALLINT,"
				+ "f19 SMALLINT," + "f20 SMALLINT," + "f21 SMALLINT,"
				+ "f22 SMALLINT," + "f23 SMALLINT," + "f24 SMALLINT,"
				+ "f25 SMALLINT," + "f26 SMALLINT," + "f27 SMALLINT,"
				+ "f28 SMALLINT," + "f29 SMALLINT" + ");";

		String adminTabelle = "CREATE TABLE Admin ("
				+ "name VARCHAR(30) PRIMARY KEY," + "pw VARCHAR(64) not null,"
				+ "email VARCHAR(300) not null,"
				+ "zuletztAngemeldet TIMESTAMP not null" + ");";

		String erfolgTabelle = "CREATE TABLE Erfolg ("
				+ "nr BIGINT GENERATED ALWAYS AS IDENTITY (START WITH 1) PRIMARY KEY,"
				+ "eingetragenAm TIMESTAMP not null,"
				+ "name VARCHAR(30),"
				+ "FOREIGN KEY (name) REFERENCES Benutzer ON DELETE CASCADE,"
				
				+ "beschreibung VARCHAR(1000),"
				+ "wichtig SMALLINT,"
				+ "ort VARCHAR(40),"
				+ "ursache VARCHAR(1000),"
				+ "ursacheOrt SMALLINT,"
				+ "ursacheZukunft SMALLINT,"
				+ "kontrollierbar SMALLINT,"
				+ "ursacheAndereErfolge SMALLINT"
				+ ");";

		String problemTabelle = "CREATE TABLE Problem ("
				+ "nr BIGINT GENERATED ALWAYS AS IDENTITY (START WITH 1) PRIMARY KEY,"
				+ "eingetragenAm TIMESTAMP not null,"
				+ "name VARCHAR(30),"
				+ "FOREIGN KEY (name) REFERENCES Benutzer ON DELETE CASCADE,"
				
				+ "beschreibung VARCHAR(1000),"
				+ "wichtig SMALLINT,"
				+ "ort VARCHAR(40),"
				+ "ursache VARCHAR(1000),"
				+ "ursacheOrt SMALLINT,"
				+ "ursacheZukunft SMALLINT,"
				+ "kontrollierbar SMALLINT,"
				+ "ursacheAndereProbleme SMALLINT"
				+ ");";

		String insertAdmin1 = "INSERT INTO Admin values(" + "'"
				+ DBConfig.ADMIN_NAME_1 + "','"+Hash.hashPass("pw", DBConfig.ADMIN_NAME_1)+"','admin@web.de','"
				+ new Timestamp(new Date().getTime()) + "' );";
		
		try
		{
			this.connect();
			Statement stmt = con.createStatement();
			stmt.executeUpdate(benutzerTabelle);
			stmt.executeUpdate(adminTabelle);
			stmt.executeUpdate(registrierungTabelle);
			stmt.executeUpdate(fragebogenTabelle);
			stmt.executeUpdate(erfolgTabelle);
			stmt.executeUpdate(problemTabelle);
			stmt.executeUpdate(insertAdmin1);
			this.disconnect();// Connection beenden -> in Datei schreiben.
		} catch (SQLException e)
		{
			System.out.println("DB existiert bereits!");
		}
	}
	
	/**
	 * Fährt die Datenbank herunter.
	 */
	public void shutdown() {
		// HSQLDB uses a JVM shutdown hook to release the database lock which
		// can be an issue if your application doesn't kill the JVM when
		// "shutting down".
		// It is an issue when tomcat is shutdown, but the JVM does not exit
		// http://codecrate.com/2007/02/hsqldb-datasource.html

		new BasicDataSource()
		{
			@Override
			public synchronized void close() throws SQLException
			{
				Connection conn = getConnection();
				Statement statement = conn.createStatement();
				statement.executeUpdate("SHUTDOWN");
				statement.close();
				conn.close();
				super.close();
			}
		};
		System.out.println("Datenbankserver ist heruntergefahren.");
	}
	
	/**
	 * Prüft, ob es ein Admin ist.
	 * @param name der Name des Users.
	 * @return true, falls es ein Admin ist, sonst false.
	 */
	public static boolean isAdmin(String name)
	{
		if (name.equals(DBConfig.ADMIN_NAME_1))
		{
			return true;
		}
		return false;
	}

}
