export interface Observer {
  list: Map<string, Set<Func>>
  on: (key: string, fn: Func) => void
  emit: (key: string) => void
  remove: (key: string) => boolean
  removeAll: () => boolean
  off: (key: string, fn: Func) => boolean
  once: (key: string, fn: Func) => void
}

export type Func = () => void
