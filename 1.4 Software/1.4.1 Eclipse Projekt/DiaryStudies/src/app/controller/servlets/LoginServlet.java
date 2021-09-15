package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import app.model.Benutzerkonto;
import app.model.Hash;
import app.model.dbs.BenutzerDAO;
import app.model.dbs.DBConfig;

/**
 * Servlet implementation class Login
 */
@WebServlet(name="LoginServlet",urlPatterns={"/login"})
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Benutzerkonto dao = new BenutzerDAO();   
	
	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		if(null != session) {
			String username = (String)session.getAttribute(Session.USERNAME);
			Session.createNewSession(request, username, (boolean)session.getAttribute(Session.KEEP_ALIVE));
			response.setContentType("text/plain");
			response.setCharacterEncoding("UTF-8");
			if(DBConfig.isAdmin(username)) {
				response.getWriter().write("admin.html"); 
			}
			else {
				response.getWriter().write("auswahl.html"); 
			}
			      
		}
		else {
			Session.setError(response, "");
		}
		 
	}
	
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String user = request.getParameter("username");
		String pass = request.getParameter("password");
		
		if(user == null) {
			Session.setError(response, "Benutzername darf nicht fehlen.");
		}
		else if(pass == null) {
			Session.setError(response, "Passwort darf nicht fehlen.");
		}
		else {
			dao.connect();
			String storedPass = dao.getPass(user);
			if(storedPass == null) {
				Session.setError(response, "Benutzername oder Passwort sind falsch."); //eigentlich ist nur der Benutzername falsch!
			}
			else if( ! storedPass.equals( Hash.hashPass(pass, user))){
				Session.setError(response, "Benutzername oder Passwort sind falsch."); // Passw�rter stimmen nicht �berein!
			}
			else {	//logged in
				response.setContentType("text/plain");
				response.setCharacterEncoding("UTF-8");       
				if(dao.isBenutzer(user)) {
					String keepSession = (String)request.getParameter("anmeldeDatenMerken");
					Session.createNewSession(request, user, keepSession);
					response.getWriter().write("auswahl.html");
				}
				else {	//if(dao.isAdmin(user))
					Session.createNewSession(request, user, "undefined"); //ein Admin soll nie angemeldet bleiben
					response.getWriter().write("admin.html");
				}
			}
			dao.disconnect();
		}
	}
}

