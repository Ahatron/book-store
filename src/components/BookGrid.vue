<template>
  <v-row>
    <v-col class="pa-0"
      cols="6"
      md="4"
      lg="3"
      v-for="n in 10"
      :key="n">
      <BookCard class="border-sm rounded-0 ma-1 pa-1" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import BookCard from '@/components/BookCard.vue';

</script>