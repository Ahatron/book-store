<template>
  <v-navigation-drawer class="h-auto"
    v-model="searchStore.drawer"
    :width="smAndUp ? 500 : 300"
    temporary
    location="right">
    <div class="d-flex pa-2">
      <v-btn @click="searchStore.drawer = false"
        density="compact"
        flat
        icon>
        <v-icon>mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>
      </v-btn>
    </div>
    <SearchBookFilter class="px-4" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import { useSearchStore } from '@/stores/search.ts';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import SearchBookFilter from '@/components/SearchBookFilter.vue';

const searchStore = useSearchStore()
const { smAndUp } = useDisplay()
</script>