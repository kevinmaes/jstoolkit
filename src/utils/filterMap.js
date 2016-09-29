import { identity } from 'utils/object'

// A reducer implementation that simultanously filters and maps over an array,\
// only looping over the array once.
export default (filter = identity, map = identity, array = []) =>
  array.reduce((acc, next) => {
    if (acc.length < array.length && filter(next))
    	acc.push(map(next))
    return acc
  }, [])
