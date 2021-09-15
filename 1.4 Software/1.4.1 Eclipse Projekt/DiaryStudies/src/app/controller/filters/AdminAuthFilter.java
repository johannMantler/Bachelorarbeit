package app.controller.filters;

import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import app.controller.servlets.Session;
import app.model.dbs.DBConfig;

/**
 * Servlet Filter implementation class AdminAuthFilter
 */
@WebFilter({"/admin.html"})
public final class AdminAuthFilter extends AuthFilter {

	/**
	 * Pr�ft, ob eine Session zu der Request besteht und ob dieser
	 * User ein Administrator ist.
	 */
	@Override
	public boolean isAuth(HttpServletRequest req) {
		HttpSession session = req.getSession(false);
		if(null != session) {
			if( DBConfig.isAdmin((String)session.getAttribute(Session.USERNAME)) ) {
				return true;
			}
			else { //Benutzer versucht auf Admin-Seite zu gelangen
				session.invalidate();
			}
		}
		return false;
	}
}
