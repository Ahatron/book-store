<template>
  <v-app>
    <Basic>
      <template #drawer>
        <router-view name="drawer" />
      </template>

      <router-view />
    </Basic>
  </v-app>
</template>

<script setup lang="ts">
// import Home from '@/views/Home.vue';
// import BookInfo from '@/views/BookInfo.vue';
// import AuthPage from '@/views/AuthPage.vue';
// import LoginPage from '@/views/LoginPage.vue';
// import CreateBook from '@/views/CreateBook.vue';
// import AuthorPage from '@/views/AuthorPage.vue';
// import CreateAuthor from '@/views/CreateAuthor.vue';
// import SearchPage from '@/views/SearchPage.vue';
// import CartPage from '@/views/CartPage.vue'
import Basic from '@/layouts/Basic.vue';
</script>

<style>
body {
  background-color: black;
}
</style>
