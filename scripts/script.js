( function($) {

	var app =  {

		init: function(){
			this.browserDetector();
			this.magnificPopUpFunction();
		},

		browserDetector: function(){
			var browserName = bowser.name; 
			var browserNameLowerCase = browserName.toLowerCase();
			var browserNameTrim = browserNameLowerCase.replace(/\s+/g, '');
			$('html').addClass(browserNameTrim);
		},

		magnificPopUpFunction: function(){
			$('.popup-link').magnificPopup({
			  type: 'image',
			  removalDelay: 300,
			  mainClass: 'mfp-fade'
			});

		}

	} 

	$(document).ready( function() {
		app.init();

		// Map
		resizeMap();
		jQuery(window).resize(resizeMap);

		function resizeMap() {
			var map = jQuery("#map");
		  var mapWidth = map.width();
		  var winWidth = jQuery(window).width();
		  
		  map.css({
		    transform:'scale('+(winWidth/mapWidth)+')',
		    transformOrigin:'0 0'
		  });
		}

		/*or*/
		mapresponsiveness();
		  jQuery(window).resize(mapresponsiveness);

		function mapresponsiveness(){
		     var map = jQuery("#map");
		     var mapOrigWidth = 1330;
		     var mapOrigHeight = 2280;
		     var container = jQuery(".timeline-container");
		     var containerWidth = container.width();
		     var scale = containerWidth/mapOrigWidth;
		     scale = scale > 1 ? 1 : scale;

		     map.css({
		       transform:'scale('+scale+')',
		       transformOrigin:'0 0'
		     });

		     container.css({
		       height: (mapOrigHeight * scale)
		     })
		 }

	});

	$(window).load(function () { 
		$('body').removeClass('overflow-body');
		setTimeout(function(){
			$('.preloader').fadeOut( "slow", function() {
				
			  });
		},2000);
	});

	$(window).resize(function () { 

	});
	
})(jQuery);


