<template>
  <v-app-bar color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random">
    <template v-slot:image>
      <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="appStore.drawer = !appStore.drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Mimir</v-app-bar-title>

    <v-spacer></v-spacer>

    <template v-if="!xs">
      <v-text-field class="d-sm-flex mr-auto w-33 mb-3"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search books"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="''">
        <template>
          <slot class="px-1"></slot>
        </template>
      </v-text-field>
      <v-spacer></v-spacer>
    </template>

    <v-btn v-else
      icon
      class="d-inline-flex">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>

  </v-app-bar>
</template>
<script setup
  lang="ts">
  import { useAppStore } from '@/store/app';
  import { useDisplay } from 'vuetify'
  const { xs } = useDisplay()
  const appStore = useAppStore()
</script>