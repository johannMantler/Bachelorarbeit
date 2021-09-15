package app.model;

import java.io.File;

import app.model.dbs.DBSConnect;

/**
 * Schnittstelle für den Datenexport.
 * @author Johann Mantler
 *
 */
public abstract class Export extends DBSConnect {
	/**
	 * Standardwert für den Export von int-Variablen.
	 */
	public static int DEFAULT_INT_VALUE = 111;
	/**
	 * Standardwert für den Export von String-Variablen.
	 */
	public static String DEFAULT_STRING_VALUE = "111";
	/**
	 * Wandelt einen String in den Default Value um, falls
	 * dieser String noch nicht gesetzt ist.
	 * @param str der String 
	 * @return Export.DEFAULT_Int_VALUE falls der String keine Zahl enth�lt.
	 */
	public static int parseInt(String str) {
		int result = Export.DEFAULT_INT_VALUE;
		try {
			result = Integer.parseInt(str);
		}
		catch(Exception e) {
			//tue nichts
		}
		return result;
	}
	/**
	 * Wandelt einen String in den Default Value um, falls
	 * dieser String noch nicht gesetzt ist.
	 * @param str der String
	 * @return Export.DEFAULT_STRING_VALUE falls der String null oder "undefined" ist.
	 */
	public static String parseString(String str) {
		String result = Export.DEFAULT_STRING_VALUE;
		if(str != null) {
			if( ! str.equals("") && ! str.equals("undefined")){
				result = str;
			}
		}
		return result;
	}
	/**
	 * Exportiert die Daten und gibt ein File-Objekt zurück.
	 * @return das Objekt mit den exportierten Daten.
	 */
	public abstract File export();
}
