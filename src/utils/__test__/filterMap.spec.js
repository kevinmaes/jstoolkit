import { test, td } from '../../spec_helper';
import filterMap, { identity, property, result } from '../filterMap';

test('[filterMap] identity', (t) => {
  const arg = 'arg'

  const result = identity(arg);

  t.equals(result, arg, 'return value should equal the arg passed to the function');

  t.end();
});

test('[filterMap] prop - non-object passed instead of an object', (t) => {
  const result = property('', '');

  t.equals(result, undefined, 'return value should be undefined');

  t.end();
});

test('[filterMap] prop - existing property on an object', (t) => {
  const prop = 'prop'
  const obj = { prop }

  const result = property(prop, obj);

  t.equals(result, prop, 'return value should equal the property value of the object');

  t.end();
});

test('[filterMap] prop - missing property on an object', (t) => {
  const obj = {}

  const result = property('missing', obj);

  t.equals(result, undefined, 'return value should be undefined for a missing property');

  t.end();
});

test('[filterMap] prop - non string passed as property param', (t) => {
  const obj = { prop: 'value' }

  t.equals(property({}, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(null, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(undefined, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(true, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(false, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property([], obj), undefined, 'return value should be undefined for a non-string property');

  t.end();
});

test('[filterMap] result - property value', (t) => {
  const obj = { getValue: 'value' }

  const testResult = result('getValue', obj);

  t.equals(testResult, 'value',
    'return value should equal the prop value on the object');

  t.end();
});

test('[filterMap] result - property does not exist on object', (t) => {
  const obj = {}

  const testResult = result('getValue', obj);

  t.equals(testResult, undefined,
    'return value should equal the prop value on the object');

  t.end();
});

test('[filterMap] result - property is a method', (t) => {
  const getValue = td.func('getValue')
  const obj = { getValue }
  td.when(getValue()).thenReturn('value')

  const testResult = result('getValue', obj);

  t.equals(testResult, 'value',
    'return value should equal the value returned from the method on obj');

  t.end();
});

test('[filterMap] omitting the filter and map args', (t) => {
  const array = [1, 2, 3, 4, 5]

  const result = filterMap(undefined, undefined, array);

  t.deepEquals(result, array, 'return value should be the original array');

  t.end();
});

test('[filterMap] passing in a filter function, "isEven"', (t) => {
  const array = [1, 2, 3, 4, 5]
  const isEven = arg => !(arg % 2)

  const result = filterMap(isEven, undefined, array);

  t.deepEquals(result, [2, 4], 'return value should be only even values');

  t.end();
});

test('[filterMap] passing in a filter function, "isString"', (t) => {
  const array = [1, 2, 3, 4, 5]
  const isString = arg => typeof arg === 'string'

  const result = filterMap(isString, undefined, array);

  t.deepEquals(result, [],
    'return value should be an empty array (no strings)');

  t.end();
});

test('[filterMap] passing in a map function (no filter function)', (t) => {
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

test('[filterMap] passing in filter and map functions', (t) => {
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

test('[filterMap] passing in a composed filter function and map function', (t) => {
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

test('[filterMap] passing in comosed filter and map functions', (t) => {
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

test('[filterMap] passing in an optional "until" value', (t) => {
  const array = [1, 2, 3, 4, 5]
  const isOdd = arg => !!(arg % 2)

  const result = filterMap(isOdd, undefined, array, 2);

  t.deepEquals(result, [1, 3],
    'return value should be an array containing only the first 2 odd values');

  t.end();
});

test('[filterMap] passing in filter function and a map property string', (t) => {
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

test('[filterMap] passing in filter function and a map property string (method name)', (t) => {
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
