<template>
  <v-card rounded="0"
    color="indigo-lighten-5">
    <template #loader>
      <slot class="d-none"></slot>
    </template>
    <v-tabs v-model="tab"
      bg-color="primary">
      <v-tab value="one">Popular</v-tab>
      <v-tab value="two">Recommended</v-tab>
      <v-tab value="three">New</v-tab>
    </v-tabs>

    <v-card-item>
      <VRow>
        <v-spacer />
        <VCol cols="12"
          sm="10">
          <v-window v-model="tab">
            <template v-for="item of values"
              :key="item">

              <v-window-item :value="item">
                <v-row class="py-3">
                  <v-col cols="6"
                    sm="4"
                    md="3"
                    xs="2"
                    v-for="n in 10"
                    :key="n">
                    <BookCard />
                  </v-col>
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
<script setup
  lang="ts">
  import { ref } from 'vue';
  import BookCard from '@/components/BookCard.vue'
  const tab = ref<null | string>(null)
  const values = ref(['one', 'two', 'three'])
</script>