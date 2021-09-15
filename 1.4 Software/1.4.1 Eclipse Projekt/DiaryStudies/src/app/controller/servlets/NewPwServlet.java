package app.controller.servlets;

import java.io.IOException;
import java.sql.Timestamp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.dbs.BenutzerDAO;

/**
 * Servlet implementation class NewPassServlet
 */
@WebServlet(name = "NewPwServlet", urlPatterns = { "/newpw" })
public class NewPwServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Benutzerkonto dao = new BenutzerDAO(true);
	private static final int TIME_TO_SET = 15; //in minutes
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String hash = request.getParameter("id");
		String pw1 = request.getParameter("password");
		String pw2 = request.getParameter("password2");
		if(hash == null) {
			return; // der Hash wurde gelöscht..
		}
		if(pw1 == null || pw2 == null) {
			Session.setError(response, "Bitte alle Felder ausfüllen.");
			return;
		}
		if(!pw1.equals(pw2)) {
			Session.setError(response, "Passwörter stimmen nicht überein.");
			return;
		}
		Timestamp oldTime = dao.getResetTime(hash);
		boolean isInTime = NewPwServlet.isInTime(oldTime, NewPwServlet.TIME_TO_SET);
		if(isInTime) {
			dao.setPass(hash, pw1);
			System.err.println("NewPwServlet: Pw wird gesetzt.");
		}
		else {
			Session.setError(response, "Zeit ist abgelaufen.");
			//User muss nach Kenntnisnahme der Fehlermeldung auf den Dialog mit E-Mail Eingabe geschickt werden.
		}		
		
		
		
	}
	
	/**
	 * Prüft ob die verstrichene Zeit unter einer bestimmten
	 * Minutenzahl ist. Gemessen wird die Differenz aus dem aktuellem
	 * Zeitstempel und der Zeit, als der Hash zum Passwort zur�cksetzen
	 * generiert wurde.
	 * @param oldTime der Zeitpunkt, an dem der Hash generiert wurde.
	 * @param maxDif die max. Differenz in minuteneinheiten.
	 * @return true, falls die Differenz < time ist. False, falls die
	 * differenz >= time ist oder oldTime == null ist.
	 */
	public static boolean isInTime(Timestamp oldTime, int maxDif) {
		if(null == oldTime) {
			return false;
		}
		long difference = System.currentTimeMillis() - oldTime.getTime();
		long seconds = difference / 1000;
		long minutes = seconds / 60;
		if(minutes < maxDif) {
			return true;
		}
		return false;
	}

}
