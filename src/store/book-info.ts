import { defineStore } from 'pinia'
import { ref } from 'vue';

export type Promotion = 'none' | 'up' | 'down' | 'user own'
export type BookRating = 1 | 2 | 3 | 4 | 5
export interface UserComment {
  prependAvatar: string;
  title: string;
  subtitle: string;
  bookRating: BookRating;
  promotionCount: number;
  userPromotion: Promotion;
}

export const useBookInfoStore = defineStore('book-info', () => {
  const comments = ref<UserComment[]>([
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      bookRating: 5,
      promotionCount: 100,
      userPromotion: 'up'
    },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ',
      subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      bookRating: 1,
      promotionCount: 100,
      userPromotion: 'down'
    },])
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

  function addComment(userComment: string, userRating: BookRating) {
    comments.value.push({
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Ahat',
      subtitle: userComment,
      bookRating: userRating,
      promotionCount: 0,
      userPromotion: 'user own'
    })
  }

  return {
    comments,
    images,
    selectedImage,
    likeActive,
    cartActive,
    dialogActive,
    addComment
  }
})

