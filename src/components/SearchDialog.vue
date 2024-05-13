<template>
  <v-dialog v-model="searchStore.dialog"
    fullscreen
    scrollable>
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps"
        class="d-inline-flex"
        icon>
        <v-icon>mdi-magnify</v-icon>
        <v-tooltip activator="parent"
          location="bottom">Search books and authors</v-tooltip>
      </v-btn>
    </template>

    <template #default>
      <AdaptiveContainer @click="searchStore.dialog = false">
        <v-sheet @click.stop
          class="w-100 px-3 pb-2"
          style="">
          <div class="d-flex align-center pa-2 pl-0">
            <v-btn @click="searchStore.dialog = false"
              class="mr-5"
              flat
              icon>
              <v-icon>mdi-arrow-left</v-icon>
              <v-spacer></v-spacer>
            </v-btn>
            <h2>Fast search</h2>
          </div>
          <SearchDialogInput variant="outlined" />
          <v-tabs v-model="searchStore.dialogTab"
            density="compact"
            fixed-tabs>
            <v-tab value="book">
              Book
            </v-tab>
            <v-tab value="author">
              Author
            </v-tab>
            <v-tab value="publisher">
              Publisher
            </v-tab>
          </v-tabs>
          <v-window v-model="searchStore.dialogTab"
            class="overflow-y-visible"
            style="height: 70vh">
            <v-window-item class="h-100"
              value="book">
              <BookList @click="searchStore.dialog = false"
                class="h-100 overflow-y-visible" />
            </v-window-item>
            <v-window-item class="h-100"
              value="author">
              <AuthorList @click="searchStore.dialog = false"
                class="h-100 overflow-y-visible" />
            </v-window-item>
            <v-window-item class="h-100"
              value="publisher">
              <PublisherList @click="searchStore.dialog = false"
                class="h-100 overflow-y-visible" />
            </v-window-item>
          </v-window>
        </v-sheet>
      </AdaptiveContainer>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import SearchDialogInput from '@/components/UI/SearchDialogInput.vue'
import BookList from '@/components/BookList.vue';
import AuthorList from '@/components/AuthorList.vue';
import PublisherList from '@/components/PublisherList.vue';
import AdaptiveContainer from '@/layouts/AdaptiveContainer.vue';
import { useSearchStore } from '@/stores/search';

const searchStore = useSearchStore() 
</script>