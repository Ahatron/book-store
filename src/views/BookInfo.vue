<template>
  <Basic>
    <v-container>
      <VRow class="mt-4">
        <v-spacer />
        <VCol cols="12"
          sm="8"
          md="6"
          class="pa-0">
          <v-card elevation="0"
            class="pa-1 pa-sm-5 d-flex flex-column">
            <BookInfoHead />
            <v-divider class="mb-3" />

            <BookInfoMore />
            <v-divider class="mb-3" />

            <v-card-title class="w-100 d-flex">Description</v-card-title>
            <v-card-text>
              Айн Рэнд (1905-1982) — наша бывшая соотечественница, ставшая крупнейшей американской писательницей.
              Автор
              четырех романов-бестселлеров и многочисленных статей. Создатель философской концепции, в основе которой
              лежит принцип свободы воли, главенство рациональности и «нравственность разумного эгоизма». Ее книги
              читает весь мир. В США она завоевала огромную популярность, ее романы переиздаются из года в год и по
              совокупности тиражей конкурируют с Библией.
            </v-card-text>
            <v-divider class="mb-3" />

            <v-card-title class="w-100 d-flex">Rating overview</v-card-title>
            <BookInfoRatings class="mb-5" />
            <v-divider class="mb-3" />


            <v-card-title class="w-100 d-flex">Comments</v-card-title>
            <BookInfoComments />
          </v-card>
        </VCol>
        <v-spacer />

      </VRow>
    </v-container>

  </Basic>
</template>

<script lang="ts"
  setup>
  import Basic from '@/layouts/Basic.vue'
  import BookInfoRatings from "@/components/BookInfoRatings.vue"
  import BookInfoComments from '@/components/BookInfoComments.vue'
  import BookInfoHead from '@/components/BookInfoHead.vue'
  import BookInfoMore from "@/components/BookInfoMore.vue"

  // import { useDisplay } from 'vuetify/lib/framework.mjs';

  // const { xs } = useDisplay()


</script>