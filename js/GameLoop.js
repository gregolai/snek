/**
 * The Game object will create an encapsulated GameLoop.
 * I decided that this should go in its own file, as it can be thought of as an 'instance'
 * and shouldn't have access to the Game's private variables.
 */
(function(SQ) {

	var GameLoop = {
		/**
		 * Initializes the game and starts the main loop.
		 * Returns a teardown function for destroying this "instance".
		 * opts: {
		 *   canvas: Canvas - html5 canvas
		 *   grid: object - See Grid constructor
		 *   snake: object - See Snake constructor
		 * }
		 */
		init: function(opts) {

			var grid = new SQ.Grid(opts.grid);
			var snake = new SQ.Snake(grid, opts.snake);

			// Spawn the initial food
			for(var i = 0; i < opts.foodStart; ++i) {
				grid.spawnFood();
			}

			// Frame variables
			var frameID;
			var prevTime = performance.now();
			var ctx = opts.canvas.getContext('2d');

			function onFrame(time) {

				frameID = requestAnimationFrame(onFrame);

				var deltaTime = Math.max(0, time - prevTime);

				// UPDATE
				grid.update(deltaTime);
				snake.update(deltaTime);

				// DRAW
				grid.draw(ctx);
				snake.draw(ctx);

				prevTime = time;
			}

			frameID = requestAnimationFrame(onFrame);

			// Send keyCodes to the snake for input
			function onKeyDown(evt) {
				snake.onKeyDown(evt.keyCode);
			}
			document.addEventListener('keydown', onKeyDown);

			// Return teardown function
			return (function() {

				var destroyed = false;

				// Teardown function
				return function() {

					// Prevent extra teardowns
					if(destroyed) {
						return;
					}

					// Destroy loop and keydown listener
					cancelAnimationFrame(frameID);
					document.removeEventListener('keydown', onKeyDown);

					destroyed = true;
				};
			})();

		}
	};

	SQ.GameLoop = GameLoop;

})(SQ);
