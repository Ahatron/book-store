<script setup lang="ts">
import BookListItem from '@/components/BookListItem.vue'
</script>

<template>
  <v-card class="px-3">
    <v-list>
      <template v-for="n in 10"
        :key="n">
        <book-list-item to="/books/1"
          class="mx-sm-2" />
        <v-divider />
      </template>
    </v-list>
  </v-card>
</template>
