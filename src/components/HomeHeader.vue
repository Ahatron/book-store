<template>
  <v-parallax class="w-100"
    height="400"
    src="../assets/header/1.jpg">
    <div class="d-flex text-white-shadow flex-column fill-height justify-center align-center text-white">
      <h1 class="text-h4 font-weight-thin mb-4">
        Mimir
      </h1>
      <h4 class="subheading">
        Find your book today!
      </h4>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const imagePaths = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png', '6.png']
const changedPath = computed(randomImagePath)

function randomImagePath(): string {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  console.log(imagePaths[randomIndex])
  return '../assets/header/' + imagePaths[randomIndex];
}
</script>

<style scoped>
.text-white-shadow {
  text-shadow: 0px 0px 20px white;
}
</style>