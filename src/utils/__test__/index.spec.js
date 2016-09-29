import { test, td } from '../../spec_helper';
import { identity, property, result, getKeys } from '../';

test('[identity]', t => {
  const arg = 'arg'

  const result = identity(arg);

  t.equals(result, arg, 'return value should equal the arg passed to the function');

  t.end();
});

test('[prop] non-object passed instead of an object', t => {
  const result = property('', '');

  t.equals(result, undefined, 'return value should be undefined');

  t.end();
});

test('[prop] existing property on an object', t => {
  const prop = 'prop'
  const obj = { prop }

  const result = property(prop, obj);

  t.equals(result, prop, 'return value should equal the property value of the object');

  t.end();
});

test('[prop] missing property on an object', t => {
  const obj = {}

  const result = property('missing', obj);

  t.equals(result, undefined, 'return value should be undefined for a missing property');

  t.end();
});

test('[prop] non string passed as property param', t => {
  const obj = { prop: 'value' }

  t.equals(property({}, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(null, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(undefined, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(true, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property(false, obj), undefined, 'return value should be undefined for a non-string property');
  t.equals(property([], obj), undefined, 'return value should be undefined for a non-string property');

  t.end();
});

test('[result] property value', t => {
  const obj = { getValue: 'value' }

  const testResult = result('getValue', obj);

  t.equals(testResult, 'value',
    'return value should equal the prop value on the object');

  t.end();
});

test('[result] property does not exist on object', t => {
  const obj = {}

  const testResult = result('getValue', obj);

  t.equals(testResult, undefined,
    'return value should equal the prop value on the object');

  t.end();
});

test('[result] property is a method', t => {
  const getValue = td.func('getValue')
  const obj = { getValue }
  td.when(getValue()).thenReturn('value')

  const testResult = result('getValue', obj);

  t.equals(testResult, 'value',
    'return value should equal the value returned from the method on obj');

  t.end();
});

test('[getKeys]', t => {
  const array = ['a', 'b', 'c'];

  const result = getKeys(array);

  t.deepEquals(result, array, 'keys should be a similar array');

  t.end();
});

test('[getKeys]', t => {
  const array = ['a', 'b', 'c'];

  const result = getKeys(array);

  t.deepEquals(result, array, 'keys should be a similar array');

  t.end();
});

test('[getKeys]', t => {
  const obj = {
    a: null,
    b: null,
    c: null
  };

  const result = getKeys(obj);

  t.deepEquals(result, ['a', 'b', 'c'],
    'keys should be an array of the object keys');

  t.end();
});
