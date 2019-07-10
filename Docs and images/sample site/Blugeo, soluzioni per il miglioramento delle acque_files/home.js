// Freelancer Theme JavaScript
$( document ).ready(function() {

  	$('.slider').slick({
  	  slidesToShow: 1,
  	  slidesToScroll: 1,
  		arrows: true,
      prevArrow: '<button type="button" class="slick-prev fa fa-chevron-left"></button>',
      nextArrow: '<button type="button" class="slick-next fa fa-chevron-right"></button>',
      dots: true,
  	  autoplay: true,
  	  autoplaySpeed: 4000,
  	});

/*	$("#loader").jRoll({
		radius: 50,
		colors: ['#4B8481'],
		monocolor: true,
		animation: "halfslicedspinner"
	});
	$(window).load(function() {
		$(".loader_box").fadeOut("slow");
	});

	$('#events-list').bxSlider({
		auto: false,
  		minSlides: 1,
  		maxSlides: 3,
		moveSlides: 1,
		slideWidth: 390,
  		slideMargin: 0,
		pager: false
	});
	$('.testimonials_wrapper').bxSlider({
		nextText: '',
		prevText: ''
	});
	//$('#intro_video').fitVids();
	$('.parallax-window').parallax({
		iosFix: false,
		androidFix: false
	});*/

});
