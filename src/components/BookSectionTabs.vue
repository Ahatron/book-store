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
      <div class="d-flex justify-end mb-1 mr-1">
        <v-btn-toggle v-model="appStore.viewToggle"
          variant="flat"
          divided
          color="primary">
          <v-btn @click="appStore.viewToggle = 'grid'"
            value="grid"
            icon="mdi-view-grid"></v-btn>
          <v-btn @click="appStore.viewToggle = 'list'"
            value="list"
            icon="mdi-view-list"></v-btn>
        </v-btn-toggle>
      </div>

      <VRow>
        <v-spacer />
        <VCol cols="12"
          sm="10"
          md="8">
          <v-window v-model="tab">
            <template v-for="item of values"
              :key="item">

              <v-window-item :value="item">
                <v-row no-gutters
                  class="py-3">
                  <template v-if="appStore.viewToggle === 'grid'">
                    <v-col cols="6"
                      sm="4"
                      md="3"
                      xs="2"
                      v-for="n in 10"
                      :key="n">
                      <BookCard class="ma-1" />
                    </v-col>
                  </template>
                  <BookList v-else
                    class="w-100" />
                </v-row>
              </v-window-item>

            </template>
          </v-window>
        </VCol>
        <v-spacer />
      </VRow>
    </v-card-item>

  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import BookCard from '@/components/BookCard.vue'
import BookList from "@/components/BookList.vue"
import { useAppStore } from '@/store/app';
const tab = ref<null | string>(null)
const values = ref(['one', 'two', 'three'])
const appStore = useAppStore()
</script>
