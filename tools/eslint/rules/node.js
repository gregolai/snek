// ESLINT:
// http://eslint.org/docs/rules/#nodejs-and-commonjs
//
// Also see:
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/node.js

module.exports = {
	env: {
		node: true,
	},
	rules: {

		'callback-return': 'off',

		'global-require': 'error',

		'handle-callback-err': 'off',

		'no-mixed-requires': 'off',

		'no-new-require': 'error',

		'no-path-concat': 'error',

		'no-process-env': 'off',

		'no-process-exit': 'off',

		'no-restricted-modules': 'off',

		'no-sync': 'off',
	}
};
