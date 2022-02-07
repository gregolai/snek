/**
 * Global namespace for everything created in the game.
 */
var SQ = (function() {
	'use strict';

	var WEST = 1;
	var NORTH = 2;
	var EAST = 3;
	var SOUTH = 4;

	return {

		/**
		 * Edge length (in pixels) of each grid cell.
		 */
		CELL_SIZE: 28,

		/**
		 * Pixel length of cell corner tips (creates a "+" pattern)
		 */
		CELL_CORNER_LENGTH: 4,

		/**
		 * Snake body size.
		 */
		SNAKE_NODE_SIZE: 24,

		/**
		 * Food size.
		 */
		FOOD_SIZE: 10,

		/**
		 * Direction enum relative to the grid.
		 */
		direction: {
			WEST: WEST,
			NORTH: NORTH,
			EAST: EAST,
			SOUTH: SOUTH,

			/**
			 * Returns the opposite direction.
			 * dir: number - input direction
			 */
			getOppositeDirection: function(dir) {
				switch (dir) {
					case WEST: return EAST;
					case NORTH: return SOUTH;
					case EAST: return WEST;
					default: return NORTH;
				}
			},

			/**
			 * Gets the unit vector of the supplied direction.
			 *
			 */
			getVector: function(dir) {
				switch (dir) {
					case WEST: return new SQ.Vector2(-1, 0);
					case NORTH: return new SQ.Vector2(0, -1);
					case EAST: return new SQ.Vector2(1, 0);
					default: return new SQ.Vector2(0, 1);
				}
			},

			getOppositeVector: function(dir) {
				return this.getVector(this.getOppositeDirection(dir));
			}
		},

		/**
		 * Keycode mapping of keys used by the game.
		 */
		key: {
			A: 65,
			W: 87,
			D: 68,
			S: 83,

			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40,

			SPACE: 32,
			ENTER: 13,

			// We could add more keys if we need...
		},
	};

})();
