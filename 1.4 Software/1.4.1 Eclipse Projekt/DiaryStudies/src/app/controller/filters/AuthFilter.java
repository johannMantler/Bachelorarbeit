package app.controller.filters;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Implementiert einen Autorisierungsmechanismus auf Basis der
 * Filter in javax.servlet.
 * Abstrakte Klasse, zum vordefinierten von Eigenschaften für spezielle Filter
 * Klassen, welche nach bestimmten URLs filtern.
 * @author Johann Mantler
 *
 */
public abstract class AuthFilter implements Filter{

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	@Override
	public final void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletResponse resp = (HttpServletResponse)response;
		HttpServletRequest req = (HttpServletRequest)request;
	    if(!isAuth(req)) {
	    	doAuthFail(resp);
	        return; //break filter chain, requested servlet will not be executed
	    }
		// pass the request along the filter chain
		chain.doFilter(request, response);
	}

	/**
	 * Prüft, ob der Benutzer vonem die Request ausgeht, berechtigt ist,
	 * die angeforderte Ressource zu bekommen.
	 * @param req
	 * @return true, falls berechtigt, sonst false
	 */
	public abstract boolean isAuth(HttpServletRequest req);
	
	/**
	 * Was soll passieren, wenn die Authentifikation fehlschlägt?
	 * Hier wird auf die Seite start.html#start weitergeleitet. Methode
	 * ist überschreibbar!
	 * @param req
	 * @throws IOException 
	 */
	public void doAuthFail(HttpServletResponse req) throws IOException {
		req.sendRedirect("start.html#start");
	}
	
	@Override
	public void destroy() {
		// leer
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// leer
	}
}
