import { tape as test, td } from '../spec_helper';

test.skip('simple test equals', (t) => {
  t.equals(1, 1);
  t.end();
});

test.skip('TestDouble func()', (t) => {
  const stub = td.func('.stub');

  stub(1, 2);

  td.verify(stub(1, 2));

  t.ok(true);
  t.end();
});

test.skip('TestDouble func() that returns a value', (t) => {
  const stub = td.when(td.function()('somearg'))
    .thenReturn(42);

  const result = stub('somearg');

  // Verify using TestDouble.
  // td.verify(stub('somearg'));

  // Or verify using Tape assertion.
  t.equals(result, 42, 'stub return value');

  t.end();
});
