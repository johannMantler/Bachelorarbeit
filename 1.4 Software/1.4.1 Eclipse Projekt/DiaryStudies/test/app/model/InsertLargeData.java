package app.model;


import app.model.dbs.BenutzerDAO;

/**
 * Fuegt aus Testgründen haufenweise Benutzer in die DB.
 * @author Johann Mantler
 *
 */
public final class InsertLargeData {
	private static int anzahlErfolge = 20;
	private static int anzahlProbleme = 20;
	private static int anzahlBenutzer = 10000;
	private static String name = "name5name5name";
	
	
	/**
	 * main.
	 * @param args
	 */
	public static void main(String[] args) {
		Benutzerkonto dao = new BenutzerDAO(true);
		for(int i = 0; i < anzahlBenutzer; i++) {
			
			BenutzerDTO dto = new BenutzerDTO(name+"_"+i);
			String pw = Hash.hashPass("pw", dto);
			dto.setPw(pw);
			dao.signup(dto);
			for(int e = 0; e < anzahlErfolge; e++) {
				dao.addErfolg(new ErfolgDTO(dto.getName()));
			}
			for(int p = 0; p < anzahlProbleme; p++) {
				dao.addProblem(new ProblemDTO(dto.getName()));
			}
			dao.setFragebogen(new FragebogenDTO(dto.getName()));
			
		}
		
	}

}
