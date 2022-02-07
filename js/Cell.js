(function(SQ) {
	'use strict';

	/**
	 * A cell in the grid.
	 */
	function Cell(grid, x, y) {
		this._entity = null;
		this._grid = grid;
		this._pos = new SQ.Vector2(x, y);
	}
	Cell.prototype = {

		/**
		 * Get the entity attached to this cell.
		 */
		getEntity: function() {
			return this._entity;
		},

		/**
		 * Attaches an entity to this cell. Can be a snake or food.
		 * entity: any
		 */
		setEntity: function(entity) {
			this._entity = entity;
		},

		/**
		 * Get this cell's position on the grid.
		 */
		getPosition: function() {
			return this._pos;
		},

		/**
		 * Draw the cell.
		 * ctx: CanvasRenderingContext2D - rendering context
		 */
		draw: function(ctx) {

			ctx.fillStyle = '#d5d5dc';

			var cellSize = SQ.CELL_SIZE;

			var x = this._pos.x;
			var y = this._pos.y;

			// Bottom right pixel
			var px = x * cellSize + cellSize;
			var py = y * cellSize + cellSize;

			if (x === 0) {

				// Bottom left corner
				this._drawCorner(ctx, px - cellSize - 1, py);

				if (y === 0) {

					// Top left corner
					this._drawCorner(ctx, px - cellSize - 1, py - cellSize - 1);
				}
			}

			if (y === 0) {

				// Top right corner
				this._drawCorner(ctx, px, py - cellSize - 1);
			}

			// Bottom right corner
			this._drawCorner(ctx, px, py);

			// Draw food
			if (this._entity instanceof SQ.Food) {
				this._entity.draw(ctx);
			}
		},

		/**
		 * Draw the "+" pattern at a pixel position.
		 * ctx: CanvasRenderingContext2D - rendering context
		 * px: number - pixel x position
		 * py: number - pixel y position
		 */
		_drawCorner: function(ctx, px, py) {

			var cornerLength = SQ.CELL_CORNER_LENGTH;

			ctx.fillRect(px, py - cornerLength, 1, 1 + cornerLength * 2);
			ctx.fillRect(px - cornerLength, py, 1 + cornerLength * 2, 1);
		}
	};

	SQ.Cell = Cell;

})(SQ);
