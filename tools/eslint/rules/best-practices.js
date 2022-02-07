// ESLINT:
// http://eslint.org/docs/rules/#best-practices
//
// Also see:
// https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/best-practices.js

module.exports = {
	rules: {

		// Enforces getter/setter pairs in objects (accessor-pairs)
		// http://eslint.org/docs/rules/accessor-pairs
		'accessor-pairs': 'off',

		// Enforces return statements in callbacks of array’s methods (array-callback-return)
		// http://eslint.org/docs/rules/array-callback-return
		'array-callback-return': 'error',

		// Treat var as Block Scoped (block-scoped-var)
		// http://eslint.org/docs/rules/block-scoped-var
		'block-scoped-var': 'error',

		// Enforce that class methods utilize this (class-methods-use-this)
		// http://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': 'off',

		// Limit Cyclomatic Complexity (complexity)
		// http://eslint.org/docs/rules/complexity
		'complexity': 'off',

		// require return statements to either always or never specify values (consistent-return)
		// http://eslint.org/docs/rules/consistent-return
		'consistent-return': 'error',

		// Require Following Curly Brace Conventions (curly)
		// http://eslint.org/docs/rules/curly
		'curly': 'error',

		// Require Default Case in Switch Statements (default-case)
		// http://eslint.org/docs/rules/default-case
		'default-case': 'off',

		// Enforce newline before and after dot (dot-location)
		// http://eslint.org/docs/rules/dot-location
		'dot-location': ['error', 'property'],

		// Require Dot Notation (dot-notation)
		// http://eslint.org/docs/rules/dot-notation
		'dot-notation': 'off',

		// Require === and !== (eqeqeq)
		// http://eslint.org/docs/rules/eqeqeq
		'eqeqeq': ['error', 'always'],

		// Require Guarding for-in (guard-for-in)
		// http://eslint.org/docs/rules/guard-for-in
		'guard-for-in': 'off',

		// Disallow Use of Alert (no-alert)
		// http://eslint.org/docs/rules/no-alert
		'no-alert': 'off',

		// Disallow Use of caller/callee (no-caller)
		// http://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// Disallow lexical declarations in case/default clauses (no-case-declarations)
		// http://eslint.org/docs/rules/no-case-declarations
		'no-case-declarations': 'off',

		// Disallow Regexs That Look Like Division (no-div-regex)
		// http://eslint.org/docs/rules/no-div-regex
		'no-div-regex': 'off',

		// Disallow return before else (no-else-return)
		// http://eslint.org/docs/rules/no-else-return
		'no-else-return': 'off',

		// Disallow empty functions (no-empty-function)
		// http://eslint.org/docs/rules/no-empty-function
		'no-empty-function': 'off',

		// Disallow empty destructuring patterns (no-empty-pattern)
		// http://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// Disallow Null Comparisons (no-eq-null)
		// http://eslint.org/docs/rules/no-eq-null
		'no-eq-null': 'error',

		// Disallow eval() (no-eval)
		// http://eslint.org/docs/rules/no-eval
		'no-eval': 'error',

		// Disallow Extending of Native Objects (no-extend-native)
		// http://eslint.org/docs/rules/no-extend-native
		'no-extend-native': 'error',

		// Disallow unnecessary function binding (no-extra-bind)
		// http://eslint.org/docs/rules/no-extra-bind
		'no-extra-bind': 'off',

		// Disallow Unnecessary Labels (no-extra-label)
		// http://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'error',

		// Disallow Case Statement Fallthrough (no-fallthrough)
		// http://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': 'error',

		// Disallow Floating Decimals (no-floating-decimal)
		// http://eslint.org/docs/rules/no-floating-decimal
		'no-floating-decimal': 'off',

		// Disallow assignment to native objects or read-only global variables (no-global-assign)
		// http://eslint.org/docs/rules/no-global-assign
		'no-global-assign': 'error',

		// Disallow the type conversion with shorter notations. (no-implicit-coercion)
		// http://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': 'off',

		// disallow variable and function declarations in the global scope (no-implicit-globals)
		// http://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'error',

		// Disallow Implied eval() (no-implied-eval)
		// http://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 'error',

		// Disallow this keywords outside of classes or class-like objects. (no-invalid-this)
		// http://eslint.org/docs/rules/no-invalid-this
		'no-invalid-this': 'off',

		// Disallow Iterator (no-iterator)
		// http://eslint.org/docs/rules/no-iterator
		'no-iterator': 'error',

		// Disallow Labeled Statements (no-labels)
		// http://eslint.org/docs/rules/no-labels
		'no-labels': 'error',

		// Disallow Unnecessary Nested Blocks (no-lone-blocks)
		// http://eslint.org/docs/rules/no-lone-blocks
		'no-lone-blocks': 'error',

		// Disallow Functions in Loops (no-loop-func)
		// http://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'error',

		// Disallow Magic Numbers (no-magic-numbers)
		// http://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': 'off',

		// Disallow multiple spaces (no-multi-spaces)
		// http://eslint.org/docs/rules/no-multi-spaces
		'no-multi-spaces': 'error',

		// Disallow Multiline Strings (no-multi-str)
		// http://eslint.org/docs/rules/no-multi-str
		'no-multi-str': 'error',

		// Disallow Function Constructor (no-new-func)
		// http://eslint.org/docs/rules/no-new-func
		'no-new-func': 'error',

		// Disallow Primitive Wrapper Instances (no-new-wrappers)
		// http://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 'error',

		// Disallow new For Side Effects (no-new)
		// http://eslint.org/docs/rules/no-new
		'no-new': 'error',

		// disallow octal escape sequences in string literals (no-octal-escape)
		// http://eslint.org/docs/rules/no-octal-escape
		'no-octal-escape': 'error',

		// disallow octal literals (no-octal)
		// http://eslint.org/docs/rules/no-octal
		'no-octal': 'error',

		// Disallow Reassignment of Function Parameters (no-param-reassign)
		// http://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 'off',

		// Disallow Use of __proto__ (no-proto)
		// http://eslint.org/docs/rules/no-proto
		'no-proto': 'error',

		// disallow variable redeclaration (no-redeclare)
		// http://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 'error',

		// disallow certain object properties (no-restricted-properties)
		// http://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}],

		// Disallow Assignment in return Statement (no-return-assign)
		// http://eslint.org/docs/rules/no-return-assign
		'no-return-assign': 'error',

		// Disallows unnecessary return await (no-return-await)
		// http://eslint.org/docs/rules/no-return-await
		'no-return-await': 'error',

		// Disallow Script URLs (no-script-url)
		// http://eslint.org/docs/rules/no-script-url
		'no-script-url': 'error',

		// Disallow Self Assignment (no-self-assign)
		// http://eslint.org/docs/rules/no-self-assign
		'no-self-assign': 'error',

		// Disallow Self Compare (no-self-compare)
		// http://eslint.org/docs/rules/no-self-compare
		'no-self-compare': 'error',

		// Disallow Use of the Comma Operator (no-sequences)
		// http://eslint.org/docs/rules/no-sequences
		'no-sequences': 'error',

		// Restrict what can be thrown as an exception (no-throw-literal)
		// http://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'error',

		// Disallow unmodified conditions of loops (no-unmodified-loop-condition)
		// http://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'off',

		// Disallow Unused Expressions (no-unused-expressions)
		// http://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
		}],

		// Disallow Unused Labels (no-unused-labels)
		// http://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// Disallow unnecessary .call() and .apply(). (no-useless-call)
		// http://eslint.org/docs/rules/no-useless-call
		'no-useless-call': 'error',

		// Disallow unnecessary concatenation of strings (no-useless-concat)
		// http://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// Disallow unnecessary escape usage (no-useless-escape)
		// http://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// Disallow redundant return statements (no-useless-return)
		// http://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// Disallow use of the void operator. (no-void)
		// http://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// Disallow Warning Comments (no-warning-comments)
		// http://eslint.org/docs/rules/no-warning-comments
		'no-warning-comments': 'off',

		// disallow with statements (no-with)
		// http://eslint.org/docs/rules/no-with
		'no-with': 'error',

		// Require Radix Parameter (radix)
		// http://eslint.org/docs/rules/radix
		radix: 'error',

		// Disallow async functions which have no await expression (require-await)
		// http://eslint.org/docs/rules/require-await
		'require-await': 'off',

		// Require Variable Declarations to be at the top of their scope (vars-on-top)
		// http://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'off',

		// Require IIFEs to be Wrapped (wrap-iife)
		// http://eslint.org/docs/rules/wrap-iife
		'wrap-iife': ['error', 'any'],

		// Require or disallow Yoda Conditions (yoda)
		// http://eslint.org/docs/rules/yoda
		'yoda': 'error',
	}
};
