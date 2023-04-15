export default {
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
		"./presets/eslint/.eslintrc-auto-import.json",
		"plugin:prettier/recommended"
	],
	"rules": {
		// 允许相同组件名
		"vue/multi-word-component-names": "off",
		// prettier 作为规则
		"prettier/prettier": ["error", {
			"printWidth": 300,
			"bracketSpacing": false,
  			"jsxBracketSameLine": false,
			"trailingComma": "none"
		}],
		// 禁止使用 var，而应该用 let 或 const
		"no-var": "error"
	},
	"globals": {
		"defineOptions": true
	}
}