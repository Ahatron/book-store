<template>
  <v-text-field density="compact"
    class="mb-4"
    variant="outlined">
    <template>
      <slot class="px-1 py-1"></slot>
    </template>
    <template #append-inner>
      <slot name="append-inner"></slot>
    </template>
  </v-text-field>
</template>

<script setup lang="ts">
//
</script>
