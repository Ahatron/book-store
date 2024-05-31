<template>
  <div class="d-flex flex-column align-center">
    <BookInfoHeadImages class="w-50" />

    <v-card-title primary-title>
      Atlas shrugged
    </v-card-title>

    <v-card-subtitle class="d-flex align-center">
      <router-link to="/authors/1"
        class="mr-3 text-grey-darken-1">Ayn Rand</router-link>
      <span class="mr-5">1957</span>
      <span class="d-flex"
        style="color: black; font-size: large;">{{ bookInfoStore.rating }}
        <v-icon color="yellow-darken-3">mdi-star</v-icon>
      </span>

      <span class="ml-2">100 ratings</span>
    </v-card-subtitle>

    <v-card-subtitle class="mb-3 d-flex align-center">
    </v-card-subtitle>
    <div class="d-flex align-center mb-2">
      <h3 class="mr-3">20$</h3>

      <span v-if="bookInfoStore.inStock"
        class="text-green d-flex">
        <v-icon>mdi-check</v-icon>
        In stock
      </span>
      <span v-else
        class="text-red d-flex">
        <v-icon>mdi-close</v-icon>
        Out of stock
      </span>
    </div>

    <v-card-actions class="d-flex flex-column mb-2 w-100">
      <v-btn-toggle v-model="bookInfoStore.formatToggle"
        class="mb-4"
        density="comfortable"
        variant="tonal"
        color="accent">
        <v-btn value="book"><v-icon class="mr-1">mdi-book</v-icon> Book</v-btn>
        <v-btn value="e-book"><v-icon class="mr-1">mdi-cellphone-text</v-icon>E-Book</v-btn>
      </v-btn-toggle>
      <div v-if="!appStore.isUserAdmin">
        <v-btn @click="bookInfoStore.cartActive = !bookInfoStore.cartActive"
          color="accent"
          variant="tonal">
          <template v-if="!bookInfoStore.cartActive">
            <span class="mr-1"> Add to Cart</span>
            <v-icon>mdi-cart-plus</v-icon>
          </template>
          <template v-else>
            <span class="mr-1"> Added</span>
            <v-icon>mdi-cart-minus</v-icon>
          </template>
        </v-btn>

        <v-btn @click="bookInfoStore.likeActive = !bookInfoStore.likeActive"
          color="accent"
          variant="tonal">
          <template v-if="!bookInfoStore.likeActive">
            <span class="mr-1">Like it</span>
            <v-icon color="red">mdi-heart-outline</v-icon>
          </template>
          <template v-else>
            <span class="mr-1"> Liked</span>
            <v-icon color="red">mdi-heart</v-icon>
          </template>
        </v-btn>
      </div>

      <v-btn v-else
        to="/books/1/edit"
        color="grey-darken-1"
        variant="tonal">
        Edit <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script setup lang="ts">
import BookInfoHeadImages from '@/components/BookInfoHeadImages.vue'
import { useAppStore } from '@/stores/app';
import { useBookInfoStore } from '@/stores/book-info';

const bookInfoStore = useBookInfoStore()
const appStore = useAppStore()
</script>