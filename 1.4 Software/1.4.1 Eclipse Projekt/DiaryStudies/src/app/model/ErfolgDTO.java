package app.model;

import java.sql.Timestamp;
/**
 * Ein Daten Transfer Object zum Speichern eines Erfolges.
 * @author Johann Mantler
 *
 */
public class ErfolgDTO {
	/**
	 * Anzahl der Fragen im Erfolgsfragebogen.
	 */
	public static final int ANZAHL_FRAGEN = 8;
	
	//Speicherung der Antworten in folgenden Variablen:
	private String beschreibung			= Export.DEFAULT_STRING_VALUE;
	private String ursache				= Export.DEFAULT_STRING_VALUE;
	private int ursacheOrt				= Export.DEFAULT_INT_VALUE;
	private int ursacheZukunft			= Export.DEFAULT_INT_VALUE;
	private int kontrollierbar			= Export.DEFAULT_INT_VALUE;
	private int ursacheAndereErfolge	= Export.DEFAULT_INT_VALUE;
	private int wichtig					= Export.DEFAULT_INT_VALUE;
	private String ort					= Export.DEFAULT_STRING_VALUE;

	
	private final String benutzername;		// Von wem ist der Erfolgseintrag?
	private final Timestamp eingetragenAm;	// Wann
	
	
	/**
	 * @param benutzername
	 */
	public ErfolgDTO(String benutzername) {
		this.benutzername = benutzername;
		this.eingetragenAm = new Timestamp(System.currentTimeMillis());
	}

	/**
	 * @return benutzername
	 */
	public String getBenutzername() {
		return benutzername;
	}

	/**
	 * @return beschreibung
	 */
	public String getBeschreibung() {
		return beschreibung;
	}

	/**
	 * @param beschreibung
	 */
	public void setBeschreibung(String beschreibung) {
		this.beschreibung = Export.parseString(beschreibung);
	}

	/**
	 * @return ursache
	 */
	public String getUrsache() {
		return ursache;
	}

	/**
	 * @param ursache
	 */
	public void setUrsache(String ursache) {
		this.ursache = Export.parseString(ursache);
	}

	/**
	 * @return ursacheOrt
	 */
	public int getUrsacheOrt() {
		return ursacheOrt;
	}

	/**
	 * @param ursacheOrt
	 */
	public void setUrsacheOrt(String ursacheOrt) {
		this.ursacheOrt = Export.parseInt(ursacheOrt);
	}

	/**
	 * @return ursacheZukunft
	 */
	public int getUrsacheZukunft() {
		return ursacheZukunft;
	}

	/**
	 * @param ursacheZukunft
	 */
	public void setUrsacheZukunft(String ursacheZukunft) {
		this.ursacheZukunft = Export.parseInt(ursacheZukunft);
	}

	/**
	 * @return kontrollierbar
	 */
	public int getKontrollierbar() {
		return kontrollierbar;
	}

	/**
	 * @param kontrollierbar
	 */
	public void setKontrollierbar(String kontrollierbar) {
		this.kontrollierbar = Export.parseInt(kontrollierbar);
	}

	/** 
	 * @return ursacheAnderErfolge
	 */
	public int getUrsacheAndereErfolge() {
		return ursacheAndereErfolge;
	}

	/**
	 * @param ursacheAndereErfolge
	 */
	public void setUrsacheAndereErfolge(String ursacheAndereErfolge) {
		this.ursacheAndereErfolge = Export.parseInt(ursacheAndereErfolge);
	}

	/**
	 * @return wichtig
	 */
	public int getWichtig() {
		return wichtig;
	}

	/**
	 * @param wichtig
	 */
	public void setWichtig(String wichtig) {
		this.wichtig = Export.parseInt(wichtig);
	}

	/**
	 * @return ort
	 */
	public String getOrt() {
		return ort;
	}

	/**
	 * @param ort
	 */
	public void setOrt(String ort) {
		this.ort = Export.parseString(ort);
	}

	/**
	 * @return eingetragenAm
	 */
	public Timestamp getEingetragenAm() {
		return eingetragenAm;
	}

}
