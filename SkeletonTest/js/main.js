$(document).ready(function() {

	$(".menuButtons").delegate( "button", "click", function() {
		$(this).toggleClass( "button-primary" ).siblings().removeClass("button-primary");
		var className = $(this).data("food");
		$("."+className).fadeToggle().siblings().hide();
	});

	// $("#CF").click(function() {
	// 	$(this).toggleClass("button-primary");
	// 	$("#JF").removeClass("button-primary");
	// 	$("#DF").removeClass("button-primary");
	//   	$(".CF").fadeToggle();
	//   	$(".JF").hide();
	//   	$(".DF").hide();
	// });

	// $("#JF").click(function() {
	// 	$(this).toggleClass("button-primary");
	// 	$("#CF").removeClass("button-primary");
	// 	$("#DF").removeClass("button-primary");
	//   	$(".JF").fadeToggle();
	//   	$(".CF").hide();
	//   	$(".DF").hide();
	// });

	// $("#DF").click(function() {
	// 	$(this).toggleClass("button-primary");
	// 	$("#CF").removeClass("button-primary");
	// 	$("#JF").removeClass("button-primary");
	//   	$(".DF").fadeToggle();
	//   	$(".CF").hide();
	//   	$(".JF").hide();
	// });

});