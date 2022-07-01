import { describe, expect, it } from 'vitest'

import emitter from '../src'

describe('should', () => {
  it('exported', () => {
    expect(emitter).toMatchInlineSnapshot(`
      {
        "emit": [Function],
        "list": {},
        "off": [Function],
        "on": [Function],
        "once": [Function],
        "remove": [Function],
        "removeAll": [Function],
      }
    `)
  })

  it('on', () => {
    emitter.on('shiori', () => { })
    expect(emitter.list).toMatchInlineSnapshot(`
      {
        "shiori": [
          [Function],
        ],
      }
    `)
  })

  it('emit', () => {
    emitter.on('yama', () => { })
    emitter.emit('mizuki')
    expect(emitter.list).toMatchInlineSnapshot(`
      {
        "shiori": [
          [Function],
        ],
        "yama": [
          [Function],
        ],
      }
    `)
  })

  it('once', () => {
    emitter.once('yoda', () => { })
    emitter.emit('yoda')
    expect(emitter.list).toMatchInlineSnapshot(`
      {
        "shiori": [
          [Function],
        ],
        "yama": [
          [Function],
        ],
      }
    `)
  })

  it('remove', () => {
    emitter.on('shiori', () => { })
    emitter.remove('yama')
    expect(emitter.list).toMatchInlineSnapshot(`
      {
        "shiori": [
          [Function],
          [Function],
        ],
      }
    `)
  })

  it('removeAll', () => {
    emitter.removeAll()
    expect(emitter.list).toMatchInlineSnapshot('{}')
  })
})
