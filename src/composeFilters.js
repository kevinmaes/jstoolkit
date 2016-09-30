import _ from 'lodash/fp'

export default (...filters) =>
  (...args) => !_.find(fn => !fn.apply(fn, args), filters)
