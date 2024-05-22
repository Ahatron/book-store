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
            aspect-ratio="0.9"
            width="80"
            cover
            src="../assets/Alpina.png" />
        </v-card>
        <div class="d-flex flex-column mr-2">
          <span class="d-flex text-green-accent-3">New book from</span>

          <v-list-item-title style="font-size: 1.2rem;">Alphina publisher</v-list-item-title>
          <v-spacer />

          <v-list-item-subtitle v-show="isHover">Click to view</v-list-item-subtitle>
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
      </div>
    </div>
  </v-list-item>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const isHover = ref(false)
const appStore = useAppStore()
</script>
