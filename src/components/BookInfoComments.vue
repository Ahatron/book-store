<template>
  <div>
    <BookInfoCommentsCreate />
    <v-divider />

    <div class="mb-3 ml-4 d-flex align-center">
      <v-select class="w-25"
        variant="outlined"
        :items="sortBy"
        density="comfortable"
        label="Sort by"
        v-model="selectedSort"></v-select>
      <v-spacer></v-spacer>
      <v-btn class="mr-4"
        elevation="0"
        variant="tonal"
        size="small"
        color="gray">Rules</v-btn>
    </div>
    <v-divider />


    <v-list lines="three"
      item-props>
      <template v-for="item of bookInfoStore.comments"
        :key="item.title">

        <v-list-item class="py-3"
          :prepend-avatar="item.prependAvatar">

          <v-list-item-title class="mb-2">
            <h4 class="d-inline mr-2">
              {{ item.title }}
            </h4>
            <v-list-item-subtitle class="d-inline">
              last week
            </v-list-item-subtitle>
            <div class="d-flex mx-1">
              <v-icon v-for="n in 5"
                :key="n"
                color="yellow-darken-3"
                size="15">
                {{ n > item.bookRating ? "mdi-star-outline" : 'mdi-star' }}
              </v-icon>
            </div>
          </v-list-item-title>
          <p style="font-size: .9rem;"
            class="d-inline-flex">
            {{ item.subtitle }}

          </p>

          <template #append>
            <CommentPromotion :item="item" />
          </template>
        </v-list-item>
        <v-divider />
      </template>

    </v-list>
  </div>
</template>

<script setup lang="ts">
import BookInfoCommentsCreate from '@/components/BookInfoCommentsCreate.vue'
import CommentPromotion from '@/components/CommentPromotion.vue'
import { useBookInfoStore } from '@/store/book-info'
import { ref } from 'vue'


const bookInfoStore = useBookInfoStore()
const sortBy = ref(['Newest', 'Oldest', 'Popular'])
const selectedSort = ref('Newest')

</script>