
module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'mocha': true
	},
	'extends': [
		'./rules/best-practices.js',
		'./rules/errors.js',
		'./rules/node.js',
		'./rules/strict.js',
		'./rules/style.js',
		'./rules/variables.js',
	],

	// Needed for parsing things like class properties
	// https://github.com/babel/babel-eslint
	'parser': 'babel-eslint',

	'parserOptions': {
		'ecmaVersion': 2015,
		'sourceType': 'module',
		'ecmaFeatures': {
			'globalReturn': false,
			'impliedStrict': true,
			'jsx': true,
			'experimentalObjectRestSpread': true,
		},
	}
};
