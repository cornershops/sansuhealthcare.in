/* ---------------------
	CUSTOM JS DOCUMENT 
--------------------- */
var appMaster = {
	
	/* ---------------------	
		Animation
	/* --------------------- */	
	dataAnimations: function() {
	  $('[data-animation]').each(function() {
			var element = $(this);
			element.addClass('animated');
			element.appear(function() {
				
				var delay = ( element.data('delay') ? element.data('delay') : 1 );
				if( delay > 1 ) element.css('animation-delay', delay + 'ms');				
				element.addClass( element.data('animation') );
				setTimeout(function() {
					element.addClass('visible');
				}, delay);
				
			});
	  });
	},
	
	
}; 

$(document).ready(function() {

	appMaster.dataAnimations();
	
	
});	
