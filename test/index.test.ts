import { describe, expect, it } from 'vitest'

import emitter from '../src'

describe('should', () => {
  it('exported', () => {
    expect(emitter).toMatchInlineSnapshot(`
      {
        "emit": [Function],
        "list": Map {},
        "off": [Function],
        "offAll": [Function],
        "on": [Function],
        "once": [Function],
        "remove": [Function],
      }
    `)
  })

  it('on', () => {
    emitter.on('shiori', () => { })
    expect(emitter.list).toMatchInlineSnapshot(`
      Map {
        "shiori" => Set {
          [Function],
        },
      }
    `)
  })

  it('emit', () => {
    emitter.on('mizuki', () => { })
    emitter.emit('yama')
    expect(emitter.list).toMatchInlineSnapshot(`
      Map {
        "shiori" => Set {
          [Function],
        },
        "mizuki" => Set {
          [Function],
        },
      }
    `)
  })

  it('once', () => {
    emitter.once('yoda', () => { })
    emitter.emit('yoda')
    expect(emitter.list).toMatchInlineSnapshot(`
      Map {
        "shiori" => Set {
          [Function],
        },
        "mizuki" => Set {
          [Function],
        },
      }
    `)
  })

  it('remove', () => {
    const fn = () => { }
    emitter.on('ayame', fn)
    emitter.remove('ayame', fn)
    expect(emitter.list).toMatchInlineSnapshot(`
      Map {
        "shiori" => Set {
          [Function],
        },
        "mizuki" => Set {
          [Function],
        },
      }
    `)
  })

  it('off', () => {
    emitter.on('shiori', () => { })
    emitter.off('mizuki')
    expect(emitter.list).toMatchInlineSnapshot(`
      Map {
        "shiori" => Set {
          [Function],
          [Function],
        },
      }
    `)
  })

  it('offAll', () => {
    emitter.offAll()
    expect(emitter.list).toMatchInlineSnapshot('Map {}')
  })
})
