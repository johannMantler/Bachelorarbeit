package app.model;
import java.sql.Timestamp;

/**
 * Datentransferobjekt für die Daten eines Benutzers.
 * @author Johann Mantler
 *
 */
public class BenutzerDTO {
	
	private String name;
	private String pw;
	private String email;
	
	private Timestamp registriertAm;
	private int geschlecht;
	private int gebJahr;
	private int abschluss;
	private String beruflich;
	private int compPrivatJahre;
	private int compBeruflichJahre;
	private int compPrivatStd;
	private int compBeruflichStd;
	private int kenntnisComp;
	private int kenntnisOS;
	private int kenntnisInternet;
	private int kenntnisSW;
	private int osWindows;
	private int osMac;
	private int osLinux;
	private int osAndere;
	
	/**
	 * Erzeugt ein BenutzerDTO Objekt und initialisiert dieses sogleich.
	 * @param name Name des Benutzers
	 * @param pw Das Passwort
	 */
	public BenutzerDTO(String name, String pw) {
		this.name = name;
		this.pw = pw;
		this.setRegistriertAm(new Timestamp(System.currentTimeMillis()));
		this.initIntAttributes(Export.DEFAULT_INT_VALUE);
		this.initStringAttributes(Export.DEFAULT_STRING_VALUE);
	}
	/**
	 * Achtung: Falls das BenutzerDTO-Objekt in der
	 * DB gespeichert werden soll, muss zwingend ein Passwort
	 * nachträglich gesetzt werden.
	 * @param name
	 */
	public BenutzerDTO(String name) {
		this(name, null);
	}
	
	/**
	 * Initialisiert die String Variablen mit default-Werten.
	 * Nur name und pw werden bleiben null!
	 * @param val der Default-Wert
	 */
	private void initStringAttributes(String val) {
		
		beruflich = val;
	}

	/**
	 * Initialisiert die int Variablen mit default-Werten.
	 * @param val der Default-Wert
	 */
	private void initIntAttributes(int val) {
		abschluss  = val;
		geschlecht = val;
		setGebJahr(val);
		compPrivatJahre = val;
		compBeruflichJahre = val;
		compPrivatStd = val;
		compBeruflichStd = val;
		kenntnisComp = val;
		kenntnisOS = val;
		kenntnisInternet = val;
		kenntnisSW = val;
		osWindows = val;
		osLinux = val;
		osAndere = val;
		osMac = val;
		
	}

	/**
	 * @return registriertAm
	 */
	public Timestamp getRegistriertAm()
	{
		return registriertAm;
	}
	/**
	 * 
	 * @return gebJahr
	 */
	public int getGebJahr()
	{
		return gebJahr;
	}
	/**
	 * 
	 * @return email
	 */
	public String getEmail()
	{
		return email;
	}
	/**
	 * Setzt die E-Mail.
	 * precondition: Die Email darf nicht nocheinmal
	 * existieren!
	 * @param email
	 */
	public void setEmail(String email) {
		if(email != null) {
			if(!email.equals("")) {
				this.email = email;
			}
		}
	}
	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	/**
	 * @return the pw
	 */
	public String getPw() {
		return pw;
	}
	
	/**
	 * @return the geschlecht
	 */
	public int getGeschlecht() {
		return geschlecht;
	}
	/**
	 * @return the abschluss
	 */
	public int getAbschluss() {
		return abschluss;
	}
	/**
	 * @return the beruflich
	 */
	public String getBeruflich() {
		return beruflich;
	}
	/**
	 * @return the compPrivatJahre
	 */
	public int getCompPrivatJahre() {
		return compPrivatJahre;
	}
	/**
	 * @return the compBeruflichJahre
	 */
	public int getCompBeruflichJahre() {
		return compBeruflichJahre;
	}
	/**
	 * @return the compPrivatStd
	 */
	public int getCompPrivatStd() {
		return compPrivatStd;
	}
	/**
	 * @return the compBeruflichStd
	 */
	public int getCompBeruflichStd() {
		return compBeruflichStd;
	}
	/**
	 * @return the kenntnisComp
	 */
	public int getKenntnisComp() {
		return kenntnisComp;
	}
	/**
	 * @return the kenntnisOS
	 */
	public int getKenntnisOS() {
		return kenntnisOS;
	}
	/**
	 * @return the kenntnisInternet
	 */
	public int getKenntnisInternet() {
		return kenntnisInternet;
	}
	/**
	 * @return the kenntnisSW
	 */
	public int getKenntnisSW() {
		return kenntnisSW;
	}
	/**
	 * @return the osWindows
	 */
	public int getOsWindows() {
		return osWindows;
	}
	/**
	 * @return the osMac
	 */
	public int getOsMac() {
		return osMac;
	}
	/**
	 * @return the osLinux
	 */
	public int getOsLinux() {
		return osLinux;
	}
	/**
	 * @return the osAndere
	 */
	public int getOsAndere() {
		return osAndere;
	}
	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}
	/**
	 * @param pw the pw to set
	 */
	public void setPw(String pw) {
		this.pw = pw;
	}

	/**
	 * @param geschlecht the geschlecht to set
	 */
	public void setGeschlecht(String geschlecht) {
		this.geschlecht = Export.parseInt(geschlecht);
	}
	/**
	 * @param gebJahr the gebJahr to set
	 */
	public void setGebJahr(String gebJahr) {
		this.gebJahr = Export.parseInt(gebJahr);
	}
	/**
	 * @param abschluss the abschluss to set
	 */
	public void setAbschluss(String abschluss) {
		this.abschluss = Export.parseInt(abschluss);
	}
	/**
	 * @param beruflich the beruflich to set
	 */
	public void setBeruflich(String beruflich) {
		this.beruflich = Export.parseString(beruflich);
	}
	/**
	 * @param compPrivatJahre the compPrivatJahre to set
	 */
	public void setCompPrivatJahre(String compPrivatJahre) {
		this.compPrivatJahre = Export.parseInt(compPrivatJahre);
	}
	/**
	 * @param compBeruflichJahre the compBeruflichJahre to set
	 */
	public void setCompBeruflichJahre(String compBeruflichJahre) {
		this.compBeruflichJahre = Export.parseInt(compBeruflichJahre);
	}
	/**
	 * @param compPrivatStd the compPrivatStd to set
	 */
	public void setCompPrivatStd(String compPrivatStd) {
		this.compPrivatStd = Export.parseInt(compPrivatStd);
	}
	/**
	 * @param compBeruflichStd the compBeruflichStd to set
	 */
	public void setCompBeruflichStd(String compBeruflichStd) {
		this.compBeruflichStd = Export.parseInt(compBeruflichStd);
	}
	/**
	 * @param kenntnisComp the kenntnisComp to set
	 */
	public void setKenntnisComp(String kenntnisComp) {
		this.kenntnisComp = Export.parseInt(kenntnisComp);
	}
	/**
	 * @param kenntnisOS the kenntnisOS to set
	 */
	public void setKenntnisOS(String kenntnisOS) {
		this.kenntnisOS = Export.parseInt(kenntnisOS);
	}
	/**
	 * @param kenntnisInternet the kenntnisInternet to set
	 */
	public void setKenntnisInternet(String kenntnisInternet) {
		this.kenntnisInternet = Export.parseInt(kenntnisInternet);
	}
	/**
	 * @param kenntnisSW the kenntnisSW to set
	 */
	public void setKenntnisSW(String kenntnisSW) {
		this.kenntnisSW = Export.parseInt(kenntnisSW);
	}
	/**
	 * @param osWindows the osWindows to set
	 */
	public void setOsWindows(String osWindows) {
		this.osWindows = Export.parseInt(osWindows);
	}
	/**
	 * @param osMac the osMac to set
	 */
	public void setOsMac(String osMac) {
		this.osMac = Export.parseInt(osMac);
	}
	/**
	 * @param osLinux the osLinux to set
	 */
	public void setOsLinux(String osLinux) {
		this.osLinux = Export.parseInt(osLinux);
	}
	/**
	 * @param osAndere the osAndere to set
	 */
	public void setOsAndere(String osAndere) {
		this.osAndere = Export.parseInt(osAndere);
	}
	/**
	 * @param registriertAm the registriertAm to set
	 */
	public void setRegistriertAm(Timestamp registriertAm) {
		this.registriertAm = registriertAm;
	}
	/**
	 * @param gebJahr the gebJahr to set
	 */
	public void setGebJahr(int gebJahr) {
		this.gebJahr = gebJahr;
	}
	
	
	
}
