(function(SQ) {

	/**
	 * The game grid.
	 * opts: {
	 *   span: number - grid cells per side
	 *   foodMin: number - minimum food count
	 *   foodMax: number - maximum food count (only relevant during grid update)
	 *   foodRate: number - rate of food creation attempts
	 *   foodChance: number - chance of spawning food on each attempt
	 * }
	 */
	function Grid(opts) {

		this._span = opts.span;

		this._foodCount = 0;
		this._foodMin = Math.max(1, Math.min(opts.foodMin, opts.foodMax));
		this._foodMax = Math.max(this._foodMin, opts.foodMax);

		this._foodAccum = 0;
		this._foodInterval = 1000 / opts.foodRate;
		this._foodChance = Math.min(1, Math.max(0, opts.foodChance));

		// Create cell grid
		this._cells = new Array(this._span * this._span);

		for (var y = 0, i = 0; y < this._span; ++y) {

			for (var x = 0; x < this._span; ++x, ++i) {

				this._cells[i] = new SQ.Cell(this, x, y);
			}
		}

		// Bind handler to Grid instance
		this._handleFoodConsume = this._handleFoodConsume.bind(this);
	}
	Grid.prototype = {

		/**
		 * Attempts to spawn a food particle in a random cell.
		 */
		spawnFood: function() {

			var food = null;

			// Give it a good 1000 random tries max. No worries, computers are fast.
			for (var i = 0; i < 1000; ++i) {

				// Get random cell
				var x = Math.floor(Math.random() * this._span);
				var y = Math.floor(Math.random() * this._span);
				var cell = this.getCell(x, y);

				// Check that cell is empty
				if (cell.getEntity() === null) {

					food = new SQ.Food(cell, this._handleFoodConsume);

					cell.setEntity(food);
					this._foodCount += 1;

					SQ.Game.playSound('appear', 0.7);

					break;
				}
			}
			return food;
		},

		/**
		 * Gets the cell at the x, y coordinate.
		 * x: number
		 * y: number
		 */
		getCell: function(x, y) {

			if (x < 0 || x >= this._span || y < 0 || y >= this._span) {
				return null;
			}
			return this._cells[this._span * y + x];
		},

		/**
		 * Update the grid, check if food needs to be spawned.
		 */
		update: function(deltaTime) {

			this._updateFood(deltaTime);
		},

		/**
		 * Draws the grid.
		 * ctx: CanvasRenderingContex2D - 2D rendering context
		 */
		draw: function(ctx) {

			// Clear canvas
			ctx.fillStyle = 'white';
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			var cellSize = SQ.CELL_SIZE;

			for (var y = 0; y < this._span; ++y) {

				for (var x = 0; x < this._span; ++x) {

					this.getCell(x, y).draw(ctx);
				}
			}
		},

		_handleFoodConsume: function(food, cell) {

			cell.setEntity(null);
			this._foodCount -= 1;

			SQ.Game.playSound('eat', 0.4);

			if (this._foodCount < this._foodMin) {
				this.spawnFood();
			}
		},

		/**
		 * Updates the spawning of food.
		 */
		_updateFood: function(deltaTime) {

			this._foodAccum -= deltaTime;

			while (this._foodAccum <= 0) {

				this._foodAccum += this._foodInterval;

				if (this._foodCount < this._foodMax) {

					if (Math.random() < this._foodChance) {
						this.spawnFood();
					}
				}
			}
		},
	};

	SQ.Grid = Grid;

})(SQ);
