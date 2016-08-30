import tape from 'tape-catch';
import _ from 'lodash/fp';
import deepFreeze from 'deep-freeze';
import td from 'testdouble';

// Add other types of assertions to tape.
import addAssertions from 'extend-tape';
const test = addAssertions(tape, {});

export { _, deepFreeze, td, test };
