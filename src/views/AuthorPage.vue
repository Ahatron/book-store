<template>
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
      <div class="d-flex">
        <v-card-title>Works list</v-card-title>
        <v-spacer />
      </div>

      <BookView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthorPageHeader from '@/components/AuthorPageHeader.vue';
import BookView from '@/components/BookView.vue';
import ViewToggle from '@/components/UI/ViewToggle.vue';
</script>