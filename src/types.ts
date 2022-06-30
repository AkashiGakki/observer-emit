export interface Observer {
  list: Record<string, any[]>
  on: (value: string, fn: () => void) => void
  emit: (value: string) => void
  remove: (value: string) => boolean
  once: (value: string, fn: () => void) => void
}