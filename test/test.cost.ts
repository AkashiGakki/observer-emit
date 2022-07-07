import emitter from '../src'
// import emitter from '../src/observer'

console.time('test on')
for (let i = 0; i < 1000; i++)
  emitter.on(`${i}`, () => { })
console.timeEnd('test on')

console.time('test emit')
for (let i = 0; i < 1000; i++)
  emitter.emit(`${i}`)
console.timeEnd('test emit')

console.time('test del')
emitter.list.forEach((_, key) => emitter.remove(key))
console.timeEnd('test del')
