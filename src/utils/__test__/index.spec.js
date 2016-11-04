import { expect } from '../../spec_helper'
import { toKeys } from '../'

describe('#toKeys()', () => {

  it('should return an array with the same string elements', () => {
    const array = ['a', 'b', 'c']

    const result = toKeys(array)

    expect(result).to.eql(array)
  });

  it('should return an array of the object keys', () => {
    const obj = {
      a: null,
      b: null,
      c: null
    };

    const result = toKeys(obj)

    expect(result).to.eql(['a', 'b', 'c'])
  })

})
