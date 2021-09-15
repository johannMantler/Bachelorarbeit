package app.controller.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import app.model.Benutzerkonto;
import app.model.ProblemDTO;
import app.model.dbs.BenutzerDAO;

/**
 * Servlet implementation class ProblemServlet
 */
@WebServlet("/problem")
public class ProblemServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    private Benutzerkonto dao = new BenutzerDAO();   

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
		String beschreibung = request.getParameter("beschreibung_P");
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
		
		ProblemDTO dto = new ProblemDTO(name);
		dto.setBeschreibung(beschreibung);
		dto.setKontrollierbar(request.getParameter("kontrollierbar_P"));
		dto.setOrt(request.getParameter("ort_P"));
		dto.setUrsache(request.getParameter("ursache_P"));
		dto.setUrsacheAndereProbleme(request.getParameter("ursacheAndereProbleme"));
		dto.setUrsacheOrt(request.getParameter("ursacheOrt_P"));
		dto.setUrsacheZukunft(request.getParameter("ursacheZukunft_P"));
		dto.setWichtig(request.getParameter("wichtig_P"));
		
		dao.connect();
		dao.addProblem(dto);
		dao.disconnect();
	}
}
