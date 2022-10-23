# observer-emit

👀 A Node.js event emitter works in the browser.

[![NPM version](https://img.shields.io/npm/v/observer-emit?color=a1b858&label=)](https://www.npmjs.com/package/observer-emit)

## Install

### using npm

```bash
$ npm i observer-emit
```

### using yarn

```bash
$ yarn add observer-emit
```

### using pnpm

```bash
$ pnpm i observer-emit
```

## Usage


```ts
import observer from 'observer-emit'

observer.on('asuka', () => console.log('asuka', 1))
observer.on('nagi', () => console.log('nagi'))

observer.off('asuka')
observer.on('asuka', () => console.log('asuka', 2))

observer.emit('asuka') // asuka 2
observer.emit('nagi') // nagi

observer.once('ume', () => console.log('ume'))
observer.emit('ume') // ume
observer.emit('ume')
observer.emit('ume')
```

## License

[MIT](./LICENSE) License © 2022 [Akashi Sai](https://github.com/akashigakki)
