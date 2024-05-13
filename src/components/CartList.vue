<template>
  <v-list class="overflow-auto bg-white">
    <template v-for="n in 10"
      :key="n">
      <CartListItem class="mx-sm-2"
        to="/books/1" />
      <v-divider />
    </template>
  </v-list>
</template>

<script setup lang="ts">
import CartListItem from './CartListItem.vue';

</script>