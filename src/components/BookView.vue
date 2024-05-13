<template>
  <div>

    <div class="d-flex mb-4 ml-4">
      <h3>Found 10</h3>
    </div>


    <BookGrid v-if="appStore.viewToggle === 'grid'"
      class="pa-1 pa-sm-2" />
    <BookList v-else
      class="elevation-0 px-sm-5" />
  </div>
</template>

<script setup lang="ts">

import BookList from '@/components/BookList.vue';
import BookGrid from '@/components/BookGrid.vue'
import { useAppStore } from '@/stores/app';

const appStore = useAppStore()
</script>