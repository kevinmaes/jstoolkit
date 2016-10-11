import { test, _ } from '../spec_helper'
import filterMap from '../filterMap'

test('[filterMap] omitting the filter and map args', t => {
  const array = [1, 2, 3, 4, 5]

  const result = filterMap(undefined, undefined, array);

  t.deepEquals(result, array, 'return value should be the original array');

  t.end();
});

test('[filterMap] passing in a filter function, "isEven"', t => {
  const array = [1, 2, 3, 4, 5]
  const isEven = arg => !(arg % 2)

  const result = filterMap(isEven, undefined, array);

  t.deepEquals(result, [2, 4], 'return value should be only even values');

  t.end();
});

test('[filterMap] passing in a filter function, "isString"', t => {
  const array = [1, 2, 3, 4, 5]
  const isString = arg => typeof arg === 'string'

  const result = filterMap(isString, undefined, array);

  t.deepEquals(result, [],
    'return value should be an empty array (no strings)');

  t.end();
});

test('[filterMap] passing in a map function (no filter function)', t => {
  const array = [
    { id: 1, val: '1' },
    { id: 2, val: '2' },
    { id: 3, val: '3' },
    { id: 4, val: '4' },
    { id: 5, val: '5' }
  ]
  const getVal = arg => arg.val

  const result = filterMap(undefined, getVal, array);

  t.deepEquals(result, ['1', '2', '3', '4', '5'],
    'return value should be an array of object values');

  t.end();
});

test('[filterMap] passing in filter and map functions', t => {
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

  t.deepEquals(result, ['2', '4'],
    'return value should be an array of values of the filtered object array');

  t.end();
});

test('[filterMap] passing in a composed filter function and map function', t => {
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

  t.deepEquals(result, ['2', '4'],
    'return value should be an array of values of the composite filtered object array');

  t.end();
});

test('[filterMap] passing in comosed filter and map functions', t => {
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

  t.deepEquals(result, [2, 4],
    'return value should be an array of values of the composite filtered object array');

  t.end();
});

test('[filterMap] passing in an optional "until" value', t => {
  const array = [1, 2, 3, 4, 5]
  const isOdd = arg => !!(arg % 2)

  const result = filterMap(isOdd, undefined, array, 2);

  t.deepEquals(result, [1, 3],
    'return value should be an array containing only the first 2 odd values');

  t.end();
});

test('[filterMap] passing in filter function and a map property string', t => {
  const array = [
    { id: 1, val: '1' },
    { id: 2, val: '2' },
    { id: 3, val: '3' },
    { id: 4, val: '4' },
    { id: 5, val: '5' }
  ]
  const isEven = arg => !(arg.id % 2)

  const result = filterMap(isEven, 'val', array);

  t.deepEquals(result, ['2', '4'],
    'return value should be an array of values of the filtered object array');

  t.end();
});

test('[filterMap] passing in filter function and a map property string (method name)', t => {
  const array = [
    { id: 1, val: () => '1' },
    { id: 2, val: () => '2' },
    { id: 3, val: () => '3' },
    { id: 4, val: () => '4' },
    { id: 5, val: () => '5' }
  ]
  const isEven = arg => !(arg.id % 2)

  const result = filterMap(isEven, 'val', array);

  t.deepEquals(result, ['2', '4'],
    'return value should be an array of result values of the filtered object array');

  t.end();
});
