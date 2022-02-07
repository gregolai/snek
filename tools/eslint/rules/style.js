// ESLINT:
// http://eslint.org/docs/rules/#stylistic-issues
//
// Also see:
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js

module.exports = {
	rules: {

		'array-bracket-spacing': ['error', 'never'],

		'block-spacing': ['error', 'always'],

		'brace-style': ['error', 'stroustrup'],

		'camelcase': 'off',

		'capitalized-comments': 'off',

		'comma-dangle': 'off',

		'comma-spacing': ['error', { before: false, after: true }],

		'comma-style': ['error', 'last'],

		'computed-property-spacing': ['error', 'never'],

		'consistent-this': 'off',

		'eol-last': ['error', 'always'],

		'func-call-spacing': ['error', 'never'],

		'func-name-matching': ['off', 'always', {
			includeCommonJSModuleExports: false
		}],

		'func-names': 'off',

		'func-style': ['off', 'expression'],

		'id-blacklist': 'off',

		'id-length': 'off',

		'id-match': 'off',

		'indent': ['error', 'tab', {
			'SwitchCase': 1,
		}],

		'jsx-quotes': ['off', 'prefer-double'],

		'key-spacing': ['error', { beforeColon: false, afterColon: true }],

		'keyword-spacing': 'off',

		'line-comment-position': 'off',

		'linebreak-style': ['error', 'unix'],

		'lines-around-comment': 'off',

		'lines-around-directive': ['error', {
			before: 'always',
			after: 'always',
		}],

		'max-depth': ['off', 4],

		'max-len': 'off',

		'max-lines': 'off',

		'max-nested-callbacks': 'off',

		'max-params': ['off', 3],

		'max-statements-per-line': ['off', { max: 1 }],

		'max-statements': ['off', 10],

		'multiline-ternary': 'off',

		'new-cap': 'error',

		'new-parens': 'error',

		'newline-after-var': 'off',

		'newline-before-return': 'off',

		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

		'no-array-constructor': 'error',

		'no-bitwise': 'off',

		'no-continue': 'error',

		'no-inline-comments': 'off',

		'no-lonely-if': 'off',

		'no-mixed-operators': 'off',

		'no-mixed-spaces-and-tabs': 'error',

		'no-multiple-empty-lines': 'off',

		'no-negated-condition': 'off',

		'no-nested-ternary': 'off',

		'no-new-object': 'error',

		'no-plusplus': 'off',

		'no-restricted-syntax': ['error',
			'LabeledStatement',
			'WithStatement',
		],

		'no-spaced-func': 'error',

		'no-tabs': 'off',

		'no-ternary': 'off',

		'no-trailing-spaces': 'error',

		'no-underscore-dangle': 'off',

		'no-unneeded-ternary': ['error', { defaultAssignment: false }],

		'no-whitespace-before-property': 'error',

		'object-curly-newline': 'off',

		'object-curly-spacing': 'off',

		'object-property-newline': ['error', {
			allowMultiplePropertiesPerLine: true,
		}],

		'one-var-declaration-per-line': ['error', 'always'],

		'one-var': 'off',

		'operator-assignment': ['error', 'always'],

		'operator-linebreak': 'off',

		'padded-blocks': 'off',

		'quote-props': ['error', 'as-needed', {
			keywords: false,
			unnecessary: false,
			numbers: false
		}],

		quotes: ['error', 'single', { avoidEscape: true }],

		'require-jsdoc': 'off',

		'semi-spacing': ['error', { before: false, after: true }],

		'semi': ['error', 'always'],

		'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

		'sort-vars': 'off',

		'space-before-blocks': 'error',

		'space-before-function-paren': ['error', 'never'],

		'space-in-parens': ['error', 'never'],

		'space-infix-ops': 'error',

		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {
			},
		}],

		'spaced-comment': ['error', 'always', {
			line: {
				exceptions: ['-', '+'],
				markers: ['=', '!'], // space here to support sprockets directives
			},
			block: {
				exceptions: ['-', '+'],
				markers: ['=', '!'], // space here to support sprockets directives
				balanced: false,
			}
		}],

		'unicode-bom': ['error', 'never'],

		'wrap-regex': 'off'
	}
};
