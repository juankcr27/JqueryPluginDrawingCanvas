$(document).ready(function(){
	var $input = $("#message"),
		commonFunction = function(){
		
		var message = $input.val(); 
		
		$("#canvas-container").thermometer(message);
	};
	
	$("#draw-canvas").click(commonFunction);
	$input.keyup(commonFunction);
});