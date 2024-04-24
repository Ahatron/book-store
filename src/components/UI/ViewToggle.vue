<template>
  <div class="d-flex justify-end mb-1 mr-1">
    <v-btn-toggle v-model="appStore.viewToggle"
      variant="flat"
      density="comfortable"
      color="primary">
      <v-btn @click="appStore.viewToggle = 'grid'"
        value="grid"
        icon="mdi-view-grid"></v-btn>
      <v-btn @click="appStore.viewToggle = 'list'"
        value="list"
        icon="mdi-view-list"></v-btn>
    </v-btn-toggle>
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store/app';
const appStore = useAppStore()
</script>