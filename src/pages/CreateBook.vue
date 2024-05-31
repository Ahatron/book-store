<template>
  <v-form class="pb-3"
    @submit.prevent
    fast-fail
    validate-on="submit">
    <h2 class="ml-4 mb-5">Create new book</h2>

    <h3 class="mb-3 ml-2">Images</h3>
    <CreateBookImages class="mb-8" />

    <h3 class="mb-3 ml-2">Characteristics</h3>
    <CreateBookCharacteristics class="mb-8" />

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
        @click="v$.$touch()"
        type="submit"
        color="accent">Create</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import CreateBookImages from '@/components/CreateBookImages.vue';
import CreateBookCharacteristics from '@/components/CreateBookCharacteristics.vue';
import { useCreateBookStore } from '@/stores/create-book';

const { v$ } = useCreateBookStore()
</script>