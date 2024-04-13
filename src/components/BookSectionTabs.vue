<template>
  <v-card rounded="0"
    color="indigo-lighten-5">
    <template #loader>
      <slot class="d-none"></slot>
    </template>
    <v-tabs color="primary"
      class="mb-2"
      v-model="tab">
      <v-tab value="one">Popular</v-tab>
      <v-tab value="two">Recommended</v-tab>
      <v-tab value="three">New</v-tab>
    </v-tabs>

    <v-card-item class="pa-1 pa-sm-4">
      <ViewToggle />

      <v-window v-model="tab">
        <template v-for="item of values"
          :key="item">
          <v-window-item :value="item">
            <v-row no-gutters
              class="py-3">
              <template v-if="appStore.viewToggle === 'grid'">
                <v-col class="pa-0 "
                  cols="6"
                  sm="3"
                  xs="2"
                  v-for="n in 10"
                  :key="n">
                  <BookCard class="border-sm rounded-0" />
                </v-col>
              </template>

              <v-col v-else>
                <BookList class="elevation-0" />
              </v-col>
            </v-row>
          </v-window-item>
        </template>
      </v-window>
    </v-card-item>

  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BookCard from '@/components/BookCard.vue'
import BookList from "@/components/BookList.vue"
import ViewToggle from '@/components/UI/ViewToggle.vue';
import Adaptive from '@/layouts/Adaptive.vue';
import { useAppStore } from '@/store/app';
const tab = ref<null | string>(null)
const values = ref(['one', 'two', 'three'])
const appStore = useAppStore()
</script>
