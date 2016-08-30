import { test } from '../../spec_helper';
import keyMirror, { getKeys } from '../keyMirror';

test('[keyMirror] getKeys', (t) => {
  const array = ['a', 'b', 'c'];

  const result = getKeys(array);

  t.deepEquals(result, array, 'keys should be a similar array');

  t.end();
});

test('[keyMirror] getKeys', (t) => {
  const array = ['a', 'b', 'c'];

  const result = getKeys(array);

  t.deepEquals(result, array, 'keys should be a similar array');

  t.end();
});

test('[keyMirror]', (t) => {
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

test('[keyMirror]', (t) => {
  const obj = {
    a: null,
    b: null,
    c: null
  };

  const result = keyMirror(obj);

  t.deepEquals(result, {
    a: 'a',
    b: 'b',
    c: 'c'
  }, 'create a key mirror for an object with keys');

  t.end();
});
