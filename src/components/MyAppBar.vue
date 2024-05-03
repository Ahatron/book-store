<template>
  <v-app-bar color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="appStore.drawer = !appStore.drawer"></v-app-bar-nav-icon>
      <v-tooltip activator="parent"
        location="bottom">Catalog</v-tooltip>
    </template>

    <v-app-bar-title @click="$router.push('/')"
      class="d-inline-flex cursor-pointer "
      text="Mimir">
      <v-tooltip class="d-flex"
        activator="parent"
        location="bottom">Home page</v-tooltip>
    </v-app-bar-title>

    <v-spacer v-show="!xs"></v-spacer>

    <SearchDialog />

    <template #append>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Notifications</v-tooltip>
      </v-btn>

      <template v-if="appStore.isUserAuth">
        <template v-if="!appStore.isUserAdmin">
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
            <v-tooltip activator="parent"
              location="bottom">Liked books</v-tooltip>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-cart</v-icon>
            <v-tooltip activator="parent"
              location="bottom">Books for shopping</v-tooltip>
          </v-btn>
        </template>

        <template v-else>
          <v-btn icon
            to="/books/create">
            <v-icon>mdi-book-plus</v-icon>
            <v-tooltip activator="parent"
              location="bottom">Create new book</v-tooltip>
          </v-btn>

          <v-btn icon
            to="/authors/create">
            <v-icon>mdi-account-plus</v-icon>
            <v-tooltip activator="parent"
              location="bottom">Create new author</v-tooltip>
          </v-btn>
        </template>


        <v-btn to="/users/1"
          icon>
          <v-icon>mdi-account</v-icon>
          <v-tooltip activator="parent"
            location="bottom">Your profile</v-tooltip>
        </v-btn>
      </template>

      <v-btn v-else
        to="/login"
        class="ml-2"
        variant="flat"
        color="accent"
        append-icon="mdi-login">Login
        <v-tooltip activator="parent"
          location="bottom">Login or registration</v-tooltip>
      </v-btn>
    </template>
  </v-app-bar>
</template>
<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import SearchDialog from '@/components/SearchDialog.vue'
import { useAppStore } from '@/stores/app';
import { useSearchStore } from '@/stores/search';
import { useDisplay } from 'vuetify'
const { xs } = useDisplay()
const appStore = useAppStore()
const searchStore = useSearchStore()
</script>