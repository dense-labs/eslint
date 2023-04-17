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
		"@typescript-eslint/no-explicit-any": 0,
		// prettier 作为规则
		"prettier/prettier": ["error", {
			"printWidth": 300,
			"bracketSpacing": false,
  			"jsxBracketSameLine": false,
			"trailingComma": "none"
		}],
		// 禁止使用 var，而应该用 let 或 const
		"no-var": "error"
	}
}

