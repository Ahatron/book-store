<template>
  <v-card class="d-flex flex-column px-0 px-sm-5 w-100"
    elevation="0">
    <div class="d-flex align-center flex-column my-auto">
      <div class="text-h2 mt-5">
        3.5
        <span class="text-h6 ml-n3">/5</span>
      </div>

      <v-rating :model-value="3"
        color="yellow-darken-3"></v-rating>
      <div class="px-3">3,360 ratings</div>
    </div>

    <v-list bg-color="transparent"
      class="d-flex flex-column-reverse"
      density="compact">
      <v-list-item v-for="(rating, i) in 5"
        :key="i">
        <v-progress-linear :model-value="rating * 15"
          class="mx-n5 my-1"
          color="yellow-darken-3"
          height="5"
          rounded></v-progress-linear>

        <template v-slot:prepend>
          <span>{{ rating }}</span>
          <v-icon class="mx-3"
            icon="mdi-star"></v-icon>
        </template>

        <template v-slot:append>
          <div class="rating-values">
            <span class="d-flex justify-end"> {{ rating * 224 }} </span>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const rating = ref()
</script>