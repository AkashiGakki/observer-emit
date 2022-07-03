export interface Observer {
  list: Record<string, any[]>
  on: (value: string, fn: () => void) => void
  emit: (value: string) => void
  remove: (value: string) => boolean
  removeAll: () => boolean
  off: (value: string, fn: () => void) => boolean
  once: (value: string, fn: () => void) => void
}

const observer: Observer = {
  list: {},
  on,
  emit,
  remove,
  removeAll,
  off,
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
  if (!isKeyExist(key))
    return true

  delete observer.list[key]
  return true
}

export function removeAll(): boolean {
  observer.list = {}
  return Boolean(Object.keys(observer.list).length)
}

export function off(key: string, fn: () => void): boolean {
  if (!isKeyExist(key))
    return true

  const index = observer.list[key].findIndex(f => f === fn)
  observer.list[key].splice(index, 1)

  if (!observer.list[key].length)
    delete observer.list[key]
  return true
}

export function once(key: string, fn: () => void): void {
  on(key, () => {
    fn()
    off(key, fn)
  })
}

function isKeyExist(key: string): boolean {
  return Object.keys(observer.list).includes(key)
}

export default observer
