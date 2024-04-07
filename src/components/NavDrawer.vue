<template>
  <v-navigation-drawer v-model="appStore.drawer"
    temporary
    location="top"
    class="pb-5 h-auto">
    <Adaptive>

      <v-list-item class="my-2">
        <h3>Categories</h3>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item v-for="category of bookCategories"
        :key="category.id"
        link
        :title="category.name"></v-list-item>
    </Adaptive>
  </v-navigation-drawer>
</template>

<script setup
  lang="ts">
  import { useAppStore } from '@/store/app';
  import Adaptive from '@/layouts/Adaptive.vue';

  const appStore = useAppStore()
  const bookCategories = [
    { id: 1, name: 'Романы' },
    { id: 2, name: 'Фантастика' },
    { id: 3, name: 'Детективы' },
    { id: 4, name: 'Фэнтези' },
    { id: 5, name: 'Научная литература' },
    { id: 6, name: 'Биографии' },
    { id: 7, name: 'Поэзия' },
    // Добавьте здесь другие категории, если необходимо
  ];
</script>