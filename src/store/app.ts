// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isUserAuth = ref(false)
  const drawer = ref(false)
  const viewToggle = ref<'list' | 'grid'>('grid')
  return { isUserAuth, drawer, viewToggle }
})
