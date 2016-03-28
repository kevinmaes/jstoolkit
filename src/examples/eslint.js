module.exports = function() {
  // Adding a trailing comma will be caught by eslint 'comma-dangle'.
  const obj1 = {"one": 1,"two": 2};
  // Removing the trailing comma will be caught by eslint 'comma-dangle'.
  const obj2 = {
    "one": 1,
    "two": 2,
  };
};
