package app.model;
/**
 * Data Transfer Object für einen Fragebogen.
 * @author Johann Mantler
 *
 */
public class FragebogenDTO {
	/**
	 * Anzahl der Fragen im Fragebogen.
	*/
	public final static int FRAGEN_ANZAHL = 29;
	private int[] fragen = new int[FragebogenDTO.FRAGEN_ANZAHL];
	private String benutzername;
	/**
	 * Bei der Objekterzeugung werden alle fragen mit Default-Werten
	 * belegt
	 * @param benutzername
	 */
	public FragebogenDTO(String benutzername) {
		this.benutzername = benutzername;
		for(int i = 0; i < fragen.length; i++) {
			fragen[i]  = Export.DEFAULT_INT_VALUE;
		}
	}
	/**
	 * Setzt eine Frage.
	 * @param frageNr
	 * @param val
	 */
	public void setFrage(int frageNr, String val) {
		fragen[frageNr] = Export.parseInt(val);
	}
	/**
	 * Holt eine Frage.
	 * @param frageNr
	 * @return Inhalt der gewünschten Frage.
	 */
	public int getFrage(int frageNr) {
		return fragen[frageNr];
	}
	/**
	 * Holt den Benutzernamen, der zu diesem Fragebogen zugeordnet ist.
	 * @return benutzername
	 */
	public String getBenutzername() {
		return benutzername;
	}
}
