import { test } from '../../spec_helper';
import filterMap, { identity, property } from '../filterMap';

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

test('[filterMap] omitting the filter and map args', (t) => {
  const array = [1, 2, 3, 4, 5]

  const result = filterMap(undefined, undefined, array);

  t.deepEquals(result, array, 'return value should be the original array');

  t.end();
});


//
// /* IMPLEMENTATION */
//
// // Map iterator to get the value of an object's id.
// const getId = prop.bind(null, 'id')
//
// // Map iterator to get an object's val property.
// const getVal = prop.bind(null, 'val')
//
// // Example: Use getter truthy/falsy result as filter.
// // Filter an array using getId (sometimes returns undefined) as the filter iterator and then map the filtered results of an array of objects.
// // Only take the first 3 filtered results.
// result = filterMap(getId, getVal, 3, [
//   { id: 1, val: '1' },
//   { id: 2, val: '2' },
//   { id: 3, val: '3' },
//   { id: undefined, val: '4' },
//   { id: 5, val: '5' }
// ])
// console.log('result', result) // ['1', '2', '3'] instead of // ['1', '2', '3', '5']
