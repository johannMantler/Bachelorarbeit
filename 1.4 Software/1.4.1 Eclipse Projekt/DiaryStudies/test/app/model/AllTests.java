package app.model;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;
import org.junit.runners.Suite.SuiteClasses;

import app.model.dbs.BenutzerDAOTestModul_Test;
import app.model.dbs.Benutzerkonto_Test;
import app.model.dbs.Erfolg_Test;
import app.model.dbs.Fragebogen_Test;
import app.model.dbs.Problem_Test;

/**
 * @author Johann Mantler
 *
 */
@RunWith(Suite.class)
@SuiteClasses({ BenutzerDAOTestModul_Test.class, Benutzerkonto_Test.class,
		Erfolg_Test.class, Fragebogen_Test.class, Problem_Test.class, Hash_Test.class })

public class AllTests {

}
