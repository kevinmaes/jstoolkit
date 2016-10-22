import { expect, td } from '../spec_helper'
import composeFilters from '../composeFilters'
//
describe('#composeFilters()', () => {

  it('should return true if its one and only filter returns true', () => {
    const f = td.func('one')
    td.when(f()).thenReturn(true)

    const subject = composeFilters(f)
    const result = subject()

    expect(result).to.be.true
  })

  it('should return false if its one and only filter returns false', () => {
    const f = td.func('one')
    td.when(f()).thenReturn(false)

    const subject = composeFilters(f)
    const result = subject()

    expect(result).to.be.false
  })

})

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
