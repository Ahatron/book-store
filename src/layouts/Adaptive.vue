<template>
  <router-view name="drawer" />

  <v-main class="d-flex bg-grey-lighten-3">
    <AdaptiveContainer>
      <v-sheet class="pa-2 pa-sm-4 pa-md-8 pt-2 pt-sm-4 pt-md-4 rounded">
        <RouterView />
      </v-sheet>
    </AdaptiveContainer>
  </v-main>

</template>

<script setup lang="ts">
import AdaptiveContainer from '@/components/AdaptiveContainer.vue';
</script>
