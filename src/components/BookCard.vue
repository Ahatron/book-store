<script setup
  lang="ts">
  import { ref } from 'vue';


  const likeActive = ref(false)
  const cartActive = ref(false)
</script>

<template>
  <v-card elevation="1">
    <v-card-item class="py-2 px-4">
      <div class="d-flex justify-center my-2">
        <div class="w-75">
          <v-img aspect-ratio="0.65"
            cover
            src="../assets/atlas-shrugged.jpg" />
        </div>
      </div>

      <v-card-title primary-title>
        Atlas shrugged
      </v-card-title>
      <v-card-subtitle>Ayn Rand</v-card-subtitle>

      <span class="d-flex justify-space-between ">
        <span class="d-flex">5<v-icon color="yellow">mdi-star</v-icon></span>
        <h4>5000тг</h4>
      </span>
      <v-card-actions>
        <v-spacer />
        <v-btn size="small"
          @click="cartActive = !cartActive"
          color="secondary"
          variant="tonal">
          <v-icon v-if="!cartActive">mdi-cart-plus</v-icon>
          <v-icon v-else>mdi-cart-minus</v-icon>
        </v-btn>
        <v-btn size="small"
          @click="likeActive = !likeActive"
          color="secondary"
          variant="tonal">
          <v-icon v-if="!likeActive"
            color="red">mdi-heart-outline</v-icon>
          <v-icon v-else
            color="red">mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-item>

  </v-card>
</template>