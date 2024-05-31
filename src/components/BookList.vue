<script setup lang="ts">
import BookListItem from '@/components/BookListItem.vue'
</script>

<template>
  <v-list class="overflow-auto bg-white">
    <template v-for="n in 10"
      :key="n">
      <BookListItem to="/books/1"
        class="mx-sm-2" />
      <v-divider />
    </template>
  </v-list>
</template>
