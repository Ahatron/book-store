<template>
  <div class="d-flex align-center ">
    <v-select v-model="selectedOption"
      class="mr-2"
      :items="selections"
      density="compact"
      label="Sort by"
      variant="outlined">
      <template>
        <slot class="d-flex flex-column"></slot>
      </template>
    </v-select>
    <v-btn @click="orderInAscending = !orderInAscending"
      class="mb-1"
      variant="flat"
      density="comfortable"
      rounded="sm"
      icon>
      <v-tooltip activator="parent"
        location="bottom">In {{ orderInAscending ? 'ascending' : 'descending' }}
        order</v-tooltip>
      <v-icon v-if="orderInAscending">mdi-order-bool-ascending</v-icon>
      <v-icon v-else>mdi-order-bool-descending</v-icon>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const selections = ref(['Rating', 'Ratings count', 'Price', 'In stock', 'Views', 'Add date', 'Update date'])
const selectedOption = ref('Ratings count')
const orderInAscending = ref(false)

</script>

<style scoped>
.v-input {
  flex-direction: column !important;
}
</style>