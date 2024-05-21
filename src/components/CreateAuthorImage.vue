<template>
  <div class="d-flex justify-center">
    <div class="w-50"
      width="50">
      <v-img v-if="imageURL"
        :src="imageURL"
        class="w-100 rounded-lg"
        height="250"
        cover>
        <v-btn @click.stop="image = null; imageURL = null"
          class="ma-1"
          density="comfortable"
          variant="tonal"
          icon><v-icon color="white">mdi-close</v-icon>
        </v-btn>
      </v-img>
      <v-sheet v-else
        class=" d-flex flex-column align-center justify-center rounded-lg"
        @click="uploadImage"
        height="250">
        <v-icon>mdi-image-plus</v-icon>
        Add image
        <v-file-input v-model="image"
          ref="imageInput"
          @change="showImage"
          class="d-none"
          label="Image input"
          accept="image/*"
          prepend-icon="mdi-image"
          append-icon="mdi-plus"
          variant="filled"></v-file-input>
      </v-sheet>
    </div>
    <p v-if="v$.imageURL.$error"
      class="text-red-darken-2 ml-2">{{ v$.imageURL.$errors[0].$message }}</p>
  </div>
</template>

<script setup lang="ts">
import { useCreateAuthorStore } from '@/stores/create-author';
import { ref } from 'vue';

const imageInput = ref<HTMLInputElement>()
const image = ref<null | any>(null)
const { imageURL, v$ } = useCreateAuthorStore()

function uploadImage() {
  imageInput.value?.click()
}

function showImage() {
  if (image.value) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const target = event.target

      if (target && target.result) {
        imageURL.value = target.result
      }
    };
    reader.readAsDataURL(image.value[0])
  }
}
</script>