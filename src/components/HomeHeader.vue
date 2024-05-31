<template>
  <v-img class="w-100"
    cover
    height="400"
    :src="randomImage()">
    <div class="d-flex flex-column fill-height justify-center align-center text-white"
      style="background-color: rgba(0, 0, 0, 0.3);">
      <div class="d-flex text-shadow-white flex-column justify-center align-center">
        <h1 class="text-h4 font-weight-thin mb-4">
          Mimir
        </h1>
        <h4 class="subheading">
          Chose your book today!
        </h4>
      </div>
    </div>
  </v-img>
</template>

<script setup lang="ts">
// import { computed } from 'vue';
const imagesPath = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png', '6.png']
// const changedPath = computed(randomImagePath)

function randomImage(): string {
  const randomIndex = Math.floor(Math.random() * imagesPath.length);
  const url: string = '../assets/header/' + imagesPath[randomIndex]
  return new URL(url, import.meta.url).href
}
</script>

<style scoped>
.text-shadow-white {
  text-shadow: 0px 0px 20px white;
}
</style>