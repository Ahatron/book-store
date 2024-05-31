<script setup lang="ts">
import LikeListItem from '@/components/LikeListItem.vue';
import SortBySelect from '@/components/UI/SortBySelect.vue';

</script>

<template>
  <v-list class="overflow-auto bg-white">
    <v-list-item>
      <SortBySelect class="my-2" />
    </v-list-item>
    <template v-for="n in 10"
      :key="n">
      <LikeListItem to="/books/1"
        class="mx-sm-2" />
      <v-divider />
    </template>
  </v-list>
</template>