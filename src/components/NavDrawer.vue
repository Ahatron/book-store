<template>
  <v-navigation-drawer v-model="appStore.drawer"
    temporary
    location="top"
    class="pb-5 h-auto">
    <Adaptive>

      <v-list-item class="my-2">
        <h3>Categories</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="category of appStore.bookCategories"
        :key="category"
        link
        :title="category"></v-list-item>
    </Adaptive>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import Adaptive from '@/layouts/Adaptive.vue';

const appStore = useAppStore()
</script>