<template>
  <div class="d-flex">
    <div class="mr-3 mr-sm-5">
      <v-img class="rounded "
        aspect-ratio="0.8"
        width="70"
        src="@/assets/old-man.jpg"
        cover></v-img>
    </div>
    <div class="d-flex justify-center flex-column mr-8">
      <h3 class="">Ahatron</h3>
    </div>
    <v-spacer />

    <div class="d-flex align-center justify-center">
      <v-btn to="/settings"
        variant="tonal"
        color="grey">
        Settings <v-icon class="ml-2">mdi-cog</v-icon>
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