import { identity, result } from './utils/'

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
