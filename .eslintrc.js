module.exports = {
  "extends": "airbnb",
  "plugins": [
      "react"
  ],
  "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "module",
     "ecmaFeatures": {
       "jsx": true
     }
   },
  // See ESLint Rules: http://eslint.org/docs/rules/
  "rules": {
    "semi": ["error", "always"],
    "comma-dangle": ["off", "always-multiline"],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": ["warn", { "vars": "all", "args": "after-used" }],
    "no-redeclare": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "react/prop-types": "error",
    "react/no-multi-comp": "error",
    "react/prefer-stateless-function": "warn",
    "react/jsx-closing-bracket-location": "warn",
    "no-unused-vars": "warn"
  }
};
