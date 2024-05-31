<template>
  <router-view name="drawer" />

  <MyMain>
    <AdaptiveRightSidebarLayout>
      <router-view />

      <template #sidebar>
        <router-view name="sidebar" />
      </template>
    </AdaptiveRightSidebarLayout>
  </MyMain>
</template>

<script setup lang="ts">
import AdaptiveRightSidebarLayout from '@/layouts/AdaptiveRightSidebarLayout.vue';
import MyMain from '@/layouts/MyMain.vue';
</script>