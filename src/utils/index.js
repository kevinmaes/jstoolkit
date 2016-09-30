import _ from 'lodash/fp'
/**
 * Identity function to use as a default iterator.
 *
 * @param {*} x - Any argument can be passed to this function.
 *
 * @return {*} The same value that was passed to this function.
 */
export const identity = x => x;

/**
 * A generic object property getter function.
 *
 * @param {string} prop - The name of a property to be picked off of an object.
 * @param {object} The object containing a property we are going to pick.
 *
 * @return {*} The value of the property if found on the object.
 */
export const property = (prop = '', obj) => obj[prop]

/**
 * A function that takes the name of a property and either returns its value
 * or attempts to invoke a function with that name on the object passed in.
 *
 * @param {string} name - The name of a property or method on the object.
 * @param {string} obj - The object containing the property or method.
 *
 * @return {*} The property value or return value of the method on the object.
 */
export const result = (name, obj) => {
  const prop = obj[name]
  return (typeof prop === 'function') ? prop() : prop
}

/**
 * Get keys from an array or an object
 * @param {string[]|object} keys - An array or object whose elements or keys are key values.
 * @return {string[]} An array of key values (strings).
 */
export const getKeys = keys =>
  Array.isArray(keys) ? keys : Object.keys(keys);


export const composeFilters = (...filters) =>
  (...args) => !_.find(fn => !fn.apply(fn, args), filters)
