$( document ).ready(function() {

/*	var headerH = $('header').outerHeight() + $('header').offset().top;
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll > 100) {
			$("#mainNav").addClass("navbar-fixed-hidden");
		} else {
			$("#mainNav").removeClass("navbar-fixed-hidden");
		}
		if (scroll > headerH) {
			$("#mainNav").addClass("navbar-fixed-stick");
			$(".back-to-top").addClass("show");
		} else {
			$("#mainNav").removeClass("navbar-fixed-stick");
			$(".back-to-top").removeClass("show");
		}
	});	*/
	$(window).load(function() {
		$(".loader_box").fadeOut("slow");
	});

	$('.account_nav a').on('click', function (event) {
		event.preventDefault();
	});

	$('.back-to-top a').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	$('#open-button').bind('click', function() {
    $('#open-button').children('.bar').toggleClass('animate');
		$('#page-top').toggleClass('menu_open');
  });
	$('.icon-dropdown-mobile').bind('click', function() {
    $(this).toggleClass('open');
		$(this).next('.sub-menu').toggleClass('open');
  });

});
