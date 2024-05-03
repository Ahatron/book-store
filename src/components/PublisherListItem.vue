<template>
  <v-list-item class="px-0 py-4 px-sm-4 my-1">
    <template #default>
      <div class="d-flex">
        <v-card elevation="0"
          variant="text"
          class="mr-4">
          <v-img rounded="10"
            aspect-ratio="0.9"
            width="80"
            cover
            src="../assets/Alpina.png" />
        </v-card>
        <div class="d-flex flex-column justify-space-around mr-2">
          <v-list-item-title>Alphina publisher</v-list-item-title>
          <v-list-item-subtitle class="mb-1">1990</v-list-item-subtitle>
          <span class="d-flex">10 publications</span>
        </div>

      </div>
    </template>

    <template #append>
      <div class="d-flex flex-column flex-sm-row">
        <v-btn v-if="!appStore.isUserAdmin"
          variant="tonal"
          @click.stop.prevent="subscribed = !subscribed"
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
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { ref } from 'vue';

const subscribed = ref(false)
const appStore = useAppStore()
</script>