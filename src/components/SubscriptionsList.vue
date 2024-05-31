<template>
  <div>
    <v-tabs color="primary"
      class="mb-2 w-100"
      density="compact"
      fixed-tabs
      v-model="tab">
      <v-tab value="authors">Authors</v-tab>
      <v-tab @click.stop
        value="publishers">Publishers</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item value="authors">
        <AuthorList />
      </v-window-item>
      <v-window-item value="publishers">
        <PublisherList />
      </v-window-item>
    </v-window>
  </div>
</template>

<script setup lang="ts">
import AuthorList from '@/components/AuthorList.vue';
import PublisherList from '@/components/PublisherList.vue';


const tab = ref<'authors' | 'publishers'>('authors')
</script>