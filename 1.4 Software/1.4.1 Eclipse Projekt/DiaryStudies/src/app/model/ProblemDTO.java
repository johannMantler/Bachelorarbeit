package app.model;

import java.sql.Timestamp;

public class ProblemDTO {
	/**
	 * Anzahl der Fragen im Problemfragebogen.
	 */
	public static final int ANZAHL_FRAGEN = 8;
	
	
	//Speicherung der Antworten in folgenden Variablen:
	private String beschreibung			= Export.DEFAULT_STRING_VALUE;
	private String ursache				= Export.DEFAULT_STRING_VALUE;
	private int ursacheOrt				= Export.DEFAULT_INT_VALUE;
	private int ursacheZukunft			= Export.DEFAULT_INT_VALUE;
	private int kontrollierbar			= Export.DEFAULT_INT_VALUE;
	private int ursacheAndereProbleme	= Export.DEFAULT_INT_VALUE;
	private int wichtig					= Export.DEFAULT_INT_VALUE;
	private String ort					= Export.DEFAULT_STRING_VALUE;

	
	private final String benutzername;		// Von wem ist der Problemeintrag?
	private final Timestamp eingetragenAm;	// Wann
	
	
	public ProblemDTO(String benutzername) {
		this.benutzername = benutzername;
		this.eingetragenAm = new Timestamp(System.currentTimeMillis());
	}
	
	public String getBenutzername() {
		return benutzername;
	}

	public String getBeschreibung() {
		return beschreibung;
	}

	public void setBeschreibung(String beschreibung) {
		this.beschreibung = Export.parseString(beschreibung);
	}

	public String getUrsache() {
		return ursache;
	}

	public void setUrsache(String ursache) {
		this.ursache = Export.parseString(ursache);
	}

	public int getUrsacheOrt() {
		return ursacheOrt;
	}

	public void setUrsacheOrt(String ursacheOrt) {
		this.ursacheOrt = Export.parseInt(ursacheOrt);
	}

	public int getUrsacheZukunft() {
		return ursacheZukunft;
	}

	public void setUrsacheZukunft(String ursacheZukunft) {
		this.ursacheZukunft = Export.parseInt(ursacheZukunft);
	}

	public int getKontrollierbar() {
		return kontrollierbar;
	}

	public void setKontrollierbar(String kontrollierbar) {
		this.kontrollierbar = Export.parseInt(kontrollierbar);
	}

	public int getUrsacheAndereProbleme() {
		return ursacheAndereProbleme;
	}

	public void setUrsacheAndereProbleme(String ursacheAndereErfolge) {
		this.ursacheAndereProbleme = Export.parseInt(ursacheAndereErfolge);
	}

	public int getWichtig() {
		return wichtig;
	}

	public void setWichtig(String wichtig) {
		this.wichtig = Export.parseInt(wichtig);
	}

	public String getOrt() {
		return ort;
	}

	public void setOrt(String ort) {
		this.ort = Export.parseString(ort);
	}

	public Timestamp getEingetragenAm() {
		return eingetragenAm;
	}

}
