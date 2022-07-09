import emitter from '../src'

emitter.on('test', (ev: any) => {
  console.log('akashi test')
  console.log('ev: ', ev)
})

emitter.emit('test')
emitter.emit('test', { test: ['asuak', 'shiori'] })
