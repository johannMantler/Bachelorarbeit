package app.model.dbs;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;

import app.model.Benutzerkonto;
import app.model.BenutzerDTO;
import app.model.ErfolgDTO;
import app.model.FragebogenDTO;
import app.model.Hash;
import app.model.ProblemDTO;

/**
 * Data Access Object f�r einen Benutzer.
 * @author Johann Mantler
 *
 */
public class BenutzerDAO extends DBSConnect implements Benutzerkonto {

	private static final String insertBenutzerStr ="INSERT INTO Benutzer values( ?,?,?,?,?);";
	private static final String insertRegistrierungStr = "INSERT INTO Registrierung values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
	private static final String getRegistrierungStr = "SELECT r.* FROM Registrierung r, Benutzer b WHERE b.name = ? AND r.name = b.name OR b.email = ? AND  r.name = b.name;";
	private static final String isBenutzerStr = "SELECT name,email FROM Benutzer WHERE name = ? OR email = ?;";
	private static final String getBenutzerPWStr = "SELECT pw FROM benutzer WHERE name = ? OR email = ?;";
	private static final String getAdminPWStr = "SELECT pw FROM Admin WHERE name = ?;";
	private static final String insertErfolgStr = "INSERT INTO Erfolg VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?);";
	private static final String insertProblemStr = "INSERT INTO Problem VALUES (DEFAULT,?,?,?,?,?,?,?,?,?,?);";
	private static final String setPwStr = "UPDATE Benutzer SET pw = ? WHERE name = ?;";
	private static final String getNameByHashStr = "SELECT name FROM Benutzer WHERE pwreset = ?;";
	private static final String setPassResetStr = "UPDATE Benutzer SET pwreset=?, resettime=? WHERE name=? OR email=?;";
	private static String setFragebogenStr;
	static {
		String tmp = "?"; //Platz f�r Benutzername
		for(int i = 0; i < FragebogenDTO.FRAGEN_ANZAHL; i++){
			tmp += ",?";	
		}
		setFragebogenStr = "INSERT INTO Fragebogen VALUES ("+ tmp +");";
	}
	/**
	 * Erzeugt ein BenutzerDAO-Objekt ohne anf�ngliche Verbindung.
	 * Um Methoden zu benutzen muss ein connect() aufgerufen werden.
	 * Achtung: Falls das Objekt nicht mehr gebraucht
	 * wird, muss close() aufgerufen werden, um die Verbindung wieder
	 * freizugeben.
	 */
	public BenutzerDAO() {
	}
	/**
	 * Erzeugt ein BenutzerDAO-Objekt und baut sofort eine Verbindung
	 * zum DBMS auf, falls das Argument true ist. Achtung: Falls das Objekt nicht mehr gebraucht
	 * wird, muss close() aufgerufen werden, um die Verbindung wieder
	 * freizugeben.
	 * @param startConnection Soll die DB-Verbindung direkt zu Beginn starten?
	 */
	public BenutzerDAO(boolean startConnection) {
		if(startConnection) {
			this.connect();
			//TODO prepare statements here!!
		}
	}
	
	
	//TODO testen ob die Isolationsstufe ausreichend ist:
	public void signup(BenutzerDTO dto) {
		try {
			con.setAutoCommit(false);
			try {

				//Benutzer einfuegen:
				PreparedStatement insertBenutzer = con.prepareStatement(insertBenutzerStr);
				insertBenutzer.setString(1, dto.getName());
				insertBenutzer.setString(2, dto.getPw());
				insertBenutzer.setString(3, dto.getEmail());
				insertBenutzer.setString(4, null);
				insertBenutzer.setTimestamp(5, null);
				insertBenutzer.executeUpdate();

				//Registrierungsdaten  einfuegen:
				PreparedStatement insertRegistrierung = con.prepareStatement(insertRegistrierungStr);
				insertRegistrierung.setString(1, dto.getName());
				insertRegistrierung.setTimestamp(2, dto.getRegistriertAm());
				insertRegistrierung.setInt(3, dto.getGebJahr());
				insertRegistrierung.setInt(4, dto.getGeschlecht());
				insertRegistrierung.setInt(5, dto.getAbschluss());
				insertRegistrierung.setString(6, dto.getBeruflich());
				insertRegistrierung.setInt(7, dto.getCompPrivatJahre());
				insertRegistrierung.setInt(8, dto.getCompBeruflichJahre());
				insertRegistrierung.setInt(9, dto.getCompPrivatStd());
				insertRegistrierung.setInt(10, dto.getCompBeruflichStd());
				insertRegistrierung.setInt(11, dto.getKenntnisComp());
				insertRegistrierung.setInt(12, dto.getKenntnisOS());
				insertRegistrierung.setInt(13, dto.getKenntnisInternet());
				insertRegistrierung.setInt(14, dto.getKenntnisSW());
				insertRegistrierung.setInt(15, dto.getOsWindows());
				insertRegistrierung.setInt(16, dto.getOsMac());
				insertRegistrierung.setInt(17, dto.getOsLinux());
				insertRegistrierung.setInt(18, dto.getOsAndere());
				insertRegistrierung.executeUpdate();
				
				con.commit();
			}
			catch(SQLException e) {
				e.printStackTrace();
				System.err.println("\nTransaktion: Benutzer hinzuf�gen ist fehlgeschlagen");
				con.rollback();
			}
			finally {
				con.setAutoCommit(true);
			}
		} 
		catch (SQLException e) {
			e.printStackTrace();
			System.err.println("\nProbleme mit der Verbindung, Autocommit konnte nicht ausgeschaltet werden.");
		}	
	}
		
		
	@Override
	public boolean isBenutzer(String nameOrEmail) {
		boolean found = false;
		ResultSet rs;
		try {
			PreparedStatement query = con.prepareStatement(isBenutzerStr);
			query.setString(1, nameOrEmail);
			query.setString(2, nameOrEmail);	
			rs = query.executeQuery();	
			if(rs.next()) {
				found = true;
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return found;
	}

	@Override
	public boolean isAdmin(String benutzername) {
		return DBConfig.isAdmin(benutzername);
	}


	@Override
	public void setFragebogen(FragebogenDTO dto) {
		try {
			PreparedStatement setFragebogen = con.prepareStatement(setFragebogenStr);
			setFragebogen.setString(1, dto.getBenutzername());
	
			for(int i = 0; i < FragebogenDTO.FRAGEN_ANZAHL; i++){
				setFragebogen.setInt(i+2, dto.getFrage(i));
			}
			setFragebogen.executeUpdate();
		}
		catch(Exception e) {
			e.printStackTrace();
			System.err.println("\nFragebogen hinzuf�gen ist fehlgeschlagen");
		}
	}
	


	@Override
	public void addErfolg(ErfolgDTO dto) {
		PreparedStatement insertErfolg = null;
		try {
			insertErfolg = con.prepareStatement(insertErfolgStr);
			insertErfolg.setTimestamp(1, dto.getEingetragenAm());
			insertErfolg.setString(2, dto.getBenutzername());
			insertErfolg.setString(3, dto.getBeschreibung());
			insertErfolg.setString(6, dto.getUrsache());
			insertErfolg.setInt(7, dto.getUrsacheOrt());
			insertErfolg.setInt(8, dto.getUrsacheZukunft());
			insertErfolg.setInt(9, dto.getKontrollierbar());
			insertErfolg.setInt(10, dto.getUrsacheAndereErfolge());
			insertErfolg.setInt(4, dto.getWichtig());
			insertErfolg.setString(5,dto.getOrt());
			
			insertErfolg.executeUpdate();	
		} catch (SQLException e) {
			System.err.println("Erfolg eintragen ist fehlgeschlagen");
			e.printStackTrace();
		}
		finally {
			try {
				insertErfolg.close();
			} catch (SQLException | NullPointerException e) {
				e.printStackTrace();
			}
		}
	}

	@Override
	public void addProblem(ProblemDTO dto) {
		PreparedStatement insertProblem = null;
		try {
			insertProblem = con.prepareStatement(insertProblemStr);
			insertProblem.setTimestamp(1, dto.getEingetragenAm());
			insertProblem.setString(2, dto.getBenutzername());
			insertProblem.setString(3, dto.getBeschreibung());
			insertProblem.setString(6, dto.getUrsache());
			insertProblem.setInt(7, dto.getUrsacheOrt());
			insertProblem.setInt(8, dto.getUrsacheZukunft());
			insertProblem.setInt(9, dto.getKontrollierbar());
			insertProblem.setInt(10, dto.getUrsacheAndereProbleme());
			insertProblem.setInt(4, dto.getWichtig());
			insertProblem.setString(5,dto.getOrt());
			insertProblem.executeUpdate();	

		} catch (SQLException e) {
			System.err.println("Problem eintragen ist fehlgeschlagen");
			e.printStackTrace();
		}
		finally {
			try {
				insertProblem.close();
			} catch (SQLException | NullPointerException e) {
				e.printStackTrace();
			}
		}
		
	}

	@Override
	public int getAnzahlProbleme(String benutzername) {
		try {
			ResultSet rs = stmt.executeQuery("SELECT COUNT(*) AS n FROM Problem where name = '"+benutzername+"';");
			rs.next();
			int result = rs.getInt("n");
			rs.close();
			return result;
		} catch (Exception e) {
			System.err.println("Erfolgsanzahl rausfinden ist fehlgeschlagen");
			e.printStackTrace();
		}
		return -1; //should not happen
	}

	@Override
	public int getAnzahlErfolg(String benutzername) {
		try {
			ResultSet rs = stmt.executeQuery("SELECT COUNT(*) AS n FROM Erfolg where name = '"+benutzername+"';");
			rs.next();
			int result = rs.getInt("n");
			rs.close();
			return result;
		} catch (Exception e) {
			System.err.println("Problemanzahl rausfinden ist fehlgeschlagen");
			e.printStackTrace();
		}
		return -1; //should not happen
	}

	@Override
	public String getPass(String nameOrEmail) {
		String pass = null;
		ResultSet rs;
		try {
			PreparedStatement query1 = con.prepareStatement(getBenutzerPWStr);
			query1.setString(1, nameOrEmail);
			query1.setString(2, nameOrEmail);	
			rs = query1.executeQuery();	
			if(rs.next()) {
				pass = rs.getString("pw");
			}
			else {
				PreparedStatement query2 = con.prepareStatement(getAdminPWStr);
				query2.setString(1, nameOrEmail);	
				rs = query2.executeQuery();
				if(rs.next()) {
					pass = rs.getString("pw");
				}
			}
			rs.close();
		} catch (SQLException e) {
			//pass bleibt null
		}
		
		return pass;
	}

	@Override
	public BenutzerDTO getBenutzer(String benutzername)
	{
		BenutzerDTO dto = null;
		ResultSet rs;
		try {
			PreparedStatement insertBenutzer = con.prepareStatement(getRegistrierungStr);
			insertBenutzer.setString(1, benutzername);
			insertBenutzer.setString(2, benutzername);
			rs = insertBenutzer.executeQuery();
			if(rs.next()) {
				dto = new BenutzerDTO(rs.getString("name"));
				dto.setRegistriertAm(rs.getTimestamp("registriertAm"));
				dto.setGebJahr(rs.getInt("gebJahr"));
				//aktuell werden nur diese 3 Attribute gesetzt weil auch
				//nur diese gebraucht werden.
			}
			rs.close();
		} catch (SQLException e) {
			//dto bleibt null
		}
		return dto;
	}
	
	@Override
	public void setPassReset(Timestamp time, String hash, String nameOrEmail) {
		PreparedStatement setPassReset = null;
		try {
			setPassReset = con.prepareStatement(setPassResetStr);
			setPassReset.setString(1, hash);
			setPassReset.setTimestamp(2, time);
			setPassReset.setString(3, nameOrEmail);
			setPassReset.setString(4, nameOrEmail);
			setPassReset.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				setPassReset.close();
			} catch (SQLException | NullPointerException e) {
				e.printStackTrace();
			}
		}
	}
	
	private void setPassReset(String hash, String nameOrEmail) {
		this.setPassReset(new Timestamp(System.currentTimeMillis()), hash, nameOrEmail);
	}
	
	//TODO muss ein Preparedstatemend sein
	@Override
	public Timestamp getResetTime(String hash) {
		Timestamp result = null;
		try {
			ResultSet rs = stmt.executeQuery("SELECT resettime FROM Benutzer WHERE pwreset = '"+hash+"';");
			if(rs.next()) {
				result = rs.getTimestamp("resettime");
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}
	//TODO muss ein Preparedstatemend sein
	@Override
	public boolean findEmail(String email) {
		boolean result = false;
		try {
			ResultSet rs = stmt.executeQuery("SELECT email FROM Benutzer WHERE email = '"+email+"';");
			if(rs.next()) {
				result = true;
			}
			rs.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@Override
	public void setPass(String hash, String pass) {
		try {
			PreparedStatement getName = con.prepareStatement(getNameByHashStr);
			getName.setString(1, hash);	
			ResultSet rs = getName.executeQuery();	
			if(rs.next()) {
				String name = rs.getString("name");
				PreparedStatement setPw = con.prepareStatement(setPwStr);
				setPw.setString(1, Hash.hashPass(pass, name));
				setPw.setString(2, name);
				setPw.executeUpdate();
				this.setPassReset("", name); //daten l�schen > mehr Sicherheit und Speicherplatz
			}
			rs.close();
		} catch (SQLException e) {
			System.err.println("Neues Passwort setzen ist fehlgeschlagen");
			e.printStackTrace();
		}
	}

}
