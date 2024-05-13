<template>
  <v-navigation-drawer v-model="appStore.drawer"
    temporary
    location="left"
    class="px-2 py-1">

    <template v-slot:prepend>
      <v-list-item to="/users/1"
        lines="two"
        prepend-avatar="../assets/AynRand.jpg"
        title="Ahatron">
        <template #subtitle>
          <span class="d-flex align-center">
            My profile <v-icon style="font-size: small;">mdi-arrow-right</v-icon>
          </span>
        </template>

      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list density="compact"
      nav>
      <!-- <v-list-item prepend-icon="mdi-account"
        title="My Account"></v-list-item> -->
      <v-list-item prepend-icon="mdi-home-city"
        title="Home"
        to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-bookshelf"
        to="/search"
        title="Catalog"></v-list-item>
      <!-- <v-list-item prepend-icon="mdi-heart"
        title="Liked books"></v-list-item>
      <v-list-item prepend-icon="mdi-cart"
        title="Books in cart"></v-list-item>
      <v-list-item prepend-icon="mdi-bell"
        title="Notifications"></v-list-item> -->
      <v-list-item prepend-icon="mdi-star"
        title="Ratings"></v-list-item>
      <v-list-item prepend-icon="mdi-cog"
        title="Settings"></v-list-item>

      <template v-if="appStore.isUserAdmin">
        <v-list-item prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"></v-list-item>
      </template>

    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn @click="appStore.isUserAdmin = !appStore.isUserAdmin"
          variant="flat"
          block>
          Admin toggle
        </v-btn>
        <v-btn @click="appStore.isUserAuth = !appStore.isUserAuth"
          variant="flat"
          block>
          Auth toggle
        </v-btn>
        <v-btn @click="appStore.logout"
          variant="flat"
          color="red-accent-2"
          block>
          Logout
          <v-icon>mdi-exit-run</v-icon>
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';

const appStore = useAppStore()
</script>