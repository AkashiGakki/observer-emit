// // import emitter from '../src'
// import emitter from '../src/observer'

// console.time('test on')
// for (let i = 0; i < 1000; i++)
//   emitter.on(`${i}`, () => { })
// console.timeEnd('test on')

// console.time('test emit')
// for (let i = 0; i < 1000; i++)
//   emitter.emit(`${i}`)
// console.timeEnd('test emit')

// console.time('test del')
// // Object.keys(emitter.list).forEach(key => emitter.remove(key))
// emitter.list.forEach((_, key) => emitter.remove(key))
// console.timeEnd('test del')

import { describe, expect, it } from 'vitest'

describe.skip('should', () => {
  it('cost', () => {
    expect('')
  })
})
