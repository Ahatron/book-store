<template>
  <div class="w-100 align-start">
    <UserPageHeader class="mb-5" />

    <v-divider class="mb-2" />

    <div class="mb-5 px-2 px-sm-5">
      <v-tabs color="primary"
        class="mb-2"
        v-model="tab">
        <v-tab value="personal data">Personal data</v-tab>
        <v-tab value="cart">Cart</v-tab>
        <v-tab value="liked">Liked</v-tab>
        <v-tab value="subscriptions">Subscriptions</v-tab>
        <v-tab value="notifications">notifications</v-tab>
      </v-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserPageHeader from '@/components/UserPageHeader.vue';
import BookView from '@/components/BookView.vue';
import { ref } from 'vue';

const tab = ref()
</script>