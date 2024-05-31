<template>
  <div>
    <v-row align-content="center"
      class="mb-2"
      align-center
      no-gutters>
      <v-col v-for="(src, i) in createBookStore.imagesURL"
        :key="i"
        @click="createBookStore.showCarousel(i)"
        class="pa-1"
        cols="4"
        sm="3">
        <v-img :src="src"
          class="w-100 rounded-lg"
          height="150"
          cover>
          <v-btn @click.stop="createBookStore.removeImage(i)"
            class="ma-1"
            density="comfortable"
            variant="tonal"
            icon><v-icon color="white">mdi-close</v-icon></v-btn>
        </v-img>
      </v-col>
      <v-col cols="4"
        sm="3"
        class="pa-1">
        <v-sheet class=" d-flex flex-column align-center justify-center rounded-lg"
          @click="uploadImages"
          height="150"
          border>
          <v-icon>mdi-image-plus</v-icon>
          Add image
          <v-file-input v-model="images"
            ref="imageInput"
            @change="showImages"
            class="d-none"
            label="Image input"
            accept="image/*"
            prepend-icon="mdi-image"
            append-icon="mdi-plus"
            variant="filled"
            multiple></v-file-input>
        </v-sheet>
      </v-col>
    </v-row>
    <p v-if="v$.imagesURL.$error"
      class="text-red-darken-2 ml-2">{{ v$.imagesURL.$errors[0].$message }}</p>
    <CreateBookImagesCarousel />
  </div>
</template>

<script setup lang="ts">
import CreateBookImagesCarousel from '@/components/CreateBookImagesCarousel.vue';
import { useCreateBookStore } from '@/stores/create-book';
import { ref } from 'vue';

const createBookStore = useCreateBookStore()
const { v$ } = createBookStore

const imageInput = ref<HTMLInputElement | null>(null)
const images = ref<File[]>([])


function uploadImages() {
  if (imageInput.value) {
    imageInput.value.click()
  }
}

function showImages() {
  if (images.value && images.value.length > 0) {

    for (const image of images.value) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const target = event.target

        if (target && target.result) {
          createBookStore.imagesURL.push(target.result)
        }
      };
      reader.readAsDataURL(image)
    }
  }
}
</script>