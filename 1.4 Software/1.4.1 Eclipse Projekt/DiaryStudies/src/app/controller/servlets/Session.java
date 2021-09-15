package app.controller.servlets;

import java.io.IOException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Klassenbezogene Attribute und Methoden in Bezug auf eine Session,
 * welche immer wieder von Servlets gebraucht werden
 * sind hier zu finden.
 * @author Johann Mantler
 *
 */
public class Session {

	/**
	 * Globaler Name f�r das Sessionattribut username.
	 */
	public static String USERNAME = "u";
	/**
	 * Globaler Name f�r das Sesionattribut, welches speichert ob
	 * der User angemeldet bleiben soll oder nicht.
	 */
	public static String KEEP_ALIVE = "k";
	
	/**
	 * Setzt den Status des Response auf einen internen Server error und schreibt
	 * eine Nachricht in den Response.
	 * @param response die HTTP Response
	 * @param msg die Fehlernachricht, die der Client bekommen soll.
	 * @throws IOException
	 */
	public static void setError(HttpServletResponse response, String msg) throws IOException {
		response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
		response.getWriter().write(msg);
	}
	
	/**
	 * Liefert den Benutzernamen der aktuellen Sitzung (Session).
	 * @param request
	 * @return Name oder null, falls keine Sitzung oder Benutzername existiert
	 */
	public static String getBenutzername(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if(session != null) {
			return (String) session.getAttribute(Session.USERNAME);
		}
		
		return null; 
	}
	
	/**
	 * Erzeugt eine neue Session. Falls bereits eine Session zu der
	 * HTTP-Request existiert, wird sie erneuert.
	 * @param request der HTTPServletRequest
	 * @param username Name des Users.
	 * @param keepAlive Soll der User angemeldet bleiben?
	 */
	public static void createNewSession(HttpServletRequest request, String username, String keepAlive) {
		HttpSession session = request.getSession(true);
		if(!session.isNew()) {
			session.invalidate();
			session = request.getSession(true);
		}
		session.setAttribute(USERNAME, username);
		boolean keepSessionAlive = ("undefined".equals(keepAlive)) ? false : true;
		session.setAttribute(KEEP_ALIVE, new Boolean(keepSessionAlive));
		if(keepSessionAlive) {
			session.setMaxInactiveInterval(-1);//A negative time indicates the session should never timeout.
		}
		else {
			session.setMaxInactiveInterval(10); //3 hour login
		}
	}
	/**
	 * Erzeugt eine neue Session. Falls bereits eine Session zu der
	 * HTTP-Request existiert, wird sie erneuert.
	 * @param request der HTTPServletRequest
	 * @param username Name des Users.
	 * @param keepAlive Soll der User angemeldet bleiben?
	 */
	public static void createNewSession(HttpServletRequest request, String username, boolean keepAlive) {
		Session.createNewSession(request, username, new Boolean(keepAlive).toString());
	}
}
