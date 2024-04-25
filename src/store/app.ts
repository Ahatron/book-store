// Utilities
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const isUserAuth = ref(true)
  const isUserAdmin = ref(false)
  const drawer = ref(false)
  const searchDialog = ref(false)
  const viewToggle = ref<'list' | 'grid'>('grid')
  const bookCategories = ref([
    'Novels',
    'Fantastic',
    'Detectives',
    'Fantasy',
    'Scientific literature',
    'Biographies',
    'Poetry',
  ]);
  return { isUserAuth, drawer, viewToggle, bookCategories, isUserAdmin, searchDialog }
})
