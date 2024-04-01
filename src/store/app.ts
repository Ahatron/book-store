// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const drawer = ref(false)
  const viewToggle = ref<'list' | 'grid'>('grid')
  return { drawer, viewToggle }
})
