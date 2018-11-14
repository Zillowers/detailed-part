module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb-base", 'plugin:react/recommended'],
  "env": {
    "browser": true,
    "node": true,
    "jest": true,
  },
  "rules": {
    "import/extensions": ['error', 'always', {
      "js": "ignorePackages",
      "jsx": "ignorePackages",
    }],
  },
};