<template>
  <v-list-item class="px-0 pt-5">
    <v-sheet class="px-2 py-4 bg-grey-lighten-2 rounded">
      <p class="mb-1 px-8 d-flex">Order amount
        <v-spacer />
        <b>5000tg</b>
      </p>
      <v-divider class="mb-4" />
      <p class="mb-1 px-8 d-flex">Discount
        <v-spacer />
        <b>1000tg</b>
      </p>
      <v-divider class="mb-1" />

      <div class="px-8 pt-3 d-flex align-items-end justify-end">
        <div>
          <span>Method of obtaining</span>
          <v-select v-model="obtaining"
            class="w-100 mt-2"
            variant="outlined"
            density="compact"
            :items="['Self-delivery', 'Delivery']"
            hide-details />
        </div>
        <v-spacer />
        <div class="d-flex flex-column">
          <v-spacer />
          <b v-if="obtaining === 'Self-delivery'"
            class="text-green">Free</b>
          <b v-else>1000tg</b>
          <v-spacer />
        </div>
      </div>
    </v-sheet>
  </v-list-item>
</template>

<script setup lang="ts">
const obtaining = ref<'Self-delivery' | 'Delivery'>('Self-delivery')
</script>