var audio;
$(document).ready(function () {
	"use strict";
	$("#startsingle").click(function () {
		initSingle();
	});
	$("#starthost").click(function () {
		hostGame();
	});
	$("#startjoin").click(function () {
		$("#userid").css("display", "none");
		$("#connectid").css("display", "block");
		$("#connect").css("display", "block").click(joinGame);
	});
	$(".mapbutton").click(function(event) {
		var id = event.target.getAttribute("data-map") || event.target.parentElement.getAttribute("data-map");
		console.log("switching map to " + id + "...");
		game.load_map(parseInt(id));
		game.deaths = 0;
		if(ismulti) {
			conn.send(['map', id]);
		}
	});
	
	var audio = new Howl({
		src: ['./media/letgo.mp3'],
		preload: true,
		autoplay: true,
		loop: true,
		volume: 1,
	});
	audio.play();
});