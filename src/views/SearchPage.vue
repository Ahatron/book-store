<template>
  <div>
    <div class="d-flex align-center">
      <MyInput class="w-75 mr-2"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search books and authors"
        variant="outlined"
        single-line
        @click:append-inner="''" />
      <v-btn @click="searchStore.drawer = true"
        v-show="xs"
        class="mb-1"
        variant="flat"
        icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>
    </div>

    <BookView />
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import BookView from '@/components/BookView.vue';
import { useSearchStore } from '@/store/search';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { xs } = useDisplay()
const searchStore = useSearchStore()


</script>