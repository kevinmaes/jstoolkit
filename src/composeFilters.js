import find from 'lodash/fp/find'

export default (...filters) =>
  (...args) => !find(fn => !fn.apply(fn, args), filters)
