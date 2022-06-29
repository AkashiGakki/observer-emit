# observer-emit

[![NPM version](https://img.shields.io/npm/v/observer-emit?color=a1b858&label=)](https://www.npmjs.com/package/observer-emit)

event emit with observer.

## Install

```bash
npm i observer-emit
```

## Usage


```ts
import { observer } from 'observer-emit'

observer.on('asuka', () => console.log('asuka', 1))
observer.on('nagi', () => console.log('nagi'))

observer.remove('asuka')
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
