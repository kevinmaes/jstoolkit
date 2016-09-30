import { test } from '../spec_helper'
import keyMirror from '../keyMirror'

test('[keyMirror xx]', t => {
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
