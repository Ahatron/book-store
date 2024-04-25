<script setup lang="ts">
import PublisherListItem from '@/components/PublisherListItem.vue'
</script>

<template>
  <v-list class="overflow-auto bg-white">
    <template v-for="n in 10"
      :key="n">
      <PublisherListItem to="/publishers/1"
        class="mx-sm-2" />
      <v-divider />
    </template>
  </v-list>
</template>