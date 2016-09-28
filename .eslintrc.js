module.exports = {
  "plugins": [
      "react"
  ],
  "parserOptions": {
   "ecmaVersion": 6,
   "sourceType": "module",
   "ecmaFeatures": {
     "jsx": true,
     "experimentalObjectRestSpread": true
   }
 },
  // See ESLint Rules: http://eslint.org/docs/rules/
  "rules": {
    "semi": ["off"],
    "comma-dangle": ["off", "always-multiline"],
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-vars": "warn",
    "no-redeclare": "error",
    "no-console": "warn",
    "react/prop-types": "error",
    "react/no-multi-comp": "error",
    "react/jsx-closing-bracket-location": "warn",
    "no-unused-vars": "warn",
    "import/no-named-as-default": "off"
  }
};
