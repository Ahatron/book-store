<template>
  <v-navigation-drawer class="h-auto"
    v-model="searchStore.drawer"
    :width="smAndUp ? 500 : 300"
    temporary
    location="right">

    <div class="d-flex mb-2">
      <v-btn @click="searchStore.drawer = false"
        flat
        icon>
        <v-icon>mdi-arrow-left</v-icon>
        <v-spacer></v-spacer>

      </v-btn>
    </div>
    <SearchPageFilter class="pa-4 pa-sm-8 pt-sm-4" />
  </v-navigation-drawer>
</template>

<script setup lang="ts">

import { useSearchStore } from '@/store/search';
import { useDisplay } from 'vuetify/lib/framework.mjs';
import SearchPageFilter from '@/components/SearchPageFilter.vue';

const searchStore = useSearchStore()
const { smAndUp } = useDisplay()
</script>