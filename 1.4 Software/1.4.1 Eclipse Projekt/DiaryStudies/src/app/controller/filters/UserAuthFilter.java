package app.controller.filters;

import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import app.controller.servlets.Session;
import app.model.dbs.DBConfig;


/**
 * Servlet Filter implementation class UserAuthFilter
 */
@WebFilter({	"/auswahl.html",
				"/fragebogen.html" 
				})
public class UserAuthFilter extends AuthFilter {
	
	/**
	 * Prüft, ob eine Session zu der Request besteht und diese Session
	 * zu einem Benutzer gehört ( Kein Gast,  Kein Admin).
	 */
	@Override
	public boolean isAuth(HttpServletRequest req) {
		HttpSession session = req.getSession(false);
		if(null != session) {
			if( ! DBConfig.isAdmin((String)session.getAttribute(Session.USERNAME)) ) {
				return true;
			}
			else { //ist Admin
				session.invalidate();
			}
		}
		return false;
	}
}
