<template>
  <div class="d-flex flex-column pa-4 pt-0">
    <div class="d-flex">
      <div class="mt-6 mr-4">
        <v-avatar size="40"
          variant="tonal"
          color="gray">
          <v-icon>mdi-account</v-icon>
        </v-avatar>
      </div>
      <div class="w-100">
        <v-textarea v-model="comment"
          class="d-flex flex-column"
          label="Your comment"
          name="name"
          textarea
          variant="outlined"
          rows="3" />

        <div class="d-flex align-center mb-5 ml-4">
          <span class="mr-3">Your rating:</span>
          <v-rating v-model="rating"
            size="xx-small"
            hover
            color="yellow-darken-3"></v-rating>
        </div>
      </div>
    </div>

    <v-btn @click="bookInfoStore.addComment(comment, rating)"
      class="align-self-end"
      color="secondary"
      variant="tonal"
      text="send"></v-btn>
  </div>
</template>

<script setup lang="ts">
import { useBookInfoStore, BookRating } from '@/store/book-info';
import { ref } from 'vue';

const bookInfoStore = useBookInfoStore()
const comment = ref('')
const rating = ref < BookRating > (5)
</script>