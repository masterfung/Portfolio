/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
DESIGN----jQuery Page
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

$(document).ready(function() {

// Index Page (Home Page)
	// Bouncing Hi
	$('#bouncing-hi').hover( function() {
		$(this).toggle ( 'bounce', {times: 10}, 2000);
	});


// jQuery.html Page
	// Accordion Experiment
	$('#accordion-experimental').accordion({collapsible: true, active: false});
	$('#accordion-sass').mouseenter(function() {
		$(this).css("background-color", "#8ec63f");
	});
	$('#accordion-sass').mouseleave(function() {
		$(this).css("background-color", "white");
	});
	$('#accordion-javascript').mouseenter(function() {
		$(this).css("background-color", "#8ec63f");
	});
	$('#accordion-javascript').mouseleave(function() {
		$(this).css("background-color", "white");
	});
	$('#accordion-ruby-python').mouseenter(function() {
		$(this).css("background-color", "#8ec63f");
	});
	$('#accordion-ruby-python').mouseleave(function() {
		$(this).css("background-color", "white");
	});

	// Vanishing Box

	$('.vanishing-box').dblclick(function() {
		$(this).fadeOut('slow');
	});

	// Bouncing Ball
	
	$('#bouncing-ball').animate({top: "+=150px"}, 1000);
	$('#bouncing-ball').animate({left: "+=550px"}, 5000);
	$('#bouncing-ball').toggle( 'bounce', {times: 5}, 15000);

	// Alerts
	$('.alert a').click(function() {
	$(this).parent().fadeOut(2000, function() {
	  $(this).remove();
	});
	})

// Transformation Page
	// Input Range Slider
	$("input[type=range]").change(function () {
		var degrees = $(this).val();
		$('.cube').css("-webkit-transform", "rotate3d(1, 1, 0," + degrees + "deg)");
	});

});