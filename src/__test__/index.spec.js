import { test, sinon, td } from '../spec_helper';

test('TestDouble func()', (t) => {
  const stub = td.func();

  stub(1, 2);

  td.verify(stub(1, 2));

  t.end();
});

test('sinon stubs', (t) => {
  const stub = sinon.stub();

  stub('123');

  // Normal tape assertion.
  t.ok(stub.callCount === 1, 'stub should be called once');

  // Alternate Sinon-Chai assertion.
  t.ok(stub.should.be.calledOnce.calledWithExactly('123'),
    'should use sinon-chai assertion');

  t.end();
});

test.skip('src basic arithmetic', (t) => {
  t.plan(4);

  t.equal(2 + 3, 5);
  t.equal((7 * 8) + 9, 65);
  t.equal(1 + 2, 3);
  t.equal(3 + 4, 7);
});

test.skip('src basic arithmetic 2', (t) => {
  t.plan(4);

  t.equal(2 + 3, 5);
  t.equal((7 * 8) + 9, 65);
  t.equal(1 + 2, 3);
  t.equal(3 + 4, 7);
});
