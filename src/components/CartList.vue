<template>
  <v-list class="overflow-auto bg-white">
    <template v-for="n in 10"
      :key="n">
      <CartListItem class="mx-sm-2 px-1 px-sm-4 py-3"
        to="/books/1" />
      <v-divider />
    </template>
    <CartTotal />

    <div class="d-flex mt-2">
      <v-spacer />
      <v-btn color="accent">
        make purchase
      </v-btn>
    </div>

  </v-list>
</template>

<script setup lang="ts">
import CartListItem from '@/components/CartListItem.vue';
import CartTotal from '@/components/CartTotal.vue';

</script>