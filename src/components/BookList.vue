<script setup
  lang="ts">
  import BookListItem from '@/components/BookListItem.vue'
</script>

<template>
  <v-card class="px-3">
    <v-list>
      <template v-for="n in 10"
        :key="n">
        <book-list-item class="mx-sm-2" />
        <v-divider />
      </template>
    </v-list>
  </v-card>
</template>
