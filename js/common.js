$(function(){

	$('.bxslider').bxSlider({
	auto: true,
	 auto: ($(".bxslider li").length > 1) ? true: false,
    pager: ($(".bxslider li").length > 1) ? true: false,
	});

	$('.feedback_slider_wrap ul').bxSlider({});

	$( ".menu_trigger" ).click(function() {
	  $( ".js-show-menu" ).slideToggle( "slow");
	});
});

  