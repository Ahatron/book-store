<template>
  <div>
    <v-tabs color="primary"
      class="mb-4"
      v-model="tab">
      <v-tab value="Popular">Popular</v-tab>
      <v-tab value="Recommended">Recommended</v-tab>
      <v-tab value="New">New</v-tab>
      <v-tab value="Stocks">Stocks</v-tab>
    </v-tabs>

    <div class="d-flex align-center">
      <SortBySelect class="mr-4 w-50" />
      <v-spacer />
      <ViewToggle />
    </div>

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
import SortBySelect from '@/components/UI/SortBySelect.vue';
import ViewToggle from '@/components/UI/ViewToggle.vue';
import BookView from '@/components/BookView.vue';
import { ref } from 'vue';

const tab = ref<null | string>(null)
const values = ref(['Popular', 'Recommended', 'New', 'Stocks'])
</script>
