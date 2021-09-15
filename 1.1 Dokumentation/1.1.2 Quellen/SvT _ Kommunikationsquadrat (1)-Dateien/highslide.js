/**
*	Site-specific configuration settings for Highslide JS
*/
hs.graphicsDir = './files/js/highslide/graphics/';

hs.showCredits = false;
hs.outlineType = 'custom';
hs.fadeInOut = true;
hs.align = 'center';
hs.captionEval = 'this.a.title';
hs.captionOverlay.position = 'below';
hs.allowMultipleInstances = false;

// always use this with flash, else the movie will be stopped on close:
hs.preserveContent = false;
hs.outlineWhileAnimating = true;

/**hs.registerOverlay({

	html: '<div class="closebutton" onclick="return hs.close(this)" title="Schließen"></div>',

	position: 'top right',

	useOnHtml: true,

	fade: 2 // fading the semi-transparent overlay looks bad in IE

}); */



// Add the slideshow controller

hs.addSlideshow({
	slideshowGroup: ['group1', 'group2', 'group3', 'group4'],
	interval: 5000,
	repeat: true,
	useControls: true,
	fixedControls: 'fit',
	overlayOptions: {
		className: 'controls-in-heading',
		opacity: '0.75',
		position: 'bottom right',
		offsetX: '-4',
		offsetY: '54',
		hideOnMouseOut: false
	}

});


// German language strings
hs.lang = {
	cssDirection: 'ltr',
	loadingText: 'Lade...',
	loadingTitle: 'Klick zum Abbrechen',
	focusTitle: 'Klick um nach vorn zu bringen',
	fullExpandTitle: 'Zur Originalgröße erweitern',
	creditsText: 'Powered by <i>Highslide JS</i>',
	creditsTitle: 'Gehe zur Highslide JS Homepage',
	previousText: 'Vorheriges',
	nextText: 'Nächstes',
	moveText: 'Verschieben',
	closeText: 'Schließen',
	closeTitle: 'Schließen (Esc)',
	resizeTitle: 'Größe wiederherstellen',
	playText: 'Abspielen',
	playTitle: 'Slideshow abspielen (Leertaste)',
	pauseText: 'Pause',
	pauseTitle: 'Slideshow anhalten (Leertaste)',
	previousTitle: 'Voriges (Pfeiltaste links)',
	nextTitle: 'Nächstes (Pfeiltaste rechts)',
	moveTitle: 'Verschieben',
	fullExpandText: 'Vollbild',
	number: '%1 / %2',
	restoreTitle: 'Klicken um das Bild zu schließen, klick und ziehen um es zu verschieben. Pfeiltasten benutzen für vor und zurück.'
};
