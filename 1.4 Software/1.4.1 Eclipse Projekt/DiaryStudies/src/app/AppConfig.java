package app;


import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

import app.model.dbs.DBConfig;

/**
 * Application Lifecycle Listener implementation class AppConfig
 *
 */
@WebListener
public class AppConfig implements ServletContextListener {

	private DBConfig db = new DBConfig();
	
	/**
     * @see ServletContextListener#contextDestroyed(ServletContextEvent)
     */
    public void contextDestroyed(ServletContextEvent sce) {
		System.err.println("\n Methode contextDestroyed wurde aufgerufen!");
		db.shutdown();
    }

	/**
     * @see ServletContextListener#contextInitialized(ServletContextEvent)
     */
    public void contextInitialized(ServletContextEvent sce) {
		System.err.println("\n Methode contextInitialized wurde aufgerufen!");

		db.start();
    }
	
}
