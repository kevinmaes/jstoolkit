/**
 * Get keys from an array or an object
 * @param {string[]|object} keys - An array or object whose elements or keys are key values.
 * @return {string[]} An array of key values (strings).
 */
export const toKeys = keys =>
  Array.isArray(keys) ? keys : Object.keys(keys);
