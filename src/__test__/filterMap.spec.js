import { expect, _ } from '../spec_helper'
import filterMap from '../filterMap'

describe('#filterMap()', () => {

  it('should return the original array when omitting the filter and map args', () => {
    const array = [1, 2, 3, 4, 5]

    const result = filterMap(undefined, undefined, array);

    expect(result).to.eql(array)
  })

  it('should filter out odd values when passing an "isEven" callback', () => {
    const array = [1, 2, 3, 4, 5]
    const isEven = arg => !(arg % 2)

    const result = filterMap(isEven, undefined, array);

    expect(result).to.eql([2, 4])
  });

  it('should return an empty array when passing in a filter function, "isString"', () => {
    const array = [1, 2, 3, 4, 5]
    const isString = arg => typeof arg === 'string'

    const result = filterMap(isString, undefined, array);

    expect(result).to.eql([])
  });

  it('should return an array of object values when passing in a map function', () => {
    const array = [
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
      { id: 4, val: '4' },
      { id: 5, val: '5' }
    ]
    const getVal = arg => arg.val

    const result = filterMap(undefined, getVal, array);

    expect(result).to.eql(['1', '2', '3', '4', '5'])
  });

  it('should return an array of values when passing in filter and map functions', () => {
    const array = [
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
      { id: 4, val: '4' },
      { id: 5, val: '5' }
    ]
    const isEven = arg => !(arg.id % 2)
    const getVal = arg => arg.val

    const result = filterMap(isEven, getVal, array);

    expect(result).to.eql(['2', '4'])
  });

  it('should return an array of values when passing in a composed filter function and a map funtion.', () => {
    const array = [
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
      { id: 4, val: '4' },
      { id: 5, val: '5' }
    ]
    const id = arg => arg.id
    const isEven = arg => !(arg % 2)
    const idIsEven = _.compose(isEven, id)
    const getVal = arg => arg.val

    const result = filterMap(idIsEven, getVal, array);

    expect(result).to.eql(['2', '4'])
  });

  it('should return an array of values when passing in composed filter and map functions', () => {
    const array = [
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
      { id: 4, val: '4' },
      { id: 5, val: '5' }
    ]
    const id = arg => arg.id
    const isEven = arg => !(arg % 2)
    const idIsEven = _.compose(isEven, id)
    const getVal = arg => arg.val
    const getValAsNumber = _.compose(Number, getVal)

    const result = filterMap(idIsEven, getValAsNumber, array);

    expect(result).to.eql([2, 4])
  });

  it('should return an array with only the first 2 odd values when passing in an optional "until" arg.', () => {
    const array = [1, 2, 3, 4, 5]
    const isOdd = arg => !!(arg % 2)

    const result = filterMap(isOdd, undefined, array, 2);

    expect(result).to.eql([1, 3])
  });

  it('should return an array of values when passing in a filter function and a map property string', () => {
    const array = [
      { id: 1, val: '1' },
      { id: 2, val: '2' },
      { id: 3, val: '3' },
      { id: 4, val: '4' },
      { id: 5, val: '5' }
    ]
    const isEven = arg => !(arg.id % 2)

    const result = filterMap(isEven, 'val', array);

    expect(result).to.eql(['2', '4'])
  });

  it('should return an array of result values when passing a filter function and a map property string (method name)', () => {
    const array = [
      { id: 1, val: () => '1' },
      { id: 2, val: () => '2' },
      { id: 3, val: () => '3' },
      { id: 4, val: () => '4' },
      { id: 5, val: () => '5' }
    ]
    const isEven = arg => !(arg.id % 2)

    const result = filterMap(isEven, 'val', array);

    expect(result).to.eql(['2', '4'])
  });

})
