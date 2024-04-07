import { defineStore } from 'pinia'
import { ref } from 'vue';

export type Promotion = 'none' | 'up' | 'down'

export interface UserComment {
  prependAvatar: string;
  title: string;
  subtitle: string;
  bookRating: number;
  promotionCount: number;
  userPromotion: Promotion;
}

export const useBookInfoStore = defineStore('book-info', () => {
  const images = ref([
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
  ])
  const selectedImage = ref(0)
  const likeActive = ref(false)
  const cartActive = ref(false)
  const dialogActive = ref(false)

  return {
    images,
    selectedImage,
    likeActive,
    cartActive,
    dialogActive
  }
})

