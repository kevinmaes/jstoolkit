# jstoolkit

*A small collection of utility functions to help with functional programming in JavaScript*

These methods are meant to compliment the vast suite of methods already available in libraries like [lodash/fp](https://github.com/lodash/lodash/wiki/FP-Guide).

### Getting Started

Install Node `>= 6.x` and npm `>= 3.x`.

1. Clone the repository.
1. `npm i` or `npm yarn install`
1. `npm start`

### Scripts.

| Task name | Purpose |
| :--- | :--- |
| `test` | Run the unit tests using testem and tape. |
| `clean` | Remove the build directory. |
| `lint` | Runs the linter using eslint. |
| `start` | Start the application using webpack and webpack dev server. The behavior changes based on the `NODE_ENV` env var. |
| `doc` | Builds the documentation and serves it up on `localhost:4001`. |

### Testing

Tests are using the following tools:
* [mocha](https://mochajs.org/) JavaScript test framework for node and browsers
* [testem](https://github.com/testem/testem) test runner
* [testdouble](https://github.com/testdouble/testdouble.js) test double library for TDD with JavaScript
* [webpack HMR](https://webpack.github.io/docs/hot-module-replacement.html) hot module replacement using webpack

1) Run `npm start` to start the webpack live watch mode for HMR.
2) Run `npm t` to build the test bundle and to run the tests.
3) View test results in the terminal window and/or open `http://localhost:7357/` in a web browser to see the results of the tests.

Changing either source files or test files will immediately result in an incremental build (HMR) and re-run of all of the tests.


### Documentation.

API docs for this library's methods written using [jsdoc](http://usejsdoc.org/) and are built using [documentation.js](http://documentation.js.org/)

A more detailed list of documentation-related scripts are as follows:

| Task name | Purpose |
| :--- | :--- |
| `doc:html` | Build the html version of the docs and output to the 'doc' directory |
| `doc:md` | Build the markdown version of the docs and output to the doc.md file |
| `doc:serve` | Serve the docs so that they are viewable at `localhost:4001`. |
| `doc` | Builds the documentation and serves it up on `localhost:4001`. |
