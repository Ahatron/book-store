<script setup lang="ts">
import NotifyListItem from '@/components/NotifyListItem.vue';

</script>

<template>
  <v-list class="overflow-auto bg-white">
    <template v-for="n in 10"
      :key="n">
      <NotifyListItem to="/publishers/1"
        class="mx-sm-2" />
      <v-divider />
    </template>
  </v-list>
</template>