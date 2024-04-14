<template>
  <Basic>
    <SearchPageDrawer />
    <v-sheet class="pa-4 pt-2 pt-sm-4 mt-4 rounded">
      <div class="d-flex align-center">
        <MyInput class="w-75 mr-2"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search books and authors"
          variant="outlined"
          single-line
          @click:append-inner="''" />
        <v-btn @click="searchStore.drawer = true"
          class="mb-1"
          variant="flat"
          icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </div>

      <div class="d-flex align-center">
        <h3>Found 10</h3>
        <v-spacer />
        <ViewToggle />
      </div>

      <BookView class="mt-2" />
    </v-sheet>
  </Basic>
</template>

<script setup lang="ts">
import Basic from '@/layouts/Basic.vue';
import MyInput from '@/components/UI/MyInput.vue';
import BookView from '@/components/BookView.vue';
import ViewToggle from '@/components/UI/ViewToggle.vue';
import SearchPageDrawer from '@/components/SearchPageDrawer.vue';
import { useSearchStore } from '@/store/search';

const searchStore = useSearchStore()
</script>