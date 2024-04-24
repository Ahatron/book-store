<template>
  <v-navigation-drawer v-model="appStore.drawer"
    temporary
    location="top"
    class="pb-5 h-auto">
    <v-container class="px-0 px-sm-5 px-md-10 px-lg-15 px-sm-auto d-flex flex-column align-center"
      fluid>
      <v-row class="w-100"
        justify="space-evenly"
        dense>
        <v-col sm="11"
          md="10"
          lg="8">
          <v-list-item class="my-2">
            <h3>Categories</h3>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item v-for="category of appStore.bookCategories"
            :key="category"
            link
            :title="category" />
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';

const appStore = useAppStore()
</script>