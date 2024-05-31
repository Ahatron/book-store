<template>
  <v-card class="pa-2"
    elevation="0"
    link>
    <v-card-item class="pa-0"
      @click="$router.push('/books/1')">
      <div class="d-flex justify-center my-2">
        <div class="w-75">
          <v-img aspect-ratio="0.65"
            cover
            src="../assets/atlas-shrugged.jpg" />
        </div>
      </div>

      <div class="px-2">
        <v-card-title primary-title>
          Atlas shrugged
        </v-card-title>
        <v-card-subtitle>Ayn Rand</v-card-subtitle>

        <span class="d-flex justify-space-between ">
          <span class="d-flex">5<v-icon color="yellow">mdi-star</v-icon></span>
          <h4>5000тг</h4>
        </span>
      </div>

    </v-card-item>
    <v-card-actions class="d-flex px-0"
      @click.stop>
      <template v-if="!appStore.isUserAdmin">
        <v-btn @click.stop="cartActive = !cartActive"
          class="px-0"
          style="width: 45%"
          color="accent"
          variant="tonal">
          <v-icon v-if="!cartActive">mdi-cart-plus</v-icon>
          <v-icon v-else>mdi-cart-minus</v-icon>
        </v-btn>
        <v-spacer />
        <v-btn @click.stop="likeActive = !likeActive"
          class="px-0"
          style="width: 45%"
          color="accent"
          variant="tonal">
          <v-icon v-if="!likeActive"
            color="red">mdi-heart-outline</v-icon>
          <v-icon v-else
            color="red">mdi-heart</v-icon>
        </v-btn>
      </template>

      <v-btn v-else
        to="/books/1/edit"
        variant="tonal"
        color="grey">
        Edit <v-icon class="ml-2">mdi-pencil</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const likeActive = ref(false)
const cartActive = ref(false)

const appStore = useAppStore()
</script>

<style scoped>
.v-btn--size-default {
  min-width: 40px;
}
</style>