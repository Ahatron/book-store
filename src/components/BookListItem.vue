<script setup lang="ts">
import { ref } from 'vue';


const likeActive = ref(false)
const cartActive = ref(false)
</script>

<template>
  <v-list-item class="px-0 px-sm-4 my-1"
    color="primary">
    <template #default>
      <div class="d-flex">
        <v-card elevation="0"
          variant="text"
          class="mr-4">
          <v-img rounded="10"
            aspect-ratio="0.6"
            width="80"
            cover
            src="../assets/atlas-shrugged.jpg" />
        </v-card>
        <div class="d-flex flex-column justify-space-around mr-2">
          <div>
            <v-list-item-title>Atlas shrugged</v-list-item-title>
            <v-list-item-subtitle class="mb-1">Ayn Rand</v-list-item-subtitle>
            <span class="d-flex">5<v-icon class="ml-1"
                color="yellow">mdi-star</v-icon></span>
          </div>
          <span class="">
            <h4>5000тг</h4>


          </span>
        </div>

      </div>
    </template>

    <template #append>
      <div class="d-flex flex-column flex-sm-row">
        <v-btn class="ma-1"
          @click="cartActive = !cartActive"
          color="secondary"
          variant="tonal">
          <v-icon v-if="!cartActive">mdi-cart-plus</v-icon>
          <v-icon v-else>mdi-cart-minus</v-icon>
        </v-btn>
        <v-btn class="ma-1"
          @click="likeActive = !likeActive"
          color="secondary"
          variant="tonal">
          <v-icon v-if="!likeActive"
            color="red">mdi-heart-outline</v-icon>
          <v-icon v-else
            color="red">mdi-heart</v-icon>
        </v-btn>
      </div>
    </template>
  </v-list-item>
</template>