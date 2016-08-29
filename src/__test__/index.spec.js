// import { test, td } from '../spec_helper';
import { test } from '../spec_helper';

test('simple test', (t) => {
  t.end();
});
//
// test('TestDouble func()', (t) => {
//   const stub = td.func();
//
//   stub(1, 2);
//
//   td.verify(stub(1, 2));
//
//   t.end();
// });
//
// test.skip('TestDouble func() that returns a value', (t) => {
//   const stub = td.when(td.function()('somearg'))
//     .thenReturn(42);
//
//   const result = stub('somearg');
//
//   td.verify(stub('somearg'));
//
//   t.equals(result, 42, 'stub return value');
//
//   t.end();
// });
