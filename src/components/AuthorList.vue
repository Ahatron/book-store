<script setup lang="ts">
import AuthorListItem from '@/components/AuthorListItem.vue'
</script>

<template>
  <v-list class="overflow-auto bg-white">
    <template v-for="n in 10"
      :key="n">
      <AuthorListItem to="/authors/1"
        class="mx-sm-2" />
      <v-divider />
    </template>
  </v-list>
</template>