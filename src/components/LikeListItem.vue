<template>
  <v-list-item @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    class="px-0 px-sm-4 py-2">
    <div class="d-flex justify-space-between">
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

      <div @click.prevent
        class="d-flex flex-column align-items-end">
        <v-btn v-if="isHover"
          class="ma-1 align-self-end"
          variant="flat"
          density="comfortable"
          icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn class="ma-1"
          @click.stop.prevent="cartActive = !cartActive"
          color="secondary"
          variant="tonal">
          <template v-if="!cartActive">
            Add to cart
            <v-icon class="ml-2">mdi-cart-plus</v-icon>
          </template>
          <template v-else>
            Remove from cart
            <v-icon class="ml-2">mdi-cart-minus</v-icon>
          </template>
        </v-btn>
      </div>
    </div>
  </v-list-item>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const isHover = ref(false)

const cartActive = ref(false)
const appStore = useAppStore()
</script>