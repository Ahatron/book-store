<template>
  <div>
    <div class="d-flex align-center">
      <MyInput class="w-75 mr-2 mb-2"
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
import { ref } from 'vue';

const { xs } = useDisplay()
const searchStore = useSearchStore()


</script>