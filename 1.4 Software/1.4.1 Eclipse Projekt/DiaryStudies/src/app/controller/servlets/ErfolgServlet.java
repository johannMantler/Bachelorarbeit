package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.ErfolgDTO;
import app.model.dbs.BenutzerDAO;

/**
 * Servlet implementation class ErfolgServlet
 */
@WebServlet("/erfolg")
public class ErfolgServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Benutzerkonto dao = new BenutzerDAO();  

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String beschreibung = request.getParameter("beschreibung_E");
		if(beschreibung == null) {
			return;
		}
		if(beschreibung.equals("")) {
			return;
		}
		
	    String name = Session.getBenutzername(request);
	    if(name == null) {
	    	return; //das sollte nicht passieren! Eine Session muss zu diesem Zeitpunkt schon existieren.
	    }
		
		ErfolgDTO dto = new ErfolgDTO(name);
		dto.setBeschreibung(beschreibung);
		dto.setKontrollierbar(request.getParameter("kontrollierbar_E"));
		dto.setOrt(request.getParameter("ort_E"));
		dto.setUrsache(request.getParameter("ursache_E"));
		dto.setUrsacheAndereErfolge(request.getParameter("ursacheAndereErfolge"));
		dto.setUrsacheOrt(request.getParameter("ursacheOrt_E"));
		dto.setUrsacheZukunft(request.getParameter("ursacheZukunft_E"));
		dto.setWichtig(request.getParameter("wichtig_E"));
		
		dao.connect();
		dao.addErfolg(dto);
		dao.disconnect();
		
	}
	
	
}
