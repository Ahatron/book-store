<template>
  <v-dialog v-model="createBookStore.dialogActive"
    transition="dialog-transition"
    location="center center">
    <div class="mb-3">
      <v-btn rounded
        @click="createBookStore.dialogActive = false"
        variant="tonal">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <v-carousel v-model="createBookStore.selectedImage"
      :show-arrows="xs ? false : 'hover'">
      <v-carousel-item v-for="(src, i) of createBookStore.imagesURL"
        :key="i"
        :src="src"
        :value="i"></v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script setup lang="ts">
import { useCreateBookStore } from '@/store/create-book';
import { ref } from 'vue';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const createBookStore = useCreateBookStore()

const { xs } = useDisplay()

</script>