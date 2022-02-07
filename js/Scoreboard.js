/**
 * Manages the game's score and high score.
 */
(function(SQ) {
	'use strict';

	var _dom = {
		highScore: document.getElementById('game-high-score'),
		score: document.getElementById('game-score'),
		scoreboard: document.getElementById('game-scoreboard'),
	};

	var _score = 0;
	var _highScore = 0;

	/**
	 * Is this score the current high score?
	 */
	var _hasHighscore = false;

	var Scoreboard = {

		getScore: function() {
			return _score;
		},

		setScore: function(value) {

			value = parseInt(value, 10) || 0;

			// Check if this is a score reset
			if(value <= 0 && _hasHighscore) {

				_dom.scoreboard.classList.remove('has-highscore');

				_hasHighscore = false;
			}

			// Set variable
			_score = value;

			// Update dom
			_dom.score.innerText = _score;

			if(_score > _highScore) {
				Scoreboard.setHighScore(_score);

				if(!_hasHighscore) {
					_dom.scoreboard.classList.add('has-highscore');

					_hasHighscore = true;
				}
			}
		},

		getHighScore: function() {
			return _highScore;
		},

		setHighScore: function(value) {

			value = parseInt(value, 10) || 0;

			// Set variables
			_highScore = value;
			localStorage.setItem('SQ.highscore', value);

			// Update dom
			_dom.highScore.innerText = _highScore;
		},
	};

	// Init high score from storage
	Scoreboard.setScore(0);
	Scoreboard.setHighScore(localStorage.getItem('SQ.highscore'));

	SQ.Scoreboard = Scoreboard;

})(SQ);
