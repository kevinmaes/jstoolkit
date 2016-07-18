import tape from 'tape-catch';
import _ from 'lodash/fp';
import deepFreeze from 'deep-freeze';
import createComponent from 'react-unit';
import { createRenderer } from 'react-addons-test-utils';
import jsxEquals from 'tape-jsx-equals';
import chai from 'chai';
import sinonChai from 'sinon-chai';

// There are known issues with using Sinon and Webpack (problem is with Sinon).
// One solution, halfway down this page, is to require a specific
// commit of sinon, which is what we are doing in package.json:
// https://www.bountysource.com/issues/2143351-can-t-run-sinon-in-node-when-webpacked
// If this isn't working for you, it could be that you have normal sinon installed
// and it's conflicting with the working revision, b672042043517b9f84e14ed0fb8265126168778a.
// Just run npm uninstall sinon and then run npm install to fix this problem.
import sinon from 'sinon';

chai.should();
chai.use(sinonChai);

// Extend tape with addiional assertions from tape-catch and jsxEquals.
import addAssertions from 'extend-tape';
const test = addAssertions(tape, { jsxEquals });

export { test, _, deepFreeze, createComponent, createRenderer, sinon };
