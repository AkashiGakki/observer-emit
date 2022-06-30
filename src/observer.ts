import type { Observer } from './types'

const observer: Observer = {
  list: {},
  on,
  emit,
  remove,
  once,
}

export function on(key: string, fn: () => void): void {
  if (!observer.list[key])
    observer.list[key] = []

  observer.list[key].push(fn as never)
}

export function emit(key: string): void {
  const useKey = Object.keys(observer.list).find(k => k === key)
  if (!useKey)
    return

  observer.list[key].forEach((fn: () => void) => fn())
}

export function remove(key: string): boolean {
  const isKeyExist = Object.keys(observer.list).includes(key)
  if (!isKeyExist)
    return true

  delete observer.list[key]
  return true
}

export function once(key: string, fn: () => void): void {
  on(key, () => {
    fn()
    remove(key)
  })
}

export default observer