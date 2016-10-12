import { test } from '../../spec_helper'
import { toKeys } from '../'

test('[toKeys]', t => {
  const array = ['a', 'b', 'c']

  const result = toKeys(array)

  t.deepEquals(result, array, 'keys should be a similar array')

  t.end()
});

test('[toKeys]', t => {
  const obj = {
    a: null,
    b: null,
    c: null
  };

  const result = toKeys(obj)

  t.deepEquals(result, ['a', 'b', 'c'],
    'keys should be an array of the object keys')

  t.end()
})
