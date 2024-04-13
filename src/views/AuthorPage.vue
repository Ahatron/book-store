<template>
  <Basic>
    <v-card class="pa-4 py-5 mt-5">
      <div class="w-100 align-start">
        <AuthorPageHeader class="mb-5" />

        <v-divider class="mb-2" />

        <div class="mb-5 px-2 px-sm-6">
          <v-card-title>Description</v-card-title>
          <p class="mb-5">
            Айн Рэнд (англ. Ayn Rand [aɪn ɹænd]; урождённая Али́са Зино́вьевна Розенба́ум; 2 февраля 1905[1][2][…],
            Санкт-Петербург, Санкт-Петербургская губерния, Российская империя[3] — 6 марта 1982[1][2][…], Манхэттен,
            Нью-Йорк) — американская писательница и философ. Известна двумя своими романами-бестселлерами — «Источник»
            и
            «Атлант расправил плечи»; работала также как драматург и сценарист. Рэнд — создательница философской
            системы,
            названной ею объективизмом.
          </p>

          <v-divider class="mb-4" />
          <div class="d-flex align-center mb-10">
            <v-card-title>Works list</v-card-title>
            <v-spacer />
            <ViewToggle />
          </div>

          <template v-if="appStore.viewToggle === 'grid'">
            <v-row>
              <v-col class="pa-0 "
                cols="6"
                sm="4"
                xs="3"
                v-for="n in 10"
                :key="n">
                <BookCard class="border-sm rounded-0" />
              </v-col>
            </v-row>
          </template>
          <BookList v-else
            class="elevation-0" />
        </div>
      </div>
    </v-card>
  </Basic>
</template>

<script setup lang="ts">
import Basic from '@/layouts/Basic.vue';
import AuthorPageHeader from '@/components/AuthorPageHeader.vue';
import BookList from '@/components/BookList.vue';
import BookCard from '@/components/BookCard.vue';
import { useAppStore } from '@/store/app';
import ViewToggle from '@/components/UI/ViewToggle.vue';

const appStore = useAppStore()
</script>