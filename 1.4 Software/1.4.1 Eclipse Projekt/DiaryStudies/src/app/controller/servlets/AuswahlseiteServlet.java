package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.dbs.BenutzerDAO;

/**
 * Servlet implementation class AuswahlseiteServlet
 */
@WebServlet("/auswahl")
public class AuswahlseiteServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Benutzerkonto dao = new BenutzerDAO();
	private int maxEintraege = 10;

	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

	    String name = Session.getBenutzername(request);
	    if(name == null) {
	    	return; //das sollte nicht passieren! Eine Session muss zu diesem Zeitpunkt schon existieren.
	    }

		dao.connect();
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(
				 "{ \"max\": "+this.maxEintraege+", \"erfolge\": "+dao.getAnzahlErfolg(name)+", \"probleme\": "+dao.getAnzahlProbleme(name)+" }");       
		dao.disconnect();
	}
}
