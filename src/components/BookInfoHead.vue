<template>
  <div class="d-flex flex-column align-center">
    <BookInfoHeadImages class="w-75"
      :images="images" />

    <v-card-title primary-title>
      Atlas shrugged
    </v-card-title>

    <v-card-subtitle class="mb-3">
      <span class="mr-5">Ayn Rand</span> 1957
    </v-card-subtitle>

    <v-card-subtitle class="mb-3 d-flex align-center">
      <span style="color: black; font-size: large;">5</span>
      <v-icon color="yellow-darken-3">mdi-star</v-icon>
      <span class="ml-2">100 ratings</span>
    </v-card-subtitle>

    <h4 class="border mb-3 rounded d-inline-flex py-1 px-3">
      <span class="mr-3">5000tg</span><v-divider vertical
        class="mr-3" /> Book
      <v-divider vertical
        class="mx-3" /> In stock
    </h4>

    <v-card-actions class="mb-2">
      <v-btn @click="cartActive = !cartActive"
        color="secondary"
        variant="tonal">
        <template v-if="!cartActive">
          <span class="mr-1"> Add to Cart</span>
          <v-icon>mdi-cart-plus</v-icon>
        </template>
        <template v-else>
          <span class="mr-1"> Added</span>
          <v-icon>mdi-cart-minus</v-icon>
        </template>
      </v-btn>

      <v-btn @click="likeActive = !likeActive"
        color="secondary"
        variant="tonal">
        <template v-if="!likeActive">
          <span class="mr-1">Like it</span>
          <v-icon color="red">mdi-heart-outline</v-icon>
        </template>
        <template v-else>
          <span class="mr-1"> Liked</span>
          <v-icon color="red">mdi-heart</v-icon>
        </template>
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script setup
  lang="ts">
  import BookInfoHeadImages from '@/components/BookInfoHeadImages.vue'
  import { ref } from 'vue';

  const images = ref([
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
    'src/assets/atlas-shrugged.jpg',
  ])
  const likeActive = ref(false)
  const cartActive = ref(false)
</script>