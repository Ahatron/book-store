<template>
  <div class="w-100 align-start">
    <PublisherPageHeader class="mb-5" />

    <v-divider class="mb-2" />

    <div class="mb-5 px-2 px-sm-6">
      <v-card-title>Description</v-card-title>
      <p class="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maiores velit, id fugiat voluptatum libero
        reiciendis excepturi, cum ratione nisi corrupti odio dolorem minima magni numquam a, ipsam fuga consectetur!
        Dolore exercitationem repellat autem inventore explicabo porro incidunt voluptatem. Reprehenderit quia
        asperiores voluptatibus possimus cupiditate dolores incidunt, ex provident cum, autem magni nemo nesciunt porro
        architecto esse pariatur facilis quisquam et. Similique explicabo minima, corporis deserunt ex expedita facilis
        quam quas autem provident, fugiat reiciendis odit. Aut, unde tenetur nobis vitae asperiores ad dolore inventore
        saepe dignissimos voluptates expedita maiores fuga molestias quos error delectus eveniet ullam, blanditiis in
        cupiditate?
      </p>

      <v-divider class="mb-4" />
      <div class="d-flex">
        <v-card-title>Publication list</v-card-title><v-spacer />
      </div>

      <BookView />
    </div>
  </div>
</template>

<script setup lang="ts">
import PublisherPageHeader from '@/components/PublisherPageHeader.vue';
import BookView from '@/components/BookView.vue';
</script>