<template>
  <v-navigation-drawer v-model="appStore.drawer"
    temporary
    location="left"
    class="">

    <template v-slot:prepend>
      <v-list-item lines="two"
        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
        subtitle="Logged in"
        title="Jane Smith"></v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact"
      nav>
      <v-list-item prepend-icon="mdi-account"
        title="My Account"></v-list-item>
      <v-list-item prepend-icon="mdi-home-city"
        title="Home"
        to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-bookshelf"
        to="/search"
        title="Catalog"></v-list-item>
      <v-list-item prepend-icon="mdi-heart"
        title="Liked books"></v-list-item>
      <v-list-item prepend-icon="mdi-cart"
        title="Books in cart"></v-list-item>
      <v-list-item prepend-icon="mdi-bell"
        title="Notifications"></v-list-item>
      <v-list-item prepend-icon="mdi-cog"
        title="Settings"></v-list-item>

      <template v-if="appStore.isUserAdmin">
        <v-list-item prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"></v-list-item>
      </template>

    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

const appStore = useAppStore()
</script>