import find from 'lodash/fp/find'

/**
 * A function that accepts multiple filter functions and returns a function that,
 * when called, will attempt to invoke all filter functions.
 * If any filter function returns false then that function will return false,
 * otherwise, it returns true if all filters return true.
 *
 * @param {...function} filters - Any number of filter functions.
 *
 * @return {function} A wrapper function which will invoke all filter functions
 * with whatever arguments it is passed.
 *
 * @example
 * // 2 filters, both return true.
 * const filter1 = () => true
 * const filter2 = () => true
 * composition = composeFilter(filter1, filter2)
 * composition()
 * // => true
 *
 * @example
 * // 2 filters, both return false.
 * const filter1 = () => false
 * const filter2 = () => false
 * composition = composeFilter(filter1, filter2)
 * composition()
 * // => false
 *
 * @example
 * // 2 filters, the first returns false.
 * const filter1 = () => false
 * const filter2 = () => true
 * composition = composeFilter(filter1, filter2)
 * composition()
 * // => false
 *
 *  * @example
 * // 2 filters, the second returns false.
 * const filter1 = () => true
 * const filter2 = () => false
 * composition = composeFilter(filter1, filter2)
 * composition()
 * // => false
 *
 */
export default (...filters) =>
  (...args) => !find(fn => !fn.apply(fn, args), filters)
