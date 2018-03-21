var map_korea = {
	tile_size: 20, //16
	/* 
	Key vairables:
            
	id       [required] - an integer that corresponds with a tile in the data array.
	colour   [required] - any javascript compatible colour variable.
	solid    [optional] - whether the tile is solid or not, defaults to false.
	bounce   [optional] - how much velocity is preserved upon hitting the tile, 0.5 is half.
	jump     [optional] - whether the player can jump while over the tile, defaults to false.
	friction [optional] - friction of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
	gravity  [optional] - gravity of the tile, must have X and Y values (e.g {x:0.5, y:0.5}).
	fore     [optional] - whether the tile is drawn in front of the player, defaults to false.
	script   [optional] - refers to a script in the scripts section, executed if it is touched.      
	*/

	keys: [{
		id: 0,
		colour: '#222',
		solid: 1
	}, {
		id: 1,
		colour: '#888',
		solid: 0,
	}, {
		id: 2,
		colour: '#2ecc71',
		solid: 1,
		bounce: 0.7,
		friction: {x: 0.5, y: 0},
	}, {
		id: 3,
		colour: '#c0392b',
		solid: 0,
		script: 'death'
	}, {
		id: 4,
		colour: '#bdc3c7',
		solid: 0,
		gravity: {x: 0, y: -0.8},
	}, {
		id: 5,
		colour: '#8e44ad',
		solid: 0,
		script: 'unlk6'
	}, {
		id: 6,
		colour: '#c0392b',
		solid: 0,
		script: 'death'
	}, {
		id: 7,
		colour: '#bdc3c7',
		solid: 0,
		gravity: {x: -1, y: 0},
	}, {
		id: 8,
		colour: '#2980b9',
		solid: 0,
		script: 'win'
	}, {
		id: 9,
		colour: '#e67e22',
		solid: 0,
		gravity: {x: 0.1, y: -1},
	}],

	/* An array representing the map tiles. Each number corresponds to a key */
	data: [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], 
    [0, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 3, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0], 
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0], 
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 6, 6, 0], 
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0], 
    [0, 1, 1, 1, 0, 0, 0, 9, 3, 0, 3, 3, 0, 1, 4, 0], 
    [0, 1, 1, 1, 3, 1, 0, 3, 3, 3, 3, 3, 0, 4, 4, 0], 
    [0, 3, 1, 1, 1, 5, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0], 
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3, 4, 3, 0], 
    [0, 0, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 3, 1, 4, 0], 
    [0, 0, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 3, 3, 8, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	],

	/* Default gravity of the map */
	gravity: {
		x: 0,
		y: 0.3
	},

	/* Velocity limits */
	vel_limit: {
		x: 2,
		y: 16
	},

	/* Movement speed when the key is pressed */
	movement_speed: {
		jump: 6,
		left: 0.3,
		right: 0.3
	},

	/* The coordinates at which the player spawns and the colour of the player */
	player1: {
		x: 11,
		y: 3,
		colour: '#FF9900'
	},
	
	player2: {
		x: 11,
		y: 3,
		colour: '#2980b9'
	},

	/* scripts refered to by the "script" variable in the tile keys */
	scripts: {
		death: 'death();',
		win: 'win();',
		unlk6: 'normalisetile(6);',
		unlk10: 'normalisetile(10);',
	}
};