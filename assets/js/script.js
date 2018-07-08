$( document ).ready(function() {
	var top = 650;
	$('.progress .progress-bar').css("width","0%");

	$(window).scroll(function(){
		if($(window).scrollTop() > top){
			$('.progress .progress-bar').css("width",function() {
				return $(this).attr("aria-valuenow") + "%";
			})
		}
	});

});
