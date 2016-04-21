import tape from 'tape';
import * as tapeCatch from 'tape-catch';
import _ from 'lodash/fp';
import deepFreeze from 'deep-freeze';
import sinon from 'sinon';
import createComponent from 'react-unit';
import { createRenderer } from 'react-addons-test-utils';
import jsxEquals from 'tape-jsx-equals';

// Extend tape with addiional assertions from tape-catch and jsxEquals.
import addAssertions from 'extend-tape';
const newAssertions = Object.assign({}, tapeCatch, { jsxEquals });
const test = addAssertions(tape, newAssertions);

export { test, _, deepFreeze, sinon, createComponent, createRenderer };
