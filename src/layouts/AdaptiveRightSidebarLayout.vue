<template>
  <AdaptiveContainer>
    <AdaptiveRow>
      <v-col>
        <MySheet>
          <slot></slot>
        </MySheet>
      </v-col>
      <AdaptiveSidebar v-if="!xs">
        <slot name="sidebar"></slot>
      </AdaptiveSidebar>
    </AdaptiveRow>
  </AdaptiveContainer>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import AdaptiveRow from '@/layouts/AdaptiveRow.vue';
import AdaptiveSidebar from '@/layouts/AdaptiveSidebar.vue';
import MySheet from '@/components/MySheet.vue';
import AdaptiveContainer from '@/layouts/AdaptiveContainer.vue';

const { xs } = useDisplay()
</script>