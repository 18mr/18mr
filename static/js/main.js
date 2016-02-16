jQuery("document").ready(function($){
    
    var pos = $('.mobile').offset().top;
	var nav = $('.mobile');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > pos) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });
	
	$('#open-menu').click(function() {
		$('#mobilemenu').toggleClass("visuallyhidden");
	});
 
});