'use strict';
import test from 'tape';
import Animal from '../index';

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
  // const expected = 'something to test';
  // const actual = 'sonething to test';
  const animal = new Animal();
  const sound = animal.getSound();
  assert.equal(sound, "grrrr",
    'Given two mismatched values, .equal() should produce a nice bug report');

  assert.end();
});
