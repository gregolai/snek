(function(SQ) {
	'use strict';

	function Vector2(x, y) {
		this.x = 0;
		this.y = 0;
		this.set(x || 0, y || 0);
	}

	Vector2.prototype = {

		clone: function() {
			return new Vector2(this);
		},

		equals: function(v) {
			return this.x === v.x && this.y === v.y;
		},

		set: function(x, y) {

			if(x instanceof Vector2) {
				y = x.y;
				x = x.x;
			}
			this.x = x;
			this.y = y;
			return this;
		},

		add: function(x, y) {

			if(x instanceof Vector2) {
				y = x.y;
				x = x.x;
			}
			return this.set(this.x + x, this.y + y);
		},

		subtract: function(x, y) {
			if(x instanceof Vector2) {
				y = x.y;
				x = x.x;
			}
			return this.set(this.x - x, this.y - y);
		},

		multiply: function(x, y) {

			if(x instanceof Vector2) {
				y = x.y;
				x = x.x;
			}

			y = y === undefined ? x : y;

			return this.set(this.x * x, this.y * y);
		}
	};

	SQ.Vector2 = Vector2;

})(SQ);
