export interface Observer {
  list: Map<string, Set<Function>>
  on: (key: string, fn: Function) => void
  emit: (key: string, ...args: Arguments<Object>) => void
  remove: (key: string) => boolean
  removeAll: () => boolean
  off: (key: string, fn: Function) => boolean
  once: (key: string, fn: Function) => void
}

export type Arguments<T extends Object> = Array<T>
