'use strict';
import test from 'tape-catch';
import Animal from '../Animal';
import { noRemainder, filterEven } from '../lodash';

test('Testing a JS Object.', (assert) => {
  const animal = new Animal();
  const sound = animal.getSound();
  assert.equal(sound, "grrrr",
    'Animal should have the correct sound');

  assert.end();
});

test('Testing use of lodashfp.', (assert) => {
  // Create an array with even and odd numbers.
  const array = [1, 2, 3, 4];
  let result = filterEven(noRemainder, array);

  assert.deepEqual(result, [2, 4],
    'Given an array, filterEven should return only the even values');

  assert.end();
});
