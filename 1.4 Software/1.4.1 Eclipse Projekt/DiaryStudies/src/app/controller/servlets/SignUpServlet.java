package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.BenutzerDTO;
import app.model.Hash;
import app.model.dbs.BenutzerDAO;

/**
 * Servlet implementation class Registry
 */
@WebServlet(name="SignUpServlet",urlPatterns={"/signup"})
public class SignUpServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Benutzerkonto dao = new BenutzerDAO();
	
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String user = request.getParameter("username");
		String pass = request.getParameter("password");

		if(user.equals("")) {
			Session.setError(response, "Benutzername darf nicht fehlen");
		}
		else if(pass.equals("")) {
			Session.setError(response, "Passwort darf nicht fehlen");
		}
		else {
			dao.connect();
			if( dao.isBenutzer(user) || dao.isAdmin(user)) {
				Session.setError(response, "Benutzername existiert schon");
			}
			else {
				String email = request.getParameter("email");
				if(email != null) {
					if(dao.isBenutzer(email)) {
						Session.setError(response, "Diese E-Mail Adresse ist schon registriert");
						return;
					}
				}
				
				BenutzerDTO dto = new BenutzerDTO(user);
				dto.setBeruflich(request.getParameter("derzeitBeruflich"));
				dto.setEmail(request.getParameter("email"));
				dto.setAbschluss(request.getParameter("bildungsabschluss"));
				dto.setCompBeruflichJahre(request.getParameter("compBeruflich"));
				dto.setCompBeruflichStd(request.getParameter("compStdBeruflich"));
				dto.setCompPrivatJahre(request.getParameter("compPrivat"));
				dto.setCompPrivatStd(request.getParameter("compStdPrivat"));
				dto.setKenntnisComp(request.getParameter("regRadio_1"));
				dto.setKenntnisOS(request.getParameter("regRadio_2"));
				dto.setKenntnisInternet(request.getParameter("regRadio_3"));
				dto.setKenntnisSW(request.getParameter("regRadio_4"));
				dto.setOsWindows(request.getParameter("os_windows"));	
				dto.setOsLinux(request.getParameter("os_linux"));
				dto.setOsMac(request.getParameter("os_mac"));
				dto.setOsAndere(request.getParameter("os_andere"));
				dto.setGebJahr(request.getParameter("gebJahr"));
				dto.setGeschlecht(request.getParameter("geschlecht"));
				dto.setPw(Hash.hashPass(pass, dto));
				dao.signup(dto);
				String keepSession = (String)request.getParameter("anmeldeDatenMerken");
				Session.createNewSession(request, user, keepSession);
				dao.disconnect();
			}
		}		
	}
}
