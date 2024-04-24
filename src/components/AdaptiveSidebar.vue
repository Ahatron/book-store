<template>
  <v-col cols="0"
    sm="5"
    md="4"
    lg="3"
    class="position-relative">
    <v-sheet class="pa-4 pa-sm-4 pa-md-8 pt-2 pt-sm-4 pt-md-4 rounded position-sticky"
      style="top: 80px; height: 510px; overflow-y: auto;"
      tag="aside">
      <slot></slot>
    </v-sheet>
  </v-col>
</template>