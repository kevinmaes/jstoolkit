import { identity, result } from './utils/'

/**
 * A reducer implementation that simultaneously filters and then maps over
 * an array, only looping over the array once.
 *
 * @param {function} filter - A filter iterator function.
 * @param {function:string} map - A map iterator function or a string
 * representing a property name or method name on each array element.
 * @param {*[]} array - The array to filter and/or map over.
 * @param {number} [until] - An optional number indicating the max number of
 * desired array results.
 *
 * @return {string[]} An array of key values (strings).
 *
 * @example
 * const const array = [
 *   { id: 1, val: '1' },
 *   { id: 2, val: '2' },
 *   { id: 3, val: '3' },
 *   { id: 4, val: '4' },
 *   { id: 5, val: '5' },
 * ]
 * const isOdd = arg => !!(arg % 2)
 * const getVal = arg => arg.val
 *
 * // Invoke filterMap with filter function, map function, and array data.
 * const odds = filterMap(isOdd, getVal, array)
 * console.log(mirror) // { '1', '3', '5' }
 *
 * // Pass optional 'until' param with a value of 2 to limit length of results.
 * const twoOdds = filterMap(isOdd, getVal, array, 2)
 * console.log(mirror) // { '1', '3' }
 */
export default (filter = identity, map = identity, array = [], until) =>
  array.reduce((acc, next) => {
    if (acc.length < (until || array.length) && filter(next)) {
      const value = (typeof map === 'function') ? map(next) : result(map, next)
      acc.push(value)
    }
    return acc
  }, [])
