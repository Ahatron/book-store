<template>
  <v-col cols="0"
    sm="5"
    md="4"
    lg="3"
    class="position-relative">
    <MySheet class="pa-sm-3 pt-md-4 pb-0 pb-sm-0 position-sticky"
      style="top: 80px; height: 85vh; overflow-y: auto;"
      tag="aside">
      <slot></slot>
    </MySheet>
  </v-col>
</template>

<script setup lang="ts">
import MySheet from '@/components/MySheet.vue';
</script>