<template>
  <div>
    <div class="d-flex justify-space-evenly w-100 mb-2">
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
        class="w-100 mb-4"
        density="comfortable"
        variant="flat"
        color="primary">
        <v-btn class="w"
          value="book"><v-icon>mdi-book</v-icon> Book</v-btn>
        <v-btn value="e-book"><v-icon>mdi-cellphone-text</v-icon>E-Book</v-btn>
      </v-btn-toggle>
      <template v-if="!appStore.isUserAdmin">
        <v-btn @click="bookInfoStore.cartActive = !bookInfoStore.cartActive"
          color="secondary"
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
          color="secondary"
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
      </template>

      <v-btn v-else
        color="grey-darken-1"
        variant="tonal">
        Edit <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script setup lang="ts">
import { useBookInfoStore } from '@/store/book-info';
import { useAppStore } from '@/store/app';

const bookInfoStore = useBookInfoStore()
const appStore = useAppStore()

</script>