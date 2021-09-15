///////////////////////////////
//------- js for #seite1 :
///////////////////////////////
		
$(document).on("pagebeforeshow","#seite1", function() {
			
	$('#menu_1_1').addClass('ui-btn-active');
});

$(document).on("pagebeforecreate","#seite1", function() {
	
	createMenu("menu_1",1,5);
	
	createNumSelectForm("gebJahr", "Bitte geben Sie Ihr Geburtsjahr an:",
	"", "Geburtsjahr auswählen...", 1930, 2010 );

	createRadioForm("geschlecht", "Bitte geben Sie Ihr Geschlecht an",
	"",
	['weiblich','männlich'], "vertical");


	initLocalStorage('#seite1');   
	
});

$(document).on("pageinit","#seite1", function()
{
	storePageData("#menu_1", "#seite1",5);
});

///////////////////////////////
//------- js for #seite2 :
///////////////////////////////

$(document).on("pagebeforeshow","#seite2", function(){
	
	$('#menu_2_2').addClass('ui-btn-active');
});

$(document).on("pagebeforecreate","#seite2", function(){
		
	createMenu("menu_2",2,5);
	
	createSelectForm("bildungsabschluss", "Welchen Bildungsabschluss haben Sie?",
	"(Bitte wählen Sie den höchsten Bildungsabschluss, den Sie bisher erreicht haben.)",
	["Abschluss auswählen...",'Schüler(in)','Hauptschulabschluss (oder vergleichbar)','Mittlere Reife (oder vergleichbar)','abgeschlossene Lehre', '(Fach-)Abitur, (Fach-)Hochschulreife', '(Fach-)Hochschulabschluss', 'kein Abschluss', 'sonstigen' ]);
	
	initLocalStorage('#seite2');
	
});

$(document).on("pageinit","#seite2", function() {
	storePageData("#menu_2", "#seite2",5);
});


///////////////////////////////
//------- js for #seite3 :
///////////////////////////////

$(document).on("pagebeforeshow","#seite3", function(){
	
	$('#menu_3_3').addClass('ui-btn-active');
});

$(document).on("pagebeforecreate","#seite3", function(){
		
	createMenu("menu_3",3,5);
	
	createSelectForm("compPrivat", "Seit wie vielen Jahren nutzen Sie einen Computer PRIVAT?",
	"",
	["Jahre auswählen...",'weniger als 1 Jahr','1','2','3','4','5','6', '7','8', '9','10','11','12','13', '14','15','16','17','18','19','20', 'mehr als 20 Jahren' ]);
	
	createSelectForm("compBeruflich", "Seit wie vielen Jahren nutzen Sie einen Computer BERUFLICH / SCHULISCH?",
	"",
	["Jahre auswählen...",'weniger als 1 Jahr','1','2','3','4','5','6', '7','8', '9','10','11','12','13', '14','15','16','17','18','19','20', 'mehr als 20 Jahren' ]);
	
	createSelectForm("compStdPrivat", "Wie viele Stunden nutzen Sie einen Computer momentan im Durchschnitt am Tag PRIVAT?",
	"",
	["Stunden auswählen...", 'weniger als 1 Stunde','1','2','3','4','5','6', '7','8', '9','10','11','12','13', '14','15','16','17','18','19','20', 'mehr als 20 Stunden' ]);
	
	createSelectForm("compStdBeruflich", "Wie viele Stunden nutzen Sie einen Computer momentan im Durchschnitt am Tag BERUFLICH / SCHULISCH?",
	"", 
	["Stunden auswählen...",'weniger als 1 Stunde','1','2','3','4','5','6', '7','8', '9','10','11','12','13', '14','15','16','17','18','19','20', 'mehr als 20 Stunden' ]);

	initLocalStorage('#seite3');
});

$(document).on("pageinit","#seite3", function(){
	storePageData("#menu_3", "#seite3",5);
});

///////////////////////////////
//------- js for #seite4 :
///////////////////////////////

$(document).on("pagebeforeshow","#seite4", function(){
	
	$('#menu_4_4').addClass('ui-btn-active');
});

$(document).on("pagebeforecreate","#seite4", function(){
						
	createMenu("menu_4",4,5);
	
	createRadioForm("regRadio_1", "Wie würden Sie Ihren ALLGEMEINEN Kenntnisstand beim Umgang mit Computern einschätzen?",
	"(1 = gering; 7 = fortgeschritten)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("regRadio_2", "Wie würden Sie Ihren Kenntnisstand beim Umgang mit BETRIEBSSYSTEMEN von Computern einschätzen?<span class=\"mylabelSmall\">(z. B. Installation von Programmen, Systemeinstellungen vornehmen, usw.)</span>",
	"(1 = gering; 7 = fortgeschritten)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("regRadio_3", "Wie würden Sie Ihren Kenntnisstand beim Umgang mit dem INTERNET einschätzen?<span class=\"mylabelSmall\">(z. B. Surfen, E-Mail, usw.)</span>",
	"(1 = gering; 7 = fortgeschritten)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("regRadio_4", "Wie würden Sie Ihren Kenntnisstand beim Umgang mit PROGRAMMEN einschätzen?<span class=\"mylabelSmall\">(z. B. Office-Tools, Bildbearbeitungsprogramme, usw.)</span>",
	"(1 = gering; 7 = fortgeschritten)",
	['1','2','3','4','5','6','7'], "horizontal");

	initLocalStorage('#seite4');
});

$(document).on("pageinit","#seite4", function(){
	storePageData("#menu_4", "#seite4",5);
	
});

///////////////////////////////
//------- js for #seite5 :
///////////////////////////////

$(document).on("pagebeforeshow","#seite5", function(){
	
	$('#menu_5_5').addClass('ui-btn-active');
});

$(document).on("pagebeforecreate","#seite5", function(){

	createMenu("menu_5",5,5);
});

$( document ).on( "pageinit","#seite5", function() {
	
	$('#datenschutzAkzeptiertLink').on("click", function( event ) {
	    $.mobile.changePage($(this).attr('href'));
	});
	
	$('#verlosungsTeilnahmeLink').on("click", function( event ) {
	    $.mobile.changePage($(this).attr('href'));
	});
	
	$( "#regForm" ).submit(function(event) {

		//default submit-Verhalten ausschalten
        event.preventDefault();
        
        //Nutzereingaben pruefen
    	var error = checkInput();
		$( "#username" ).change(function() {
			error = checkInput();
		});
		$( "#password" ).change(function() {
			error = checkInput();
		});
		$( "#password_2" ).change(function() {
			error = checkInput();
		});
		
        if(!error) {
    		if(! $('#datenschutzAkzeptiert').is(':checked') ) {
    			$("#errorMessage").text("Bitte lesen und akzeptieren Sie die Datenschutzbestimmungen").show();
    			error = true;
    		}
            else if($('#verlosungsTeilnahme').is(':checked') && $("#email").val().length == 0) {
    			$("#email[class!='markErrorLocation']").addClass("markErrorLocation");
    			$("#errorMessage").text("Wenn Sie an der Verlosung teilnehmen möchten, geben Sie bitte Ihre E-Mail an.").show();
    			error = true;
    		}
        }
        
		
		//Daten synchron senden und Antwort abwarten
		if(!error) {
			$.ajax({
				type: "POST",
				url: "signup",
				async: false,
				data: getSignUpData(),
				error: function(xmlHttpRequest, textStatus, errorThrown) {
					    $("#errorMessage").text(xmlHttpRequest.responseText).show();
				    error = true;
				  }
				});
		}
		//Wenn erfolgreiche: localStorage loeschen und user weiterleiten
		if(!error) {
			localStorage.clear();
			$.mobile.changePage('#fragebogen', {  changeHash : true });
		}
		else {
			$.mobile.activePage.focus();//Fokus vom Button entfernen
		}

		return !error;
	});
	
	toggleHeader("#seite5Header","#seite5");
});

/**
Prueft, ob Benutzername und Passwoerter eingegeben worden sind und gibt evt. 
eine Fehlermeldung aus. Zudem werden die Passwoerter auf Uebereinstimmung getestet.
@returns false, wenn Anmeldedaten vollstaendig, sonst true
*/
function checkInput() {
	var error = false;
	var nameLen = $("#username").val().length;
	var passLen = $("#password").val().length;
	var pass2Len = $("#password_2").val().length;
	
	if ( nameLen == 0 || passLen == 0 || pass2Len == 0 ) {
		$("#errorMessage").text("Bitte füllen Sie alle Felder aus.").show();
		if(nameLen == 0) {
			$("#username[class!='markErrorLocation']").addClass("markErrorLocation");
		}	
		if(passLen == 0) {
			$("#password[class!='markErrorLocation']").addClass("markErrorLocation");	
		}
		if(pass2Len == 0) {
			$("#password_2[class!='markErrorLocation']").addClass("markErrorLocation");	
		}
		error = true;
	}
	else if(passLen < 8) {
		$("#errorMessage").text("Bitte wählen Sie ein Passwort mit mindestens 8 Zeichen.").show();
		$("#password[class!='markErrorLocation']").addClass("markErrorLocation");
		$("#password_2[class!='markErrorLocation']").addClass("markErrorLocation");
		return true;
	}
	else { //alles ist ausgefuellt..
		
		if($("#password").val() != $("#password_2").val()) {
			$("#errorMessage").text("Passwörter stimmen nicht überein.").show();
			error = true;
		}
		else {
			$("#errorMessage").hide();
			//error = false; error is false
		}
	}
	
	if(nameLen > 0) {
		$("#username[class='markErrorLocation']").removeClass("markErrorLocation");
	}	
	if(passLen > 0) {
		$("#password[class='markErrorLocation']").removeClass("markErrorLocation");	
	}
	if(pass2Len > 0) {
		$("#password_2[class='markErrorLocation']").removeClass("markErrorLocation");	
	}
	
	return error;
}
/**
 * Bereitet den HTTP-Post-Body vor. Alle Daten die gesendet werden sollen,
 * werden aus dem localStorage geholt und zu einer Antwort zusammengebaut. 
 * @returns {String}
 */
function getSignUpData() {
 return "geschlecht="+localStorage['geschlecht']+"&gebJahr="+localStorage['gebJahr']
	+"&bildungsabschluss="+localStorage['bildungsabschluss']+"&derzeitBeruflich="+localStorage['derzeitBeruflich']
	+"&compPrivat="+localStorage['compPrivatSelect']+"&compBeruflich="+localStorage['compBeruflichSelect']
	+"&compStdPrivat="+localStorage['compStdPrivatSelect']+"&compStdBeruflich="+localStorage['compStdBeruflichSelect']
	+"&regRadio_1="+localStorage['regRadio_1']+"&regRadio_2="+localStorage['regRadio_2']
	+"&regRadio_3="+localStorage['regRadio_3']+"&regRadio_4="+localStorage['regRadio_4']
	+"&regRadio_5="+localStorage['regRadio_5']+"&os_windows="+localStorage['os_windows']
	+"&os_mac="+localStorage['os_mac']+"&os_linux="+localStorage['os_linux']+"&os_andere="+localStorage['os_andere']
	+"&username="+$('#username').val()+"&password="+$('#password').val()+"&anmeldeDatenMerken="+$('#anmeldeDatenMerken:checked').val()
	+"&email="+$('#email').val();
}


///////////////////////////////
//------- js for all pages :
///////////////////////////////