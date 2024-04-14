<template>
  <template v-if="appStore.viewToggle === 'grid'">
    <v-row>
      <v-col class="pa-0 "
        cols="6"
        sm="4"
        md="3"
        xl="2"
        v-for="n in 10"
        :key="n">
        <BookCard class="border-sm rounded-0 ma-1 pa-1" />
      </v-col>
    </v-row>
  </template>
  <BookList v-else
    class="elevation-0 px-sm-5 px-md-15" />
</template>

<script setup lang="ts">
import BookCard from '@/components/BookCard.vue';
import BookList from '@/components/BookList.vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore()
</script>