"use strict";

function normalisetile(id) {
	game.current_map.keys[id].solid = 0;
	game.current_map.keys[id].colour = "#888";
	game.current_map.keys[id].script = "";
}
function death() {
	game.load_map(-1);
	game.deaths++;
	if(game.deaths === 66) {
		window.open('http://akk.li/pics/anne.jpg', '_blank');
	}
}
function win() {
	alert("Yay! You won! Reloading map.");
	game.load_map(game.mapId);
	game.deaths = 0;
}
