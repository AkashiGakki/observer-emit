import type { Observer } from './types'

const emitter: Observer = {
  list: new Map<string, Set<Function>>(),
  on,
  emit,
  remove,
  removeAll,
  off,
  once,
}

const singleList = new Map<string, Set<Function>>()

export function on(key: string, fn: Function): void {
  if (!emitter.list.has(key))
    emitter.list.set(key, new Set())

  emitter.list.get(key)?.add(fn)
}

export function emit(key: string, ...args: any[]): void {
  if (!emitter.list.has(key))
    return

  emitter.list.get(key)?.forEach((fn: Function) => fn(...args))

  if (singleList.has(key))
    singleRemoveEffect(key)
}

export function remove(key: string): boolean {
  if (!emitter.list.has(key))
    return true

  emitter.list.delete(key)
  return true
}

export function removeAll(): boolean {
  return Boolean(emitter.list.clear())
}

export function off(key: string, fn: Function): boolean {
  if (!emitter.list.has(key))
    return true

  emitter.list.get(key)?.delete(fn)

  if (!emitter.list.get(key)?.size)
    emitter.list.delete(key)
  return true
}

export function once(key: string, fn: Function): void {
  on(key, fn)

  if (!singleList.has(key))
    singleList.set(key, new Set())

  singleList.get(key)?.add(fn)
}

function singleRemoveEffect(key: string): void {
  const fns = singleList.get(key)
  emitter.list.get(key)?.forEach(ret => fns?.forEach((f: Function) => {
    if (f === ret)
      emitter.list.get(key)?.delete(ret)

    if (!emitter.list.get(key)?.size)
      emitter.list.delete(key)
  }))
  singleList.get(key)?.clear()
}

export default emitter
