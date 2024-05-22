<template>
  <router-view name="drawer" />

  <MyMain>
    <router-view name="header" />

    <AdaptiveContainer>
      <AdaptiveRow>
        <AdaptiveCol>

          <MySheet>
            <RouterView />
          </MySheet>
        </AdaptiveCol>
      </AdaptiveRow>
    </AdaptiveContainer>
  </MyMain>
</template>

<script setup lang="ts">
import AdaptiveCol from '@/layouts/AdaptiveCol.vue';
import AdaptiveContainer from '@/layouts/AdaptiveContainer.vue';
import AdaptiveRow from '@/layouts/AdaptiveRow.vue';
import MySheet from '@/components/MySheet.vue';
import MyMain from '@/layouts/MyMain.vue';
</script>
