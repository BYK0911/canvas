import { ref, Ref } from 'vue'

export const logs: Ref<string[]> = ref([])
export const log = (str: string): void => {
  if (logs.value.length > 100) logs.value.shift()
  logs.value.push(str)
}