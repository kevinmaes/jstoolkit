// Identity function to use as a default iterator.
export const identity = x => x;

// A generic object property getter function.
export const property = (prop = '', obj) =>
  typeof obj === 'object' ? obj[prop] : undefined

// A function that takes the name of a property and either returns its value
// or attempts to invoke a function with that name on the object passed in.
export const result = (name, obj) => {
  const prop = obj[name]
  return (typeof prop === 'function') ? prop() : prop
}

// filterMap() utility.
// A reducer implementation that simultanously filters and then maps over an array,
// only looping over the array once.
export default (filter = identity, map = identity, array = [], until) =>
  array.reduce((acc, next) => {
    if (acc.length < (until || array.length) && filter(next)) {
      const value = (typeof map === 'function') ? map(next) : result(map, next)
      acc.push(value)
    }
    return acc
  }, [])
