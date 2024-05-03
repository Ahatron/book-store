<template>
  <h2 class="mb-2">Cart page</h2>

  <v-form @submit.prevent
    class="px-2">
    <BookView />

  </v-form>
</template>

<script setup lang="ts">
import BookView from '@/components/BookView.vue';
</script>