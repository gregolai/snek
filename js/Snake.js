(function(SQ) {

	function Node(cell) {
		this.cell = cell;
		this.next = null; // towards the tail direction
		this.prev = null; // torwards the head direction
	}

	function NodeList(snake, grid) {
		this._snake = snake;
		this._grid = grid;

		this.head = null;
		this.tail = null;
	}
	NodeList.prototype = {

		pushOntoTail: function(x, y) {
			this._push(x, y, true);
		},

		pushOntoHead: function(x, y) {
			this._push(x, y, false);
		},

		/**
		 * Transfer tail node to the front of the list.
		 */
		transferTail: function(cell) {

			var transplant = this.tail;

			// Clear old value, set new value
			transplant.cell.setEntity(null);
			transplant.cell = cell;
			transplant.cell.setEntity(this._snake);

			var nextTail = this.tail.prev;

			// detach transplant from tail
			transplant.prev = null;
			nextTail.next = null;

			// attach transplant to old head
			this.head.prev = transplant;
			transplant.next = this.head;

			// transplant replaces head
			this.head = transplant;

			// next tail replaces tail
			this.tail = nextTail;
		},

		_push: function(x, y, atTail) {

			var cell = this._grid.getCell(x, y);

			cell.setEntity(this._snake);

			if (!this.head) {
				this.head = this.tail = new Node(cell);
			}
			else {
				var newNode = new Node(cell);
				if (atTail) {
					this.tail.next = newNode;
					newNode.prev = this.tail;
					this.tail = newNode;
				}
				else {
					this.head.prev = newNode;
					newNode.next = this.head;
					this.head = newNode;
				}
			}
		},

	};

	/**
	 * Our protagonist.
	 * grid: Grid - main grid
	 * opts: {
	 *     direction: number - init direction
	 *     x: number - init x position
	 *     y: number - init y position
	 *     length: number - init length of snake
	 *     fps: number - "fps" speed of snake (increased difficulty)
	 * }
	 */
	function Snake(grid, opts) {

		this._grid = grid;

		this._direction = opts.direction;

		this._nextDirection = this._direction;

		this._fixedInterval = 1000 / opts.fps;
		this._frameAccum = 0;

		// Amount of growth nodes to add on next move
		this._queuedGrowth = 0;

		// Vector pointing from head to tail
		var tailVec = SQ.direction.getOppositeVector(this._direction);

		this._nodes = new NodeList(this, grid);

		for (var i = 0, ii = opts.length; i < ii; ++i) {

			var x = opts.x + tailVec.x * i;
			var y = opts.y + tailVec.y * i;

			this._nodes.pushOntoTail(x, y);
		}
	}

	Snake.prototype = {

		update: function(deltaTime) {

			this._frameAccum -= deltaTime;

			while (this._frameAccum <= 0) {

				this._frameAccum += this._fixedInterval;

				this._move();
			}
		},

		draw: function(ctx) {

			ctx.fillStyle = 'red';

			var index = 0;
			var node = this._nodes.head;

			while (node) {
				this._drawNode(ctx, node);
				node = node.next;
			}
		},

		onKeyDown: function(key) {

			// The snake's direction can only change perpendicular to its current direction

			if (this._direction === SQ.direction.WEST || this._direction === SQ.direction.EAST) {
				// EAST, WEST => NORTH, SOUTH

				if (key === SQ.key.W || key === SQ.key.UP) {

					this._nextDirection = SQ.direction.NORTH;
				}
				else if (key === SQ.key.S || key === SQ.key.DOWN) {

					this._nextDirection = SQ.direction.SOUTH;
				}
			}
			else {
				// NORTH, SOUTH => EAST, WEST

				if (key === SQ.key.A || key === SQ.key.LEFT) {

					this._nextDirection = SQ.direction.WEST;
				}
				else if (key === SQ.key.D || key === SQ.key.RIGHT) {

					this._nextDirection = SQ.direction.EAST;
				}
			}
		},

		_drawNode: function(ctx, node) {

			var pos = node.cell.getPosition();

			var cellSize = SQ.CELL_SIZE;
			var nodeSize = SQ.SNAKE_NODE_SIZE;

			var halfCellSize = cellSize * 0.5;
			var halfNodeSize = nodeSize * 0.5;

			var px = pos.x * cellSize + halfCellSize - halfNodeSize;
			var py = pos.y * cellSize + halfCellSize - halfNodeSize;

			ctx.fillRect(px, py, nodeSize, nodeSize);

		},

		_move: function() {

			// Update current direction with next direction
			this._direction = this._nextDirection;

			var nextCell = this._getNextCell();

			if (nextCell === null) {
				// You hit a wall - you lose
				SQ.Game.lose('You hit a wall.');
			}
			else {
				var entity = nextCell.getEntity();

				if (entity === this) {
					// You ran into yourself - you lose
					SQ.Game.lose('You ran into yourself.');
				}
				else {

					if (entity instanceof SQ.Food) {

						// Consume food
						var pointValue = entity.consume();

						// Add points
						var score = SQ.Scoreboard.getScore();
						score += pointValue;
						SQ.Scoreboard.setScore(score);

						// Queue growth
						this._queuedGrowth += 1;
					}


					if (this._queuedGrowth > 0) {

						var pos = nextCell.getPosition();

						this._nodes.pushOntoHead(pos.x, pos.y);

						this._queuedGrowth -= 1;
					}
					else {
						// Apply next cell
						this._nodes.transferTail(nextCell);
					}
				}
			}
		},

		_getNextCell: function() {

			var pos = this._nodes.head.cell.getPosition();

			var dirVec = SQ.direction.getVector(this._direction);

			return this._grid.getCell(pos.x + dirVec.x, pos.y + dirVec.y);
		},
	};

	SQ.Snake = Snake;

})(SQ);
