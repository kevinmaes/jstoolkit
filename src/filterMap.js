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
 */
export default (filter = identity, map = identity, array = [], until) =>
  array.reduce((acc, next) => {
    if (acc.length < (until || array.length) && filter(next)) {
      const value = (typeof map === 'function') ? map(next) : result(map, next)
      acc.push(value)
    }
    return acc
  }, [])
