import { test } from '../../spec_helper';
import filterMap from '../filterMap';

test('[filterMap] omitting the filter and map args', (t) => {
  const array = [1, 2, 3, 4, 5]

  const result = filterMap(undefined, undefined, array);

  t.deepEquals(result, array, 'return value should be the original array');

  t.end();
});
