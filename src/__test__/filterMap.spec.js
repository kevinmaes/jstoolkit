import { expect } from '../spec_helper'
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
//
// it('should passing in a composed filter function and map function', () => {
//   const array = [
//     { id: 1, val: '1' },
//     { id: 2, val: '2' },
//     { id: 3, val: '3' },
//     { id: 4, val: '4' },
//     { id: 5, val: '5' }
//   ]
//   const id = arg => arg.id
//   const isEven = arg => !(arg % 2)
//   const idIsEven = _.compose(isEven, id)
//   const getVal = arg => arg.val
//
//   const result = filterMap(idIsEven, getVal, array);
//
//   t.deepEquals(result, ['2', '4'],
//     'return value should be an array of values of the composite filtered object array');
//
//   t.end();
// });
//
// it('should passing in comosed filter and map functions', () => {
//   const array = [
//     { id: 1, val: '1' },
//     { id: 2, val: '2' },
//     { id: 3, val: '3' },
//     { id: 4, val: '4' },
//     { id: 5, val: '5' }
//   ]
//   const id = arg => arg.id
//   const isEven = arg => !(arg % 2)
//   const idIsEven = _.compose(isEven, id)
//   const getVal = arg => arg.val
//   const getValAsNumber = _.compose(Number, getVal)
//
//   const result = filterMap(idIsEven, getValAsNumber, array);
//
//   t.deepEquals(result, [2, 4],
//     'return value should be an array of values of the composite filtered object array');
//
//   t.end();
// });
//
// it('should passing in an optional "until" value', () => {
//   const array = [1, 2, 3, 4, 5]
//   const isOdd = arg => !!(arg % 2)
//
//   const result = filterMap(isOdd, undefined, array, 2);
//
//   t.deepEquals(result, [1, 3],
//     'return value should be an array containing only the first 2 odd values');
//
//   t.end();
// });
//
// it('should passing in filter function and a map property string', () => {
//   const array = [
//     { id: 1, val: '1' },
//     { id: 2, val: '2' },
//     { id: 3, val: '3' },
//     { id: 4, val: '4' },
//     { id: 5, val: '5' }
//   ]
//   const isEven = arg => !(arg.id % 2)
//
//   const result = filterMap(isEven, 'val', array);
//
//   t.deepEquals(result, ['2', '4'],
//     'return value should be an array of values of the filtered object array');
//
//   t.end();
// });
//
// it('should passing in filter function and a map property string (method name)', () => {
//   const array = [
//     { id: 1, val: () => '1' },
//     { id: 2, val: () => '2' },
//     { id: 3, val: () => '3' },
//     { id: 4, val: () => '4' },
//     { id: 5, val: () => '5' }
//   ]
//   const isEven = arg => !(arg.id % 2)
//
//   const result = filterMap(isEven, 'val', array);
//
//   t.deepEquals(result, ['2', '4'],
//     'return value should be an array of result values of the filtered object array');
//
//   t.end();
// });

})
