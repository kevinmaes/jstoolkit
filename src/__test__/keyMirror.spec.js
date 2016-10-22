import { expect } from '../spec_helper'
import keyMirror from '../keyMirror'

describe('keyMirror()', () => {
  it('should create a key mirror for an object with keys', () => {
    const obj = {
        a: null,
        b: null,
        c: null
      };
    const expected = {
      a: 'a',
      b: 'b',
      c: 'c'
    }

    const result = keyMirror(obj);

    expect(result).to.eql(expected)
  })
})
