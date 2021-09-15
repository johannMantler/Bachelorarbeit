

function createMenu(id,activeNr,count) {
	
	var tmpStr = "";
	for(var i = 1; i<=count; i++) {

			tmpStr +="<a href='#seite"+i+"' id='"+id+"_"+i+"' data-role='button' data-theme='b'>"+i+"</a>";
		
	}
	$("#"+id).addClass("menuContainer").addClass("separatorRegistrierung").append(tmpStr);
}


/**
 * Erzeugt eine Auwahlliste (select menu).
 * @param id Die ID muss ein Unikat sein.
 * @param label Die Beschriftung.
 * @param subLabel Ergaenzender Text zur Beschriftung.
 * @param options Ein Array mit den zur Auswahl stehenden Eintraegen.
 */
function createSelectForm(id, label, subLabel, options ) {
	
	var tmpStr = "<option value='undefined' selected>" +options[0]+ "</option>";
	for(var i = 0; i < options.length-1; i++) {
		tmpStr +=
			"<option  value='" +i+ "'>" +options[i+1]+ "</option>";
	}
	
	$("#"+id).addClass("formContainer").append(
			"<label for='"+id+"Select' class='mylabel'>" +label+ "</label>" +
			"<span class='mylabelSmall'>" +subLabel+ "</span>" +
			"<select name='" +id+ "Select' id='" +id+ "Select'>" +
			 tmpStr + "</select>"); 
}

/**
 * Erzeugt eine Auwahlliste (select menu) mit Zahlen.
 * @param id Die ID muss ein Unikat sein.
 * @param label Die Beschriftung.
 * @param subLabel	Ergaenzender Text zur Beschriftung.
 * @param placeholder 
 * @param startNum Startnummer: Entspricht dem ersten Eintrag der Liste
 * @param quantity Endnummer: Entspricht dem letzten Eintrag der Liste
 */
function createNumSelectForm(id, label, subLabel, placeholder, startNum, quantity ) {
	
	var tmpStr = "";
	for( ; startNum <= quantity; startNum++) {
		tmpStr += "<option value='" +startNum+ "'>" +startNum+ "</option>";
	}
	
	$("#"+id).addClass("formContainer").append(
			"<label for='"+id+"' class='mylabel'>" +label+ "</label>"+
			"<span class='mylabelSmall'>" +subLabel+ "</span>"+
			"<select name='" +id+ "' id='" +id+ "'>"+
				"<option value='undefined' selected>" +placeholder+ "</option>" + tmpStr + "</select>");
}


/**
 * Erzeugt ein Auswahlfeld (radio buttons).
 * @param id Die ID muss ein Unikat sein.
 * @param label Die Beschriftung.
 * @param subLabel Ergaenzender Text zur Beschriftung.
 * @param options Ein Array mit den zur Auswahl stehenden Eintraegen.
 * @param dataType Ausrichtung der Elemente: vertical, horizontal
 */
function createRadioForm(id, label,subLabel, options, dataType) {
	
	var subLabelStr = (subLabel != "")?  "<br/><span class='mylabelSmall'>" +subLabel+ "</span>" : "";
	var tmpStr = "";
	for(var i = 0; i < options.length; i++) {
		tmpStr +=
				"<label  for='"+id+"_"+(i+1)+"'>"+options[i]+"</label>"+
				"<input data-theme='c' type=\"radio\" name='"+id+"' id='"+id+"_"+(i+1)+"' value='"+(i+1)+"'/>";
	}
	
	$("#"+id).addClass("formContainer").append(
			"<fieldset data-role='controlgroup' data-type='"+dataType+"'>" +
				"<legend class='mylabel'>" +label+ subLabelStr + "</legend>" + tmpStr + "</fieldset>");
	
}

/**
 * Laesst den Header verschwinden, sobald dieser mindestens
 * 3-mal in die Seite passt.
 * @param header das Element mit dem data-role="header" Attribut.
 */
function toggleHeader(headerID, pageID) {

	var isFixed = true;

	$(window).resize(function() {
		
		if( $(window).height() <= $(headerID).height() * 3 ) {
			
			if(isFixed) {
				$(headerID).attr("style", "margin-top: -"+$(headerID).height()+"px !important");
				$(pageID).attr("style", "margin-top: -"+$(headerID).height()+"px !important");
				isFixed = false;
			}
		}
		else {
			if(!isFixed) {
				$(headerID).css('margin-top' , '');
				$(pageID).css('margin-top' , '');
				isFixed = true;
			}
		}
	});
}


/**
Schaut im localStorage nach, ob es schon Eintraege fuer die Formularelemente
der Seite gibt und setzt diese ggf.
@param seitenID die ID der seite beginnend mit #
*/
function initLocalStorage(seitenID)
{	
	var attrName = "";
	$.each( $(seitenID+' input, '+seitenID+' textarea, '+seitenID+' select'), function() 
	{
		attrName = $(this).attr('name');
		if (localStorage[attrName]) 
		{
			if($(this).is('input[type="radio"][value="'+localStorage[attrName]+'"]'))
			{
				$(this).val([localStorage[attrName]]);
			}
			else if($(this).is('input[type="checkbox"][checked]'))
			{
				$(this).val(localStorage[attrName]);
			}
			else if( ! $(this).is('input[type="radio"]') && ! $(this).is('input[type="checkbox"]'))
			{
				$(this).val(localStorage[attrName]);
			}
		}	 
	}); 
}

/**
Nimmt den Wert eines Formularelementes und speichert es im localStorage.
@param seitenID die ID der seite beginnend mit #
*/
function storeInLocalStorage(seitenID)
{
	$.each( $(seitenID+' input, '+seitenID+' textarea, '+seitenID+' select'), function() 
	{	
		if($(this).is('input[type="radio"]') || $(this).is('input[type="checkbox"]'))
		{
			localStorage[$(this).attr('name')] = $('input[name="'+$(this).attr('name')+'"]:checked').val();
		}
		else 
		{
			localStorage[$(this).attr('name')] = $(this).val();
		} 
	}); 
}

function addStoreHandlerToMenu(menuID, seitenID, menuAnzBtn)
{
	for(var i = 1; i <= menuAnzBtn; i++)
	{
		$(menuID+"_"+i).click(function()
		{
			storeInLocalStorage(seitenID);
		}); 
	} 
}

/**
 * Fuegt einen Click-Eventhandler zum .storeData  markiertem button hinzu,
 * bei dem  alle Formelementeingaben im localStorage gespeichert werden.
 * Auch auf Klick eines Menu-Button werden die Daten gespeichert.
 * @param menuID die ID des Menus der Seite.
 * @param seitenID die ID der Seite.
 */
function storePageData(menuID, seitenID, menuAnzBtn)
{
	$(seitenID +" .storeData").click(function() {
		storeInLocalStorage(seitenID);
	});   
	addStoreHandlerToMenu(menuID, seitenID, menuAnzBtn);
}

