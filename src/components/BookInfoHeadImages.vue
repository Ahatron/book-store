<template>
  <div class="my-2"
    @click="bookInfoStore.dialogActive = true">
    <v-row dense>
      <v-col v-for="(source, i) in ImagesForShow"
        :key="source"
        :cols="i === 0 ? 12 : 4"
        class="">
        <div class="position-relative cursor-pointer"
          @click="bookInfoStore.selectedImage = i">
          <v-img cover
            rounded="10"
            :src="source" />
          <div v-if="bookInfoStore.images.length > 4 && i === 3"
            style="background-color: black; color: white; opacity: .8; top:0"
            class="w-100 h-100 d-flex align-center justify-center rounded position-absolute">
            <h3>+{{ bookInfoStore.images.length - 3 }}</h3>
          </div>
        </div>
      </v-col>
    </v-row>
    <BookImagesCarousel />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BookImagesCarousel from '@/components/BookImagesCarousel.vue'
import { useBookInfoStore } from '@/store/book-info'

const bookInfoStore = useBookInfoStore()
const ImagesForShow = ref(bookInfoStore.images.slice(0, 4))
</script>
