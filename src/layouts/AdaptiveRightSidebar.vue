<template>
  <router-view name="drawer" />

  <v-main class="d-flex bg-grey-lighten-3">
    <v-container class="px-0 px-sm-5  px-lg-15 px-sm-auto py-0 py-sm-4 d-flex flex-column align-center"
      fluid>
      <v-row class="w-100"
        justify="space-evenly"
        dense>
        <v-col>
          <v-sheet class="pa-2 pa-md-4 pt-2 pt-sm-4 pt-md-4 rounded">
            <router-view />
          </v-sheet>
        </v-col>

        <AdaptiveSidebar v-if="!xs">
          <router-view name="sidebar" />
        </AdaptiveSidebar>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';
import AdaptiveSidebar from '@/components/AdaptiveSidebar.vue';

const { xs } = useDisplay()
</script>