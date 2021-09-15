package app.controller.servlets;

import java.io.IOException;
import java.math.BigInteger;
import java.security.SecureRandom;
import java.sql.Timestamp;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.Hash;
import app.model.MailSender;
import app.model.dbs.BenutzerDAO;


/**
 * Servlet implementation class PassResetServlet
 */
@WebServlet(name="PassResetServlet",urlPatterns={"/reset"})
public class PwResetServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private static final int TIME_TO_RESET = 30; //in minutes
    private Benutzerkonto dao = new BenutzerDAO(true);
	private MailSender mail = new MailSender();

    
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String hash = request.getParameter("id");
		if(hash == null) {
			return;
		}
		Timestamp oldTime = dao.getResetTime(hash);
		boolean isInTime = NewPwServlet.isInTime(oldTime, PwResetServlet.TIME_TO_RESET);
		if(isInTime) {
			response.sendRedirect("pwreset.html#pwResetPage?id="+hash);
		}
		else {
			response.sendRedirect("pwreset.html#pwResetInvalid");
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String email = request.getParameter("email");
		if(email == null) {
			Session.setError(response, "Bitte eine E-Mail Adresse angeben.");
			return;
		}
		if(!dao.findEmail(email)) {
			Session.setError(response, "E-Mail ist nicht registriert.");
			return;
		}
		SecureRandom random = new SecureRandom();
	    byte bytes[] = new byte[20]; 
	    random.nextBytes(bytes);
	    String hash = Hash.hash(email, new BigInteger(1, bytes).toString(16));
	    dao.setPassReset(new Timestamp(System.currentTimeMillis()), hash, email);
		
	    String link = "http://diary.fh-luebeck.de/pwreset.html#pwResetPage?id="+hash;
	    String msg =  "<html><head><meta charset=\"utf-8\"/></head><body>"
	    			+ "Hallo,<br>"
	    			+ "im folgendem finden Sie ein Link, mit dem Sie ihr Passwort zurücksetzen können.<br>"
	    			+ "Falls Sie keine Ahnung haben, warum diese E-Mail in Ihrem Postfach erscheint oder "
	    			+ "Sie Ihr altes Password behalten möchten, ignorieren oder löschen Sie diese E-Mail einfach.<br><br>"
	    			+ "<div><a href=\""+link+"\">Klick mich, um das Passwort zurück zu setzen</a></div><br>"
	    			+ "Mit freundlichen Grüßen,<br>"
	    			+ "Ihr Diary Studies Team"
	    			+ "</body></html>";

	    try {
			mail.sendMail("Passwort zurücksetzen", msg, email);
		} catch (Exception e) {
			Session.setError(response, "Versenden der E-Mail ist fehlgeschlagen.");
		}
	}

}
