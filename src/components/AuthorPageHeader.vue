<template>
  <div class=" d-flex flex-column align-center">
    <div class="w-50">
      <v-img class="rounded "
        aspect-ratio="0.8"
        src="@/assets/AynRand.jpg"
        cover></v-img>
    </div>
    <v-card-item class="w-100 align-center">
      <v-card-title class="d-flex justify-center">Ayn Rand</v-card-title>
      <v-card-subtitle class="d-flex justify-center">1905 - 1982</v-card-subtitle>
      <v-card-subtitle class="d-flex justify-center">Subscribers 10000000000</v-card-subtitle>

    </v-card-item>
    <div class="d-flex justify-center ">
      <v-btn @click="subscribed = !subscribed"
        color="blue-accent-2"
        :append-icon="subscribed ? 'mdi-bell-ring' : 'mdi-bell'">
        {{ subscribed ? "Subscribed" : 'Subscribe' }}</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const subscribed = ref(false)
</script>