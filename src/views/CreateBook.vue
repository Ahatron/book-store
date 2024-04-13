<template>
  <Basic>
    <v-form class="pa-4 mt-5 bg-white rounded-lg"
      @submit.prevent
      fast-fail
      validate-on="submit">
      <h2 class=" mb-5">Create new book</h2>

      <h3 class="mb-3 ml-2">Images</h3>
      <CreateBookImages class="mb-10" />

      <h3 class="mb-3 ml-2">Characteristics</h3>
      <CreateBookCharacteristics class="mb-10" />

      <h3 class="mb-3 ml-2">Description</h3>
      <v-textarea class="flex-column"
        rows="3"
        variant="outlined"
        label="Description"
        name="Description"
        textarea />
      <div class="d-flex">
        <v-spacer />
        <v-btn @submit="'ok'"
          type="submit"
          color="accent">Create</v-btn>
      </div>
    </v-form>
  </Basic>
</template>

<script setup lang="ts">
import Basic from '@/layouts/Basic.vue';
import CreateBookImages from '@/components/CreateBookImages.vue';
import CreateBookCharacteristics from '@/components/CreateBookCharacteristics.vue';
// import { ref } from 'vue';

</script>