<template>
  <v-dialog v-model="bookInfoStore.dialogActive"
    transition="dialog-transition"
    location="center center">
    <div class="mb-3">
      <v-btn rounded
        @click="bookInfoStore.dialogActive = false"
        variant="tonal">
        <v-icon color="white">mdi-arrow-left</v-icon>
      </v-btn>
    </div>

    <v-carousel v-model="selectedImage"
      :show-arrows="xs ? false : 'hover'">
      <v-carousel-item v-for="(src, i) of bookInfoStore.images"
        :key="i"
        :src="src"
        :value="i"></v-carousel-item>
    </v-carousel>
  </v-dialog>
</template>

<script setup
  lang="ts">
  import { useBookInfoStore } from '@/stores/book-info';
  import { ref } from 'vue';
  import { useDisplay } from 'vuetify/lib/framework.mjs';

  const bookInfoStore = useBookInfoStore()

  const { xs } = useDisplay()
  const selectedImage = ref(0)

</script>