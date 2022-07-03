export interface Observer {
  list: Map<string, Set<() => void>>
  on: (value: string, fn: () => void) => void
  emit: (value: string) => void
  remove: (value: string) => boolean
  removeAll: () => boolean
  off: (value: string, fn: () => void) => boolean
  once: (value: string, fn: () => void) => void
}

export type Func = () => void
