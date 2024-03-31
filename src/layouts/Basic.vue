<template>
  <MyAppBar />
  <v-main>
    <v-navigation-drawer v-model="appStore.drawer"
      temporary
      location="top">
      <v-list-item>
        <h3>Каталог</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link
        title="List Item 1"></v-list-item>
      <v-list-item link
        title="List Item 2"></v-list-item>
      <v-list-item link
        title="List Item 3"></v-list-item>
    </v-navigation-drawer>
    <slot></slot>
  </v-main>
</template>
<script setup
  lang="ts">
  import MyAppBar from '@/components/MyAppBar.vue'
  import { useAppStore } from '@/store/app';

  const appStore = useAppStore()
</script>