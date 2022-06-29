import { describe, expect, it } from 'vitest'

import emitter from '../src'

describe('should', () => {
  it('exported', () => {
    expect(emitter).toMatchInlineSnapshot(`
      {
        "emit": [Function],
        "list": {},
        "on": [Function],
        "once": [Function],
        "remove": [Function],
      }
    `)
  })
})
