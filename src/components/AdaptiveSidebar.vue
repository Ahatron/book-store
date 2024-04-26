<template>
  <v-col cols="0"
    sm="5"
    md="4"
    lg="3"
    class="position-relative">
    <v-sheet class="pa-2 pa-sm-3 pa-md-4 pt-2 pt-sm-4 pt-md-4 pb-0 pb-sm-0 rounded position-sticky"
      style="top: 80px; height: 85vh; overflow-y: auto;"
      tag="aside">
      <slot></slot>
    </v-sheet>
  </v-col>
</template>