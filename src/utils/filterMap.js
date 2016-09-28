// Identity function to use as a default iterator.
export const identity = x => x;

// A generic object property getter function.
export const property = (prop = '', obj) =>
  typeof obj === 'object' ? obj[prop] : undefined

// A reducer implementation that simultanously filters and maps over an array,\
// only looping over the array once.
export default (filter = identity, map = identity, array = [], until) =>
  array.reduce((acc, next) => {
    if (acc.length < (until || array.length) && filter(next))
    	acc.push(map(next))
    return acc
  }, [])
