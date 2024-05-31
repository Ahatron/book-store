<template>
  <MyInput @click.stop
    v-model="searchStore.search"
    class="w-100 mb-3 pt-0"
    density="compact"
    :label="'Search ' + searchStore.dialogTab"
    variant="solo"
    hide-details
    single-line
    autofocus
    @click:append-inner="''">
    <template #append-inner>
      <v-btn variant="text"
        class="mr-2"
        density="comfortable"
        icon>
        <v-icon>mdi-magnify</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Search books, authors and publishers</v-tooltip>
      </v-btn>
      <v-btn v-show="searchStore.dialogTab === 'book'"
        @click="searchStore.dialog = false"
        to="/search"
        variant="text"
        density="comfortable"
        icon>
        <v-icon>mdi-tune</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Advanced book search</v-tooltip>
      </v-btn>

    </template>
  </MyInput>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { useAppStore } from '@/stores/app';
import { useSearchStore } from '@/stores/search';
const appStore = useAppStore()
const searchStore = useSearchStore()
</script>