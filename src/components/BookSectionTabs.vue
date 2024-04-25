<template>
  <div>
    <v-tabs color="primary"
      class="mb-2"
      v-model="tab">
      <v-tab value="Popular">Popular</v-tab>
      <v-tab value="Recommended">Recommended</v-tab>
      <v-tab value="New">New</v-tab>
      <v-tab value="Stocks">Stocks</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <template v-for="item of values"
        :key="item">
        <v-window-item :value="item">
          <BookView />
        </v-window-item>
      </template>
    </v-window>
  </div>
</template>
<script setup lang="ts">
import BookView from '@/components/BookView.vue';
import { ref } from 'vue';

const tab = ref<null | string>(null)
const values = ref(['Popular', 'Recommended', 'New', 'Stocks'])
</script>
