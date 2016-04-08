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
    "comma-dangle": ["off", "always-multiline"]
  }
};
