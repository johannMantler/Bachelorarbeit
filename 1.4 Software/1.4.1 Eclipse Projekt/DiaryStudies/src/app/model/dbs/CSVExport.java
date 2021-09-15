package app.model.dbs;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;

import app.model.ErfolgDTO;
import app.model.Export;
import app.model.FragebogenDTO;
import app.model.ProblemDTO;
/**
 * Exportiert den Datenbestand in eine CSV-Datei.
 * @author Johann Mantler
 *
 */
public class CSVExport extends Export {
	private int maxE = 0; //Was ist die maximale Erfolgsanzahl, die ein Benutzer hat?
	private int maxP = 0; //max Problemanzahl
	private String fileName = "data.csv";
	private String d = ","; //Trennzeichen zwischen den Zellen
	PrintWriter writer;

	@Override
	public File export() {
		File result = null;
		openFile();
		if(writer == null) {
			return null;
		}
		connect();
		try {
			setMaxEintraege();
			writeHeaderRow();
			writeBody();
			result = new File(fileName);
		}
		catch (Exception e) {
			e.printStackTrace();
			System.err.println("\nProbleme mit der Verbindung, Autocommit konnte nicht ausgeschaltet werden.");
			return null;
			
		}
		finally {
			writer.close();
			disconnect();
		}
		
		return result;
	}
	
	private void openFile() {
		try {
			writer = new PrintWriter(new BufferedWriter(new FileWriter(fileName)));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	private void writeHeaderRow(){
		writer.print("Proband"+d+"Name"+d+"EMail"+d+"Alter"+d+"Geschlecht"+d+"Bildung"+d+"Beruf"+d+"PC Nutzung priv. Jahre"+d+"PC Nutzung beruf. Jahre"+d+"PC Nutzung priv. Stunden"+d+"PC Nutzung beruf. Stunden"+d+"Kenntnisse allg."+d+"Kenntnisse Betriebssystem"+d+"Kenntnisse Internet"+d+"Kenntnisse Programme"+d+"Benutzt Windows"+d+"Benutzt Mac"+d+"Benutzt Linux"+d+"Benutzt Andere BS");
		
		//Fragebogen
		for(int i = 1; i <= FragebogenDTO.FRAGEN_ANZAHL; i++ ) {
			writer.print(d+"ASF_F"+i);
		}
		
		//Erfolgsfragebogen
		for(int i = 1; i <= maxE; i++) {
			for(int f = 1; f <= ErfolgDTO.ANZAHL_FRAGEN; f++) { //es gibt 8 fragen zum Erfolg
				writer.print(d+"E"+i+"_"+"F"+f+"");
			}
		}
		
		//Problemfragebogen
		for(int i = 1; i <= maxP; i++) {
			for(int f = 1; f <= ProblemDTO.ANZAHL_FRAGEN; f++) { //es gibt 8 fragen zum Erfolg
				writer.print(d+"P"+i+"_"+"F"+f+"");
			}
		}			
		nextLine();
	}

	private void setMaxEintraege() throws Exception {
		ResultSet rs;
		try {
			//max Erfolgesanzahl ermitteln
			rs = stmt.executeQuery("select max(n) from (select count(name) as n from Erfolg group by name)");
			rs.next();
			maxE = rs.getInt(1);
			
			//max Problemanzahl ermitteln
			rs = stmt.executeQuery("select max(n) from (select count(name) as n from Problem group by name)");
			rs.next();
			maxP = rs.getInt(1);
			
			rs.close();
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("anzahl rausfinden ist fehlgeschlagen");	
		}
	}
	

	private void writeBody() throws Exception {
		int counter = 0;
		String user;
		ResultSet rs;
		try {
			rs = stmt.executeQuery("SELECT name, email FROM Benutzer");
			while(rs.next()) {
				counter++;
				user = rs.getString("name");
				writer.print(counter + d + user + d + (rs.getString("email")==null ? "111" : rs.getString("email"))+d);
				writeRegistrierung(user);
				writeFragebogen(user);
				writeErfolge(user);
				writeProbleme(user);
				nextLine();
			}
			rs.close();
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("CSV Datentabelle erstellen ist fehlgeschlagen");
		}
	}
	
	private void writeRegistrierung(String user) throws SQLException {
		ResultSet userRs = stmt.executeQuery("SELECT * FROM Registrierung WHERE name = '"+user+"'");
		userRs.next(); 
		writer.print(
				userRs.getInt("gebJahr")+d+
				userRs.getInt("Geschlecht")+d+
				userRs.getInt("abschluss")+d+
				userRs.getString("beruflich")+d+
				userRs.getInt("CompPrivatJahre")+d+
				userRs.getInt("CompBeruflichJahre")+d+
				userRs.getInt("CompPrivatStd")+d+
				userRs.getInt("CompBeruflichStd")+d+
				userRs.getInt("KenntnisComp")+d+
				userRs.getInt("KenntnisOs")+d+
				userRs.getInt("KenntnisInet")+d+
				userRs.getInt("KenntnisSw")+d+
				userRs.getInt("osWindows")+d+
				userRs.getInt("osMac")+d+
				userRs.getInt("osLinux")+d+
				userRs.getInt("osAndere"));
		userRs.close();
	}
	
	private void writeFragebogen(String user) throws SQLException {
		ResultSet userRs = stmt.executeQuery("SELECT * FROM Fragebogen WHERE name = '"+user+"'");
		if(!userRs.next()) {
			for(int i = 1; i <= FragebogenDTO.FRAGEN_ANZAHL; i++ ) {
				writer.print(d+Export.DEFAULT_STRING_VALUE);
			}
		}
		else {
			for(int i = 1; i <= FragebogenDTO.FRAGEN_ANZAHL; i++ ) {
				writer.print(d+userRs.getInt("f"+i));
			}
		}
		userRs.close();
	}
	
	private void writeErfolge(String user) throws SQLException {
		if(maxE == 0) {
			return; //Es gibt �berhaupt keine Erfolgseintraege
		}
		ResultSet userRs = stmt.executeQuery("SELECT * FROM Erfolg WHERE name = '"+user+"' ORDER BY nr");
		int userErfolgeAnzahl = 0; 
		while(userRs.next()) {
			userErfolgeAnzahl++;
			writer.print(d+
					userRs.getString("beschreibung")+d+
					userRs.getString("wichtig")+d+
					userRs.getString("ort")+d+
					userRs.getString("ursache")+d+
					userRs.getInt("ursacheOrt")+d+
					userRs.getString("ursacheZukunft")+d+
					userRs.getString("kontrollierbar")+d+
					userRs.getString("ursacheAndereErfolge")
					);

		}
		//restliche fragen mit default werte auff�llen
		for(int i = 0; i < maxE - userErfolgeAnzahl; i++) {
			for(int f = 0; f < ErfolgDTO.ANZAHL_FRAGEN; f++) {
				writer.print(d+Export.DEFAULT_STRING_VALUE);
			}
		}
		userRs.close();
	}
	
	private void writeProbleme(String user) throws SQLException {
		if(maxP == 0) {
			return; //Es gibt �berhaupt keine Probleme
		}
		ResultSet userRs = stmt.executeQuery("SELECT * FROM Problem WHERE name = '"+user+"' ORDER BY nr");
		int userProbAnzahl = 0;
		while(userRs.next()) {
			userProbAnzahl++;
			writer.print(d+
					userRs.getString("beschreibung")+d+
					userRs.getString("wichtig")+d+
					userRs.getString("ort")+d+
					userRs.getString("ursache")+d+
					userRs.getInt("ursacheOrt")+d+
					userRs.getString("ursacheZukunft")+d+
					userRs.getString("kontrollierbar")+d+
					userRs.getString("ursacheAndereProbleme")
					);

		}
		//restliche fragen mit default werte auff�llen
		for(int i = 0; i < maxP - userProbAnzahl; i++) {
			for(int f = 0; f < ProblemDTO.ANZAHL_FRAGEN; f++) {
				writer.print(d+Export.DEFAULT_STRING_VALUE);
			}
		}
		userRs.close();
	}
	
	private void nextLine() {
		writer.flush();
		writer.println();
	}
}
