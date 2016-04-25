import tape from 'tape-catch';
import _ from 'lodash/fp';
import deepFreeze from 'deep-freeze';
import createComponent from 'react-unit';
import { createRenderer } from 'react-addons-test-utils';
import jsxEquals from 'tape-jsx-equals';
// Extend tape with addiional assertions from tape-catch and jsxEquals.
import addAssertions from 'extend-tape';
const test = addAssertions(tape, { jsxEquals });

export { test, _, deepFreeze, createComponent, createRenderer };
