package app.controller.servlets;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import app.model.Export;
import app.model.dbs.CSVExport;
import app.model.dbs.DBConfig;

/**
 * Servlet implementation class CSVExportServlet
 */
@WebServlet("/csvexport")
public class CSVExportServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private Export export = new CSVExport();
	private final Object lock = new Object();

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession(false);
		if(null == session) {
			return;
		}
		if(! DBConfig.isAdmin((String)session.getAttribute(Session.USERNAME)) ) {
			return;
		}
		OutputStream out = response.getOutputStream();
		File file = null;
		synchronized(lock) {
			FileInputStream in = null;
			try {
				file = export.export();
				response.setContentType("application/force-download");
		        response.setContentLength((int) file.length());
		        response.setHeader("Content-Transfer-Encoding", "binary");
				response.setHeader("Content-Disposition", "attachment; filename=\"" + file.getName() + "\""); 
				
				in = new FileInputStream(file);
				byte[] buffer = new byte[4096];
				int length = 0;
				while ((length = in.read(buffer)) > -1) {
				    out.write(buffer, 0, length);
				}
				out.flush();
				in.close();
			} catch(IOException | NullPointerException e) {
				Session.setError(response, "Export ist Fehlgeschlagen");
				return;
			}
			finally {
				if(file != null) {
					file.delete();
				}
			}
		}
	}
}
