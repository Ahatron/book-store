<template>
  <div class="d-flex px-2 px-sm-5 pt-2">
    <div class="mr-2 mr-sm-5">
      <v-img class="rounded "
        aspect-ratio="0.8"
        width="70"
        src="@/assets/Alpina.png"
        cover></v-img>
    </div>
    <div class="d-flex flex-column mr-8">
      <h3 class="">Alphina publisher</h3>
      <v-card-subtitle class="pa-0">1990</v-card-subtitle>
      <v-spacer />
      <v-card-subtitle class="pa-0">30 publications</v-card-subtitle>
    </div>
    <v-spacer />

    <div class="d-flex flex-column align-center justify-center">
      <v-card-subtitle class="pa-0 mb-1">Subscribers 10K</v-card-subtitle>

      <v-btn v-if="!appStore.isUserAdmin"
        @click="subscribed = !subscribed"
        variant="tonal"
        color="accent"
        :append-icon="subscribed ? 'mdi-bell-ring' : 'mdi-bell'">
        {{ subscribed ? "Subscribed" : 'Subscribe' }}</v-btn>
      <v-btn v-else
        to="/publishers/1/edit"
        variant="tonal"
        color="grey">
        Edit <v-icon class="ml-2">mdi-pencil</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const subscribed = ref(false)
const appStore = useAppStore()
</script>