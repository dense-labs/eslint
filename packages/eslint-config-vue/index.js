module.exports = {
	"env": {
		"node": true,
		"es2021": true,
		"browser": true // 浏览器
	},
	"parser": "vue-eslint-parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"parser": "@typescript-eslint/parser",
		"ecmaFeatures": {
			"jsx": true // 启用 jsx
		}
	},
	"plugins": ["prettier"],
	"extends": [
		"eslint:recommended", // 内置规则
		"plugin:vue/vue3-recommended", // 支持 vue sfc
		"prettier",
		// "./presets/eslint/.eslintrc-auto-import.json",
		"plugin:prettier/recommended"
	],
	"rules": {
		// 允许相同组件名
		"vue/multi-word-component-names": "off",
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
	},
	"globals": {
		"defineOptions": true
	},
	"ignorePatterns": ["node_modules/", "dist/"]
}

