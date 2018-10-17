$( document ).ready(function() {

	// Timeout Loader
	setTimeout(function() {
        $('body').addClass('loaded');
    }, 1600);

	// Add scrollspy to <body>
	$('body').scrollspy({ target: ".navbar", offset: 260 });

	// Add smooth scrolling on all links inside the navbar
	$(".navbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function() {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

	// Progress Bar Animation
	$("[href='#skills']").click(function() {
		$('.progress .progress-bar').css("width","0%");
		setTimeout(
			function() {
				$('.progress .progress-bar').css("width",function() {
					return $(this).attr("aria-valuenow") + "%";
				});
			}, 
		200);
			
	});

	// Apparition Contacts
	$("#contactButton").click(function() {
		if ($('.footer').css('height') == '240px'){
			$(".footer").animate({height: '32px' });
		}
		else {
			$(".footer").animate({height: '240px' });
		}	
	});
	// Cacher contacts lors d'un clic ailleurs
	$(document).click(function(event) { 
		if(!$(event.target).closest('.footer').length) {
			if ($('.footer').css('height') == '240px'){
				$(".footer").animate({height: '32px' });
			}
		} 
	});

	// Cacher menu responsive lors d'un clic ailleurs
	$(document).click(function(event) { 
		$(".navbar-collapse").collapse('hide'); 
	});
	

});
