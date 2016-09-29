import { test } from '../../spec_helper';
import { identity, property } from '../object';

test('[filterMap] identity', (t) => {
  const arg = 'arg'

  const result = identity(arg);

  t.equals(result, arg, 'return value should equal the arg passed to the function');

  t.end();
});

test('[filterMap] prop', (t) => {
  const prop = 'prop'
  const obj = { prop }

  const result = property(prop, obj);

  t.equals(result, prop, 'return value should equal the property value of the object');

  t.end();
});

test('[filterMap] prop', (t) => {
  const obj = {}

  const result = property('missing', obj);

  t.equals(result, undefined, 'return value should be undefined for a missing property');

  t.end();
});
