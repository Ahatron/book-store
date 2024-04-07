<template>
  <MyAppBar />
  <NavDrawer />
  <v-main>
    <Adaptive>
      <slot>
      </slot>
    </Adaptive>
  </v-main>
</template>
<script setup
  lang="ts">
  import MyAppBar from '@/components/MyAppBar.vue'
  import NavDrawer from '@/components/NavDrawer.vue'
  import Adaptive from '@/layouts/Adaptive.vue'
</script>