module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2022": true
	},
	"parser": "@typescript-eslint/parser",
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:prettier/recommended"
	],
	"plugins": ["@typescript-eslint", "prettier"],
	"rules": {
		// off
		// handled by unused-imports/no-unused-imports
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/consistent-indexed-object-style': 'off',
		'@typescript-eslint/naming-convention': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-member-accessibility': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/parameter-properties': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'@typescript-eslint/no-empty-function': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
		'@typescript-eslint/no-this-alias': "off",
		// prettier 作为规则
		"prettier/prettier": ["error", {
			"printWidth": 300,
			"bracketSpacing": false,
  			"jsxBracketSameLine": false,
			"trailingComma": "none"
		}],
		'prefer-const': 'off',
		// 禁止使用 var，而应该用 let 或 const
		"no-var": "error"
	}
}

