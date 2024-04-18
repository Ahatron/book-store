<template>
  <div>
    <v-tabs color="primary"
      class="mb-2"
      v-model="tab">
      <v-tab value="one">Popular</v-tab>
      <v-tab value="two">Recommended</v-tab>
      <v-tab value="three">New</v-tab>
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
const values = ref(['one', 'two', 'three'])
</script>
