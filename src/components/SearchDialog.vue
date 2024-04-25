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
        <SearchDialogInput />
        <v-sheet height="550"
          @click.stop
          class="w-100 overflow-y-visible">
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
            class="h-100 overflow-y-visible">
            <v-window-item class="h-100 overflow-y-visible"
              value="book">
              <BookList @click="searchStore.dialog = false"
                class="h-100 overflow-y-visible" />
            </v-window-item>
            <v-window-item class="h-100 overflow-y-visible"
              value="author">
              <AuthorList @click="searchStore.dialog = false"
                class="h-100 overflow-y-visible" />
            </v-window-item>
            <v-window-item class="h-100 overflow-y-visible"
              value="publisher">
              <PublisherList @click="searchStore.dialog = false" />
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
import AdaptiveContainer from './AdaptiveContainer.vue';
import { useSearchStore } from '@/store/search';

const searchStore = useSearchStore()
</script>