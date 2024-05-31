<template>
  <BookSectionTabs background-color="black" />
</template>

<script lang="ts" setup>
import BookSectionTabs from '@/components/BookSectionTabs.vue'

const imagePaths = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.png', '6.png']

function randomImagePath() {
  const randomIndex = Math.floor(Math.random() * imagePaths.length);
  return '../assets/header/' + imagePaths[randomIndex];
}
</script>
