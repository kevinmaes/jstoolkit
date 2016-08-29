import tape from 'tape-catch';
import _ from 'lodash/fp';
import deepFreeze from 'deep-freeze';
import addAssertions from 'extend-tape';
// import td from 'testdouble';

const test = addAssertions(tape);

// export { test, _, deepFreeze, td };
export { test, _, deepFreeze };
