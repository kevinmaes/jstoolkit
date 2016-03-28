import _ from 'lodash';

module.exports = {
  noRemainder: (divisor, number) => {return number % divisor === 0;},
  filterEven: (fn, array) => {
    // Curry the 'noRemainder' function
    const noRemainder = _.curry(fn);
    // returns a boolean indicating whether there's a remainder.
    // Create an 'isEven' function by partially applying 2.
    const isEven = noRemainder(2);
    // Filter the array using the 'isEven' function
    // => [2, 4]
    return array.filter(isEven);
  }
};
