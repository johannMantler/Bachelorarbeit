package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import app.model.MailSender;

/**
 * Servlet implementation class KontaktServlet
 */
@WebServlet("/kontakt")
public class KontaktServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    private MailSender mailSender;

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		if(session == null) {
			return; //sollte eig. nicht passieren...
		}
		String name = (String)session.getAttribute(Session.USERNAME);
		String filteredUserInput = request.getParameter("nachrichtAnUns").replaceAll("<((\\s|.)*?)>", ""); //gegen HTML-Injection!
		String msg = "<html><head><meta http-equiv=\"Content-Type\"  content=\"text/html\" charset=\"UTF-8\" /></head><body>"
				+ "Über das Kontaktformular schrieb Benutzer namens "+name+" folgende Nachricht:<br>"
				+ "<p>"
				+ filteredUserInput
				+ "</p>"
				+ "</body></html>";
		String header = "Nachricht von " + name;

		System.err.println(msg);
		mailSender = new MailSender();
		try {
			mailSender.sendMail(header, msg);
		} catch (Exception e) {
			Session.setError(response, "Versenden der E-Mail ist fehlgeschlagen.");
		}
	}
}
