package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.FragebogenDTO;
import app.model.dbs.BenutzerDAO;

/**
 * Servlet implementation class FragebogenServlet
 */
@WebServlet("/fragebogen")
public class FragebogenServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Benutzerkonto dao = new BenutzerDAO();   

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	    
		String name = Session.getBenutzername(request);
	    if(name == null) {
	    	return; //das sollte nicht passieren! Eine Session muss zu diesem Zeitpunkt schon existieren.
	    }
	    
		FragebogenDTO dto = new FragebogenDTO(name);
		for(int i = 0; i < FragebogenDTO.FRAGEN_ANZAHL; i++) {
			dto.setFrage(i, request.getParameter("frage_"+(i+1)));
		}
		dao.connect();
		dao.setFragebogen(dto);
		dao.disconnect();
	}

}
