$(document).ready(function() {
	var movementStrength = 30;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	if (document.documentElement.clientWidth >= 900) {
		$("#custom-background").mousemove(function(e){
	      var pageX = e.pageX - ($(window).width() / 2);
	      var pageY = e.pageY - ($(window).height() / 2);

	      var newvalueX = width * pageX * -1 - 15;
	      var newvalueY = height * pageY * -1 - 50;
	      $('#custom-background').css("background-position", newvalueX+"px     "+newvalueY+"px");
		});
	}
	// else{
	// 	gyro.frequency = 25;
	// 	gyro.startTracking(function(o) {
	// 	    // o.x, o.y, o.z for accelerometer
	// 	    // o.alpha, o.beta, o.gamma for gyro

	// 	    //alpha: compass direction
	// 	    //beta: front to back
	// 	    //gamma: side to side 

	// 	    var newvalueX = width * o.gamma  * -10 - 5;
	// 	    var newvalueY = height* o.beta * -10 - 50;
	// 	    $('#custom-background').css("background-position", newvalueX+"px     "+newvalueY+"px");
	// 	});
	// }

	$('#fullpage').fullpage();
	$('.down_arrow').click(function(){
    	$.fn.fullpage.moveSectionDown();
	});
});