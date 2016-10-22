// import { test, td } from '../spec_helper'
// import composeFilters from '../composeFilters'
//
// test('[composeFilters] single filter returning true' , t => {
//   const f = td.func('one')
//   td.when(f()).thenReturn(true)
//
//   const subject = composeFilters(f)
//   const result = subject()
//
//   t.ok(result,
//     'composed filter should return true if its one filter returns true')
//
//   t.end()
// })
//
// test('[composeFilters] single filter returning false' , t => {
//   const f = td.func('one')
//   td.when(f()).thenReturn(false)
//
//   const subject = composeFilters(f)
//   const result = subject()
//
//   t.notOk(result,
//     'composed filter should return false if its one filter returns false')
//
//   t.end()
// })
//
// test('[composeFilters] should return true 2/2 filters return true', t => {
//   const f1 = td.func('one')
//   const f2 = td.func('two')
//   td.when(f1()).thenReturn(true)
//   td.when(f2()).thenReturn(true)
//
//   const subject = composeFilters(f1, f2)
//   const result = subject()
//
//   t.ok(result,
//     'composed filter should return true if 2/2 filters return true')
//
//   t.end()
// })
//
// test('[composeFilters] should return false if 2/2 filters return false', t => {
//   const f1 = td.func('one')
//   const f2 = td.func('two')
//   td.when(f1()).thenReturn(false)
//   td.when(f2()).thenReturn(false)
//
//   const subject = composeFilters(f1, f2)
//   const result = subject()
//
//   t.notOk(result,
//     'composed filter should return false if 2/2 filters return false')
//
//   t.end()
// })
//
// test('[composeFilters] should return false if the first of 2 filters return false', t => {
//   const f1 = td.func('one')
//   const f2 = td.func('two')
//   td.when(f1()).thenReturn(false)
//   td.when(f2()).thenReturn(true)
//
//   const subject = composeFilters(f1, f2)
//   const result = subject()
//
//   t.notOk(result,
//     'composed filter should return false if the first of 2 filters return false')
//
//   t.end()
// })
//
// test('[composeFilters] should return false if the second of 2 filters return false', t => {
//   const f1 = td.func('one')
//   const f2 = td.func('two')
//   td.when(f1()).thenReturn(true)
//   td.when(f2()).thenReturn(false)
//
//   const subject = composeFilters(f1, f2)
//   const result = subject()
//
//   t.notOk(result,
//     'composed filter should return false if the second of 2 filters return false')
//
//   t.end()
// })
