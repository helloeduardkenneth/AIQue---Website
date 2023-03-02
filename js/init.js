//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "31 December 9999 18:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	