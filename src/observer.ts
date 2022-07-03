import type { Func, Observer } from './types'

const emitter: Observer = {
  list: new Map<string, Set<Func>>(),
  on,
  emit,
  remove,
  removeAll,
  off,
  once,
}

const singleList = new Map<string, Set<Func>>()

export function on(key: string, fn: Func): void {
  if (!emitter.list.has(key))
    emitter.list.set(key, new Set())

  emitter.list.get(key)?.add(fn)
}

export function emit(key: string): void {
  if (!emitter.list.has(key))
    return

  emitter.list.get(key)?.forEach((fn: Func) => fn())

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

export function off(key: string, fn: Func): boolean {
  if (!emitter.list.has(key))
    return true

  emitter.list.get(key)?.delete(fn)

  if (!emitter.list.get(key)?.size)
    emitter.list.delete(key)
  return true
}

export function once(key: string, fn: Func): void {
  on(key, fn)

  if (!singleList.has(key))
    singleList.set(key, new Set())

  singleList.get(key)?.add(fn)
}

function singleRemoveEffect(key: string): void {
  const fns = singleList.get(key)
  emitter.list.get(key)?.forEach(ret => fns?.forEach((f: Func) => {
    if (f === ret)
      emitter.list.get(key)?.delete(ret)

    if (!emitter.list.get(key)?.size)
      emitter.list.delete(key)
  }))
  singleList.get(key)?.clear()
}

export default emitter
