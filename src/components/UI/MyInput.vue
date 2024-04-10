<template>
  <v-text-field density="comfortable"
    variant="outlined">
    <template>
      <slot class="px-1 py-1"></slot>
    </template>
  </v-text-field>
</template>

<style scoped>
.v-input {
  flex-direction: column !important;
}
</style>