<template>
  <v-list-item class="px-0 px-sm-4 my-1">
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
      <div @click.prevent>

        <div class="d-flex flex-column align-center">
          <div class=" ml-auto">
            <v-btn class="ma-1"
              variant="flat"
              density="comfortable"
              icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <div class="mb-2">
            <v-btn class="
          ma-1"
              variant="flat"
              density="comfortable"
              icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <span>1 шт</span>
            <v-btn class="ma-1"
              variant="flat"
              density="comfortable"
              icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </div>
          <h4>
            Total: 5000 tg
          </h4>

        </div>
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