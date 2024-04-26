<template>
  <v-container class="px-0 px-sm-5 px-md-10 px-lg-15 px-sm-auto py-2 py-sm-4 d-flex flex-column align-center py-0"
    fluid>
    <v-row class="w-100"
      justify="space-evenly"
      dense>
      <v-col sm="11"
        md="10"
        lg="8">
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>