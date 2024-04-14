<template>
  <v-sheet class="pa-4 pa-sm-8 pt-2 pt-sm-2"
    rounded="5">

    <v-tabs color="primary"
      class="mb-2"
      v-model="tab">
      <v-tab value="one">Popular</v-tab>
      <v-tab value="two">Recommended</v-tab>
      <v-tab value="three">New</v-tab>
    </v-tabs>

    <ViewToggle />

    <v-window v-model="tab">
      <template v-for="item of values"
        :key="item">
        <v-window-item :value="item">
          <BookView />
        </v-window-item>
      </template>
    </v-window>

  </v-sheet>
</template>
<script setup lang="ts">
import ViewToggle from '@/components/UI/ViewToggle.vue';
import BookView from '@/components/BookView.vue';
import { ref } from 'vue';

const tab = ref<null | string>(null)
const values = ref(['one', 'two', 'three'])
</script>
