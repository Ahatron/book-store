<template>
  <div class="my-2"
    @click="dialogActive = true">
    <div class="w-100 mb-2">
      <v-img cover
        rounded="10"
        :src="images[0]"
        @click="selectedImage = 0" />
    </div>
    <div class="d-flex flex-row justify-space-evenly">
      <div class="w-25"
        @click="selectedImage = 1">
        <v-img cover
          rounded="10"
          aspect-ratio="1"
          :src="images[1]" />
      </div>
      <div class="w-25"
        @click="selectedImage = 2">
        <v-img cover
          rounded="10"
          aspect-ratio="1"
          :src="images[2]" />
      </div>
      <div class="w-25 position-relative"
        @click="selectedImage = 3">
        <v-img cover
          rounded="10"
          aspect-ratio="1"
          :src="images[3]" />
        <div v-show="images.length < 5"
          style="background-color: black; color: white; opacity: .8; top:0"
          class="w-100 h-100 d-flex align-center justify-center rounded position-absolute">
          <h3>+{{ images.length - 3 }}</h3>
        </div>
      </div>
    </div>
    <v-dialog v-model="dialogActive"
      transition="dialog-transition"
      location="center center">
      <div>
        <v-btn rounded
          @click="dialogActive = false"
          variant="tonal">
          <v-icon color="white">mdi-arrow-left</v-icon>
        </v-btn>
      </div>

      <v-carousel v-model="selectedImage"
        :vertical-delimiters="xs"
        :show-arrows="xs ? false : 'hover'">
        <v-carousel-item v-for="(src, i) of images"
          :key="i"
          :src="src"
          :value="i"></v-carousel-item>
      </v-carousel>
    </v-dialog>
  </div>
</template>

<script setup
  lang="ts">
  import { ref } from 'vue';
  import { useDisplay } from 'vuetify/lib/framework.mjs';

  defineProps<{ images: string[] }>()

  const dialogActive = ref(false)
  const selectedImage = ref(0)
  const { xs } = useDisplay()
</script>
