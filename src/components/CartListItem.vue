<template>
  <v-list-item @mouseenter="isHover = true"
    @mouseleave="isHover = false">
    <template #default>
      <div class="d-flex w-100">
        <v-card elevation="0"
          variant="text"
          class="mr-4">
          <v-img rounded="10"
            aspect-ratio="0.6"
            width="100"
            cover
            src="../assets/atlas-shrugged.jpg" />
        </v-card>
        <div class="d-flex flex-column justify-space-around mr-2 w-50">
          <div>
            <v-list-item-title class="overflow-hidden"
              style="white-space: nowrap; text-overflow: ellipsis; width: auto;">
              Atlas shrugged
            </v-list-item-title>
            <v-list-item-subtitle>Ayn Rand</v-list-item-subtitle>
            <span class="d-flex mt-1">5<v-icon class="ml-1"
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
          <div class="mb-4 ml-auto">
            <v-btn @click="liked = !liked"
              class="ma-1 mr-4"
              variant="flat"
              density="comfortable"
              icon>
              <v-icon v-if="liked"
                color="red-accent-1">mdi-heart</v-icon>
              <v-icon v-else
                color="red-accent-1">mdi-heart-outline</v-icon>
            </v-btn>
            <v-btn v-if="isHover"
              class="ma-1"
              variant="flat"
              density="comfortable"
              icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <!-- <div v-else
              class="my-10"></div> -->
          </div>
          <div class="mb-3">
            <v-btn @click="count += 1"
              class="ma-1"
              variant="flat"
              density="comfortable"
              icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <span>{{ count }} шт</span>
            <v-btn @click="count === 1 ? false : count -= 1"
              class="ma-1"
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


const count = ref(1)
const isHover = ref(false)
const liked = ref(false)
const appStore = useAppStore()
</script>