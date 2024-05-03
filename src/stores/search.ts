import { defineStore } from "pinia";
import { ref } from "vue";


export const useSearchStore = defineStore('search-store', () => {
  const search = ref('')
  const drawer = ref(false)
  const dialog = ref(false)
  const dialogTab = ref<'book' | 'author' | 'publisher'>('book')

  return { drawer, search, dialog, dialogTab }
})