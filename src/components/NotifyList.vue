<template>
  <v-list class="overflow-auto bg-white pt-0">
    <v-list-item>
      <template #append>
        <v-btn v-model="banner"
          flat
          color="grey-lighten-2">Mark all as read
          <v-icon class="ml-2">mdi-check-all</v-icon>
        </v-btn>
      </template>
    </v-list-item>
    <template v-for="n in 10"
      :key="n">
      <NotifyListItem to="/publishers/1"
        class="mx-sm-2" />
      <v-divider />
    </template>
  </v-list>
  <v-banner color="warning"
    icon="mdi-wifi-strength-alert-outline"
    lines="one">
    <template v-slot:text>
      Mark all as read?
    </template>

    <template v-slot:actions>
      <v-btn>
        Yes
      </v-btn>

      <v-btn>
        No
      </v-btn>
    </template>
  </v-banner>
</template>

<script setup lang="ts">
import NotifyListItem from '@/components/NotifyListItem.vue';
import { ref } from "vue";

const banner = ref(false)
</script>