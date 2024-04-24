<template>
  <MyAppBar />
  <NavDrawer />

  <router-view />

  <v-footer class="py-5"
    color="grey-lighten-2"
    height="150">
    Ahatron Inc. 2024
  </v-footer>
</template>
<script setup lang="ts">
import MyAppBar from '@/components/MyAppBar.vue'
import NavDrawer from '@/components/NavDrawer.vue'
</script>