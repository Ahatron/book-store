<template>
  <v-col cols="0"
    sm="4"
    md="3"
    class="position-relative">
    <v-sheet class="pa-4 pa-sm-4 pa-md-8 pt-2 pt-sm-4 pt-md-4 rounded position-sticky"
      style="top: 80px; height: 510px; overflow-y: auto;"
      tag="aside">
      <router-view />
    </v-sheet>
  </v-col>
</template>