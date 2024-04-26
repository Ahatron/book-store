<template>
  <div>
    <BookInfoHead />

    <v-divider class="mt-1" />
    <BookInfoCharacteristics />
    <v-divider class="mb-5" />

    <h3 class=" ml-6 mb-4">Description</h3>
    <p class="mb-4 pl-4">
      Айн Рэнд (1905-1982) — наша бывшая соотечественница, ставшая крупнейшей американской писательницей.
      Автор
      четырех романов-бестселлеров и многочисленных статей. Создатель философской концепции, в основе которой
      лежит принцип свободы воли, главенство рациональности и «нравственность разумного эгоизма». Ее книги
      читает весь мир. В США она завоевала огромную популярность, ее романы переиздаются из года в год и по
      совокупности тиражей конкурируют с Библией.
    </p>
    <v-divider class="mb-5" />

    <h3 class=" mb-4 ml-6">Rating overview</h3>
    <BookInfoRatings class="mb-5" />
    <v-divider class="mb-5" />


    <h3 class=" mb-4 ml-6">Comments</h3>
    <BookInfoComments />
  </div>
</template>

<script lang="ts" setup>
import BookInfoRatings from "@/components/BookInfoRatings.vue"
import BookInfoComments from '@/components/BookInfoComments.vue'
import BookInfoHead from '@/components/BookInfoHead.vue'
import BookInfoCharacteristics from "@/components/BookInfoCharacteristics.vue"

// import { useDisplay } from 'vuetify/lib/framework.mjs';

// const { xs } = useDisplay()


</script>