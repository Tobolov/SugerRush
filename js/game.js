"use strict";
/*global Clarity*/
/*global Peer*/
/*global BootstrapDialog*/
window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
	return window.setTimeout(callback, 1000 / 60);
};

var canvas = document.getElementById('canvas'),
	ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 500;

/* Customisable map data */
var maps = [map_arena, map_newworld, map_korea, map_nakara, map_pleb, map_pit, map_sewers];
var game, ismulti, pn;

function startGame(multiplayer) {
	$("body").css("background", "#EEE");
	$("#homepanel").css("display", "none");
	$("#gamepanel").css("display", "block");

	game = new Clarity(); /* Setup of the engine */
	game.playernumber = pn;
	game.set_viewport(canvas.width, canvas.height);
	game.maps = maps;
	game.load_map(1);
	game.limit_viewport = false; /* Limit the viewport to the confines of the map */
	ismulti = multiplayer;

	if (ismulti) {
		conn.on('data', function (data) {
			switch (data[0]) {
				case 'move':
					game.friend = data[1];
					break;
					
				case 'throw':
					var pow = Math.random() * 6 + 2;//2-6
					var angle = Math.random() * 2 * Math.PI;
					game.player.vel = {x:(pow * Math.cos(angle)), y:(pow * Math.sin(angle))};
					break;
					
				case 'map':
					console.log("switching map to " + data[1] + " on request of friend...");
					game.load_map(parseInt(data[1]));
					game.deaths = 0;
					break;
			}
		});
		conn.on('close', function () {
			BootstrapDialog.show({
				title: 'Error!',
				message: 'Opponent Disconnected!',
				type: BootstrapDialog.TYPE_DANGER
			});
		});
		peer.on('error', function (err) {
			alert('' + err);
		});
	}
	var Loop = function () {
		ctx.fillStyle = '#333';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		game.update();
		game.draw(ctx);
		window.requestAnimFrame(Loop);
		if(ismulti) {
			conn.send(['move', game.player]);
		}
	};
	Loop();
}

function initSingle() {
	pn = 1;
	startGame(false);
}

/* multi player core */
var peer, myId, opponentId, conn;

function initialize() {
	peer = new Peer(genID(), {
		host: '40.126.250.31',
		debug: 3,
		port: 30200,
		path: '/myapp',
		logFunction: function () {
			var copy = Array.prototype.slice.call(arguments).join(' ');
			$('.log').append(copy + '<br>');
		},
		config: {'iceServers': [
                { url: 'stun:stun.l.google.com:19302' },
                { url: 'turn:numb.viagenie.ca:3478', credential: 't2TcSH1pt9L6QcDA8VrK', username: 'matthew.tobolov@gmail.com' },
                { url: 'turn:numb.viagenie.ca', credential: 't2TcSH1pt9L6QcDA8VrK', username: 'matthew.tobolov@gmail.com'  },
            ]}
	});
	peer.on('open', function (id) {
		myId = id;
		console.log("My Id: " + id);
		$("#userid").html(id);
	});
	peer.on('error', function (err) {
		console.log(err);
		if (err.type === 'unavailable-id') {
			peer = null;
			initialize();
		}
	});
}

function genID() {
	var min = 0,
		max = 99999;
	return Math.floor(Math.random() * (max - min) + min);
}

function hostGame() {
	initialize();
	peer.on('open', function () {
		$("#userid").css("display", "block");
		$("#connectid").css("display", "none");
		$("#connect").css("display", "none");
		$("#startsingle").css("display", "none");
		$("#starthost").css("display", "none");
		$("#startjoin").css("display", "none");
	});
	peer.on('connection', function (c) {
		if (conn) {
			c.close();
			return;
		}
		conn = c;

		pn = 1;
		startGame(true);
	});
}

function joinGame() {
	initialize();
	peer.on('open', function () {
		var destId = $("#connectid").val();
		$("#startsingle").css("display", "none");
		$("#starthost").css("display", "none");
		$("#startjoin").css("display", "none");

		conn = peer.connect(destId, {
			reliable: false
		});
		conn.on('open', function () {
			opponentId = destId;

			pn = 2;
			startGame(true);
		});
	});
}