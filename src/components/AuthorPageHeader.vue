<template>
  <div class=" d-flex flex-column align-center">
    <div class="w-50">
      <v-img class="rounded "
        aspect-ratio="0.8"
        src="@/assets/AynRand.jpg"
        cover></v-img>
    </div>
    <span class="w-100 d-flex flex-column align-center my-3">
      <h3 class="mb-2">Ayn Rand</h3>
      <v-card-subtitle class="mb-1">1905 - 1982</v-card-subtitle>
      <v-card-subtitle class="">Subscribers 10K</v-card-subtitle>
    </span>
    <div class="d-flex justify-center ">
      <v-btn v-if="!appStore.isUserAdmin"
        @click="subscribed = !subscribed"
        color="accent"
        :append-icon="subscribed ? 'mdi-bell-ring' : 'mdi-bell'">
        {{ subscribed ? "Subscribed" : 'Subscribe' }}</v-btn>
      <v-btn v-else
        to="/authors/1/edit"
        variant="tonal"
        color="grey">
        Edit <v-icon class="ml-2">mdi-pencil</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import { ref } from 'vue';

const subscribed = ref(false)
const appStore = useAppStore()
</script>