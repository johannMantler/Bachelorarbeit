package app.model.dbs;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

import app.model.Connectable;

/**
 * Klasse zum Verwalten einer Datenbank Verbindung.
 * @author Johann Mantler
 *
 */
public abstract class DBSConnect implements Connectable {

	private static boolean loaded = false;

	protected Connection con;
	protected Statement stmt;
	/**
	 * Bei der Objekterzeugung wird auch der JDBC-Treiber geladen,
	 * falls noch nicht zuvor geschehen.
	 */
	public DBSConnect() {
		loadDriver();
	}

	private void loadDriver() {
		if(loaded) {
			return;
		}
		try {
    		//Treiber in java.lang package laden
			Class.forName("org.hsqldb.jdbcDriver");
			loaded = true;
		} catch (ClassNotFoundException e1) {
			
			e1.printStackTrace();
		}
		
	}

	public void connect() {
		try {
			con = DriverManager.getConnection(
			        "jdbc:hsqldb:hsql://localhost/diaryStudies;shutdown=true", "sa", "");
			stmt = con.createStatement();
		} catch (SQLException e) {
			
			e.printStackTrace();
		}
	}
	
	public void disconnect() {
		if(con != null) {
			try {
				con.close();
			} catch (SQLException e) {
				System.err.println("Disconnect ist fehlgeschlagen!");
				e.printStackTrace();
			}
		}
	}
	
	/**
	 * Setzt in der DBConnect-KLasse eine Markierung, sodass
	 * bei der naechsten Initialisierung dieser Klasse der
	 * JDBC-Treiber wieder geladen wird.
	 */
	public static void setLoad() {
		DBSConnect.loaded = false;
	}
}
