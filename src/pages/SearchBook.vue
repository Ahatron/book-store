<template>
  <div>
    <div class="d-flex flex-column">
      <h3 class="ml-4 mb-1">Advanced search books</h3>

      <div class="d-flex justify-center align-center">
        <MyInput class="mr-2 mb-2"
          v-model="searchStore.search"
          append-inner-icon="mdi-magnify"
          density="compact"
          label="Search books"
          variant="outlined"
          hide-details
          single-line
          autofocus
          @click:append-inner="''" />
        <v-btn @click="searchStore.drawer = true"
          v-show="xs"
          density="comfortable"
          class="mt-2 mr-1"
          variant="flat"
          icon>
          <v-icon>mdi-filter</v-icon>
        </v-btn>
      </div>
      <SortBySelect class="mb-4" />

    </div>
    <BookView />
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import BookView from '@/components/BookView.vue';
import { useSearchStore } from '@/stores/search';
import { useDisplay } from 'vuetify';
import SortBySelect from '@/components/UI/SortBySelect.vue';

const { xs } = useDisplay()
const searchStore = useSearchStore()
</script>