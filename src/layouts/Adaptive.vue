<template>
  <v-container class="px-0 px-sm-5 px-md-10 px-lg-15 px-sm-auto d-flex flex-column align-center"
    fluid>
    <v-row class="w-100"
      justify="space-evenly"
      dense>
      <router-view v-if="!xs"
        name="left-sidebar" />

      <v-col>
        <v-sheet class="pa-2 pa-sm-4 pa-md-8 pt-2 pt-sm-4 pt-md-4 rounded">
          <router-view />
        </v-sheet>
      </v-col>

      <router-view v-if="!xs"
        name="right-sidebar" />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { xs } = useDisplay()
</script>
