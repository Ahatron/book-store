<template>
  <v-list-item class="px-0 px-sm-4 py-2">
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
        <template v-if="!appStore.isUserAdmin">
          <v-btn class="ma-1"
            @click.stop.prevent="cartActive = !cartActive"
            color="secondary"
            variant="tonal">
            <v-icon v-if="!cartActive">mdi-cart-plus</v-icon>
            <v-icon v-else>mdi-cart-minus</v-icon>
          </v-btn>
          <v-btn class="ma-1"
            @click.stop.prevent="likeActive = !likeActive"
            color="secondary"
            variant="tonal">
            <v-icon v-if="!likeActive"
              color="red">mdi-heart-outline</v-icon>
            <v-icon v-else
              color="red">mdi-heart</v-icon>
          </v-btn>
        </template>

        <v-btn v-else
          to="/authors/1/edit"
          variant="tonal"
          color="grey">
          Edit <v-icon class="ml-2">mdi-pencil</v-icon>
        </v-btn>
      </div>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';


const likeActive = ref(false)
const cartActive = ref(false)
const appStore = useAppStore()
</script>