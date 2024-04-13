<template>
  <MyAppBar />
  <NavDrawer />
  <v-main class="bg-grey-lighten-3">
    <Adaptive color="secondary"
      class="h-100">
      <slot>
      </slot>
    </Adaptive>
  </v-main>
  <v-footer class="py-5 elevation-10"
    color="grey-lighten-2"
    height="150">
    Ahatron Inc. 2024
  </v-footer>
</template>
<script setup lang="ts">
import MyAppBar from '@/components/MyAppBar.vue'
import NavDrawer from '@/components/NavDrawer.vue'
import Adaptive from '@/layouts/Adaptive.vue'
</script>