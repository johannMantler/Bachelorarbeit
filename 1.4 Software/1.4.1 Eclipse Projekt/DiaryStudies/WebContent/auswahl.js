///////////////////////////////
//------- js for #pageAuswahl :
///////////////////////////////

/**
 * Jedesmal wenn #pageAuswahl aufgerufen wird,
 * wird diese Funktion aufgerufen.
 */
$(document).on("pagebeforeshow","#pageAuswahl", function(){

	//Hole Erfolgs-und Problemanzahl vom Server und
	//setze die Fortschrittsbalken
	$.post('auswahl', function(response) { 
		var obj = $.parseJSON( response );
		$( "#progressbarErfolg" ).progressbar({
			value: obj.erfolge,
			max: obj.max
		});
		$( "#progressbarProblem" ).progressbar({
			value: obj.probleme,
			max: obj.max
		});
		$("#erfolgText").text(obj.erfolge +" von "+ obj.max);
		$("#problemText").text(obj.probleme +" von "+ obj.max);
	});	
});

$(document).on("pageinit","#pageAuswahl", function(){
	$('#logoutBtn').click(function(){
		$.ajax({
			type: "GET",
			url: "logout",
			async: false,
			success: function(msg)
			{
				window.location.href = msg;
			}
		});
	});
});


///////////////////////////////
//------- js for #pageErfolg :
///////////////////////////////

function initErfolg(){
	
	createRadioForm("ursacheOrt_E", "1. Wo liegt die Ursache für den Erfolg?",
			"(1 = bei mir; 7 = im System (Hardware, Software))",
			['1','2','3','4','5','6','7'], "horizontal");
			
			createRadioForm("ursacheZukunft_E", "2. Kann die Ursache in diesem Zusammenhang erneut für Erfolge sorgen?",
			"(1 = einmalig; 7 = wiederkehrend)",
			['1','2','3','4','5','6','7'], "horizontal");
			
			createRadioForm("kontrollierbar_E", "3. Empfinden Sie die Ursache für den Erfolg als kontrollierbar?",
			"(1 = kontrollierbar; 7 = unkontrollierbar)",
			['1','2','3','4','5','6','7'], "horizontal");
			
			createRadioForm("ursacheAndereErfolge", "4. Wird die Ursache auch in anderen Bereichen für Erfolge sorgen?",
			"(1 = Nur in diesem speziellen Fall; 7 = Auch in anderen Bereichen)",
			['1','2','3','4','5','6','7'], "horizontal");
			
			createRadioForm("wichtig_E", "Für wie wichtig halten Sie den Erfolg?",
			"(1 = unwichtig; 7 = wichtig)",
			['1','2','3','4','5','6','7'], "horizontal");

	
	$( "#beschreibung_E" ).change(function() {
		checkInput("#beschreibung_E");
	});
	$( "#beschreibung_E" ).change(function() {
		checkInput("#beschreibung_E", "#errorMessage_E");
	});
	toggleHeader("#pageErfolgHeader","#pageErfolg");
	
	
	$( "#erfolgForm" ).submit(function(event) {
		 //default submit-Verhalten ausschalten
        event.preventDefault();
        
        //Nutzereingaben pruefen
        var correct = checkInput("#beschreibung_E", "#errorMessage_E");	
		
		//Daten asynchron senden
		if(correct) {
			$.ajax({
				type: "POST",
				url: "erfolg",
				async: false,
				data: getErfolgData(),
				error: function(xmlHttpRequest, textStatus, errorThrown) {
					    $("#errorMessage_E").text(xmlHttpRequest.responseText).show();
				    correct = false;
				  	}
				});
		}
		
		if(correct) {
			$.mobile.changePage('#pageAuswahl', {  changeHash : true });
		}
		else {
			$.mobile.activePage.focus();//Fokus vom Button entfernen
			window.scrollTo(0, 0); //scroll to top
		}

		return correct;
	});
	
		function getErfolgData(){
			var result = "beschreibung_E="+$("#beschreibung_E").val()+"&"
					+"ursache_E="+$("#ursache_E").val()+"&"
					+"ursacheOrt_E="+$("#ursacheOrt_E input[name='ursacheOrt_E']:checked").val()+"&"
					+"ursacheZukunft_E="+$("#ursacheZukunft_E input[name='ursacheZukunft_E']:checked").val()+"&"
					+"kontrollierbar_E="+$("#kontrollierbar_E input[name='kontrollierbar_E']:checked").val()+"&"
					+"ursacheAndereErfolge="+$("#ursacheAndereErfolge input[name='ursacheAndereErfolge']:checked").val()+"&"
					+"wichtig_E="+$("#wichtig_E input[name='wichtig_E']:checked").val()+"&";
			

				result += "ort_E="+$("#ort_E input[name='ort']:checked").val();
			return result;
		}
	
}




///////////////////////////////
//------- js for #pageProblem :
///////////////////////////////


function initProblem() {
	
	createRadioForm("ursacheOrt_P", "1. Wo liegt die Ursache für das Problem?",
	"(1 = bei mir; 7 = im System (Hardware, Software))",
	['1','2','3','4','5','6','7'], "horizontal");
			
	createRadioForm("ursacheZukunft_P", "2. Wird die Ursache in diesem Zusammenhang erneut für Probleme sorgen?",
	"(1 = einmalig; 7 = wiederkehrend)",
	['1','2','3','4','5','6','7'], "horizontal");
			
	createRadioForm("kontrollierbar_P", "3. Empfinden Sie die Ursache des Problems als kontrollierbar?",
	"(1 = kontrollierbar; 7 = unkontrollierbar)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("ursacheAndereProbleme", "4. Wird die Ursache auch in anderen Bereichen für Probleme sorgen?",
	"(1 = Nur in diesem speziellen Fall; 7 = Auch in anderen Bereichen)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("wichtig_P", "Für wie schwerwiegend halten Sie das Problem?",
	"(1 = unwichtig; 7 = schwerwiegend)",
	['1','2','3','4','5','6','7'], "horizontal");

	
		$( "#beschreibung_P" ).change(function() {
			checkInput("#beschreibung_P", "#errorMessage_P");
		});
		
		toggleHeader("#pageProblemHeader","#pageProblem");
		
		
		$( "#probForm" ).submit(function(event) {
			 //default submit-Verhalten ausschalten
         event.preventDefault();
         
         //Nutzereingaben pruefen
         var correct = checkInput("#beschreibung_P", "#errorMessage_P");	
			
			//Daten asynchron senden
			if(correct) {
				$.ajax({
					type: "POST",
					url: "problem",
					async: false,
					data: getProblemData(),
					error: function(xmlHttpRequest, textStatus, errorThrown) {
					    $("#errorMessage_P").text(xmlHttpRequest.responseText).show();
					    correct = false;
					  	}
					});
			}
			
			if(correct) {
				$.mobile.changePage('#pageAuswahl', {  changeHash : true });
			}
			else {
				$.mobile.activePage.focus();//Fokus vom Button entfernen
				window.scrollTo(0, 0); //scroll to top
			}

			return correct;
		});
		
		function getProblemData(){
			var result = "beschreibung_P="+$("#beschreibung_P").val()+"&"
					+"ursache_P="+$("#ursache_P").val()+"&"
					+"ursacheOrt_P="+$("#ursacheOrt_P input[name='ursacheOrt_P']:checked").val()+"&"
					+"ursacheZukunft_P="+$("#ursacheZukunft_P input[name='ursacheZukunft_P']:checked").val()+"&"
					+"kontrollierbar_P="+$("#kontrollierbar_P input[name='kontrollierbar_P']:checked").val()+"&"
					+"ursacheAndereProbleme="+$("#ursacheAndereProbleme input[name='ursacheAndereProbleme']:checked").val()+"&"
					+"wichtig_P="+$("#wichtig_P input[name='wichtig_P']:checked").val();

				result += "&ort_P="+$("#ort_P input[name='ort']:checked").val();
			return result;
		}
		
	};
	

///////////////////////////////
//------- js for #beispiel :
///////////////////////////////

function initBeispiel() {

	createRadioForm("radio_2", "1. Wo liegt die Ursache für das Problem?",
	"(1 = bei mir; 7 = im System (Hardware, Software))",
	['1','2','3','4','5','6','7'], "horizontal");
			
	createRadioForm("radio_3", "2. Wird die Ursache in einer ähnlichen Situation erneut für Probleme sorgen?",
	"(1 = einmalig; 7 = wiederkehrend)",
	['1','2','3','4','5','6','7'], "horizontal");
			
	createRadioForm("radio_4", "3. Empfinden Sie die Ursache des Problems als kontrollierbar?",
	"(1 = kontrollierbar; 7 = unkontrollierbar)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("radio_5", "4. Wird die Ursache auch in anderen Bereichen für Probleme sorgen?",
	"(1 = Nur in diesem speziellen Fall; 7 = Auch in anderen Bereichen)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	createRadioForm("radio_1", "Für wie schwerwiegend halten Sie das aufgetretene Problem?",
	"(1 = unwichtig; 7 = schwerwiegend)",
	['1','2','3','4','5','6','7'], "horizontal");
	
	//Formelemente vormarkieren
	$('#radio_1_5').prop('checked', true);
	$('#radio_2_6').prop('checked', true);
	$('#radio_3_6').prop('checked', true);
	$('#radio_4_6').prop('checked', true);
	$('#radio_5_2').prop('checked', true);

	//Formelemente nicht klickbar machen
	$('#beispiel input[type="radio"]').each(function() {
		$(this).prop('disabled', true);                   
    });
	$('#beispiel textarea').each(function() {
		$(this).prop('disabled', true);                   
    });

}


////////////////////////////////////////////
//------- js for #kontakt :
////////////////////////////////////////////	

function initKontakt() {
	toggleHeader("#kontaktHeader","#kontakt");
	
	$('#nachrichtSenden').click(function(){
		
		if($("#nachrichtAnUns").val().length == 0) { //leere Nachrichten verbieten
			return;
		}
		else {
			$( "#popupNachrichtGesendet" ).popup( "open" );
			var msg = $("#nachrichtAnUns").val();
			$("#nachrichtAnUns").val("");
		}
		
		$.ajax({
			type: "POST",
			url: "kontakt",
			data: "nachrichtAnUns="+msg,
			async: true,
			success: function(msg)
			{
				//alert("Nachricht gesendet");
				
			}
		});
	});
}


////////////////////////////////////////////
//------- js for all Pages is auswahl.html :
////////////////////////////////////////////


/**
Prueft, ob eine Eingabe bei der ersten Frage erfolgt ist und
gibt ggf. eine Fehlermeldung aus.
@return false, wenn Feld nicht ausgefuellt, sonst true.  "[class!='markErrorLocation']"
*/
function checkInput(textfield, msgID) {
	
	if($(textfield).val().length == 0) {
		$(msgID).text("Bitte füllen Sie die erste Frage aus.").show();
		$(textfield).addClass("markErrorLocation");
		return false;
	}
	else {
		$(msgID).hide();
		$(textfield).removeClass("markErrorLocation");
		return true;
	}
}