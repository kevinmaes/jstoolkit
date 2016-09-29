/**
 * Get keys from an array or an object
 * @param {string[]|object} keys - An array or object whose elements or keys are key values.
 * @return {string[]} An array of key values (strings).
 */
export const getKeys = keys =>
  Array.isArray(keys) ? keys : Object.keys(keys);

/**
 * @module utils/keyMirror
 *
 * Get keys from an array or an object
 * @param {string[]|object} keys - An array or object whose elements or keys are key values.
 * @return {object} An object whose key/value pairs match the keys passed in.
 *
 * @example
 * const keys = ['one', 'two', 'three']
 * const mirror = keyMirror(keys)
 * console.log(mirror) // { one: 'one', two: 'two', three: 'three' }
 *
 * @example
 * const keys = { one: null, two: null, three: null }
 * const mirror = keyMirror(keys)
 * console.log(mirror) // { one: 'one', two: 'two', three: 'three' }
 */
export default keyMirror = keys =>
  getKeys(keys).reduce((obj, key) => {
    obj[key] = key;
    return obj;
  }, {});
