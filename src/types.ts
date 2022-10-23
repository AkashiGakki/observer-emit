export interface Observer {
  list: Map<string, Set<Function>>
  on: (key: string, fn: Function) => void
  emit: (key: string, ...args: Arguments<Object>) => void
  off: (key: string) => void
  offAll: () => boolean
  remove: (key: string, fn: Function) => void
  once: (key: string, fn: Function) => void
}

export type Arguments<T extends Object> = Array<T>
