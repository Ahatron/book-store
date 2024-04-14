<template>
  <v-app-bar color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="appStore.drawer = !appStore.drawer"></v-app-bar-nav-icon>
      <v-tooltip activator="parent"
        location="bottom">Categories</v-tooltip>
    </template>

    <v-app-bar-title>Mimir</v-app-bar-title>

    <v-spacer v-show="!xs"></v-spacer>

    <template v-if="!xs">
      <MyInput class="mr-md-15 w-25 mb-3"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search books and authors"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="''" />
      <v-spacer></v-spacer>
    </template>
    <v-btn v-else
      icon
      class="d-inline-flex">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <template v-if="appStore.isUserAuth">
      <v-btn v-if="!appStore.isUserAdmin"
        icon>
        <v-icon>mdi-heart</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Liked books</v-tooltip>
      </v-btn>

      <v-btn v-if="!appStore.isUserAdmin"
        icon>
        <v-icon>mdi-cart</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Books for shopping</v-tooltip>
      </v-btn>

      <v-btn v-if="appStore.isUserAdmin"
        icon>
        <v-icon>mdi-book-plus</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Create new book</v-tooltip>
      </v-btn>

      <v-btn v-if="appStore.isUserAdmin"
        icon>
        <v-icon>mdi-account-plus</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Create new author</v-tooltip>
      </v-btn>

      <v-btn class="ml-2"
        icon>
        <v-icon>mdi-account</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Your profile</v-tooltip>
      </v-btn>
    </template>

    <v-btn v-else
      class="ml-2"
      variant="flat"
      color="accent"
      append-icon="mdi-login">Login</v-btn>

  </v-app-bar>
</template>
<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { useAppStore } from '@/store/app';
import { useDisplay } from 'vuetify'
const { xs } = useDisplay()
const appStore = useAppStore()

</script>