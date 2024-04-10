import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useCreateBookStore = defineStore('add-book', () => {
  const dialogActive = ref(false)
  const imagesURL = ref<any[]>([])
  const selectedImage = ref(0)

  function removeImage(index: number) {
    imagesURL.value = imagesURL.value.filter((_, i) => i !== index)
  }

  function showCarousel(index: number) {
    selectedImage.value = index
    dialogActive.value = true
  }

  return {
    dialogActive,
    imagesURL,
    selectedImage,
    removeImage,
    showCarousel
  }
})