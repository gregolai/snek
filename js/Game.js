(function(SQ) {
	'use strict';

	var _dom = {
		btnClearHighScore: document.getElementById('game-btn-clear-high-score'),
		btnForfeit: document.getElementById('game-btn-forfeit'),
		btnPlay: document.getElementById('game-btn-play'),
		btnReset: document.getElementById('game-btn-reset'),
		canvas: document.getElementById('game-canvas'),
		innerWrap: document.getElementById('game-inner-wrap'),
		menu: document.getElementById('game-menu'),
		menuMessage: document.getElementById('game-menu-message'),
		settings: document.getElementById('game-settings'),
	};

	var _sfx = {
		lose: document.getElementById('game-sfx-lose'),
		appear: document.getElementById('game-sfx-appear'),
		eat: document.getElementById('game-sfx-eat'),
	};

	var _gridSpan; // # of cells per side
	var _fps; // difficulty (fps)

	// Teardown function, assigned when a game is started and called when it's torn down.
	var _teardown = function() { };
	var _playing = false;

	var Game = {

		/**
		 * Resets and starts the game. Hides the menu.
		 */
		reset: function() {

			_teardown();

			// Reset score
			SQ.Scoreboard.setScore(0);

			// Add 'playing' class to inner wrapper
			_dom.innerWrap.classList.add('playing');

			var snakeLength = 4;

			// Init returns a teardown function
			_teardown = SQ.GameLoop.init({

				canvas: _dom.canvas,

				foodStart: 3,

				grid: {
					span: _gridSpan,

					foodMin: 2,
					foodMax: 5,

					foodRate: 2, // frames per second to possibly spawn food
					foodChance: 0.1 // between 0 and 1
				},

				snake: {
					direction: SQ.direction.EAST,
					x: snakeLength,
					y: Math.floor(_gridSpan / 2),
					length: snakeLength,
					fps: _fps,
				}
			});
			_playing = true;
		},

		/**
		 * Stops the game. Displays the menu.
		 */
		lose: function(reason) {

			_playing = false;

			Game.playSound('lose', 0.4);

			_teardown();

			// Get points and display it in menu
			var score = SQ.Scoreboard.getScore();
			var highScore = SQ.Scoreboard.getHighScore();

			var text = score === 0
				? 'Are you ok? You didn\'t get any points.'
				: (score === highScore
					? 'You got ' + score + ' points, a new high score.'
					: 'You got ' + score + ' points. Try again.'
				);

			if (reason) {
				text = reason + ' ' + text;
			}

			_dom.menuMessage.innerText = text;

			// Remove 'playing' class from inner wrapper
			_dom.innerWrap.classList.remove('playing');
			_dom.innerWrap.classList.add('playagain');
		},

		playSound: function(soundID, volume) {

			var sound = _sfx[soundID];
			if (sound !== undefined) {

				sound.volume = volume !== undefined ? volume : 1;
				sound.play();
			}
		},
	};



	// Reset game on play button click
	_dom.btnPlay.addEventListener('click', function() {
		Game.reset();
	});

	// Clear the high score
	_dom.btnClearHighScore.addEventListener('click', function() {
		SQ.Scoreboard.setHighScore(0);
	});

	// Reset game
	_dom.btnReset.addEventListener('click', function() {
		Game.reset();
	});

	// Forfeit game (go to menu)
	_dom.btnForfeit.addEventListener('click', function() {
		Game.lose();
	});

	// Use space/enter to toggle between playing and menu states
	document.addEventListener('keydown', function(evt) {

		var key = evt.keyCode;
		if (key === SQ.key.SPACE || key === SQ.key.ENTER) {

			// Toggle between playing and menu states
			if (_playing) {
				Game.lose();
			}
			else {
				Game.reset();
			}
		}
	});

	// Init and bind grid sizing variable
	(function() {

		var _spanMap = {
			small: 14,
			medium: 16,
			large: 18,
		};

		var btns = _dom.settings.querySelectorAll('.size-btn');

		// Resize the game to allow for a grid with a specific cell span.
		function setSize(size) {

			if (_spanMap[size] === undefined) {
				size = 'small';
			}

			// Set active button
			btns.forEach(function(btn) {

				if (btn.getAttribute('size') === size) {
					btn.classList.add('active');
				}
				else {
					btn.classList.remove('active');
				}
			});

			// Set variables
			_gridSpan = _spanMap[size];
			localStorage.setItem('SQ.size', size);

			// Resize canvas
			var width = _gridSpan * SQ.CELL_SIZE;
			_dom.canvas.width = width;
			_dom.canvas.height = width;
		}

		// Bind button click events
		btns.forEach(function(btn) {

			var size = btn.getAttribute('size');

			btn.addEventListener('click', function() {
				setSize(size);
			});
		});

		// Set initial size
		setSize(localStorage.getItem('SQ.size'));

	})();

	// Init and bind game difficulty (snake frames per second)
	(function() {

		var _fpsMap = {
			easy: 6,
			medium: 8,
			hard: 10,
		};

		var btns = _dom.settings.querySelectorAll('.difficulty-btn');

		function setDifficulty(difficulty) {

			if (_fpsMap[difficulty] === undefined) {
				difficulty = 'easy';
			}

			// Set active button
			btns.forEach(function(btn) {

				if (btn.getAttribute('difficulty') === difficulty) {
					btn.classList.add('active');
				}
				else {
					btn.classList.remove('active');
				}
			});

			// Cast to integer, if not already
			_fps = _fpsMap[difficulty];
			localStorage.setItem('SQ.difficulty', difficulty);
		}


		// Bind button click events
		btns.forEach(function(btn) {

			var difficulty = btn.getAttribute('difficulty');

			btn.addEventListener('click', function() {
				setDifficulty(difficulty);
			});
		});

		// Set initial difficulty
		setDifficulty(localStorage.getItem('SQ.difficulty'));

	})();

	SQ.Game = Game;

})(SQ);
