import { tape as test } from '../../spec_helper';
import keyMirror from '../keyMirror';

test('[keyMirror]', (t) => {
  const array = ['a', 'b', 'c'];

  const result = keyMirror(array);

  t.deepEquals(result, {
    a: 'a',
    b: 'b',
    c: 'c'
  });

  t.end();
});
