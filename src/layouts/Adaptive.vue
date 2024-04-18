<template>
  <v-container class="px-0 px-sm-5 px-md-10 px-lg-15 px-sm-auto d-flex flex-column align-center"
    fluid>
    <v-row class="w-100"
      dense
      justify="space-evenly">
      <v-col>
        <v-sheet class="pa-2 pa-sm-4 pa-md-8 pt-2 pt-sm-4 pt-md-4 rounded">
          <slot></slot>
        </v-sheet>
      </v-col>
      <v-col v-if="!xs"
        cols="0"
        sm="4"
        md="3"
        class="position-relative">
        <v-sheet class="pa-4 pa-sm-4 pa-md-8 pt-2 pt-sm-4 pt-md-4 rounded position-sticky"
          style="top: 80px; height: 510px; overflow-y: auto;"
          tag="aside">
          <slot name="sidebar"></slot>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { xs } = useDisplay()
</script>
