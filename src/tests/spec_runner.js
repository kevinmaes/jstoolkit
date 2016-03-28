'use strict';
import test from 'tape-catch';
import Animal from '../examples/Animal';
import { noRemainder, filterEven } from '../lodash_poc';

test('A passing test', (assert) => {

  assert.pass('This test will pass.');

  assert.end();
});

test('Assertions with tape.', (assert) => {
  const expected = 'something to test';
  const actual = 'something to test';

  assert.equal(actual, expected,
    'Given two mismatched values, .equal() should produce a nice bug report');

  assert.end();
});

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
