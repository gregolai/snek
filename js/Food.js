(function(SQ) {
	'use strict';

	function Food(cell, onConsume) {
		this._cell = cell;
		this._onConsume = onConsume;
	}
	Food.prototype = {

		/**
		 * Removes this food from the cell and returns the number of points it's worth.
		 * We could add consumption effects in the future if we'd like.
		 */
		consume: function() {

			this._onConsume(this, this._cell);

			return 10;
		},

		draw: function(ctx) {

			var pos = this._cell.getPosition();

			var cellSize = SQ.CELL_SIZE;
			var foodSize = SQ.FOOD_SIZE;

			var halfCellSize = cellSize * 0.5;
			var halfFoodSize = foodSize * 0.5;

			var px = pos.x * cellSize + halfCellSize;
			var py = pos.y * cellSize + halfCellSize;

			ctx.fillStyle = '#aa0000';

			ctx.beginPath();
			ctx.arc(px, py, halfFoodSize, 0, Math.PI * 2);
			ctx.fill();
		}
	};

	SQ.Food = Food;

})(SQ);
