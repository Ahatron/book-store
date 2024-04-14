<template>
  <v-navigation-drawer class="pa-2 pa-sm-4"
    v-model="searchStore.drawer"
    temporary
    location="left"
    absolute>
    <v-form>
      <template v-for="input of searchInputs"
        :key="input.label">
        <MyInput v-if="input.type !== 'select'"
          v-model="input.value"
          :type="input.type"
          :label="input.label"
          :placeholder="input.placeholder"
          density="compact" />
        <v-select v-else
          class="flex-column"
          v-model="input.value"
          :label="input.label"
          :placeholder="input.placeholder"
          :items="input.selections"
          variant="outlined"
          density="comfortable" />
      </template>
    </v-form>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { useAppStore } from '@/store/app';
import { useSearchStore } from '@/store/search';
import { CharacterInput, CharacterSelect } from '@/types/CharacterInput';
import { ref } from 'vue';

const appStore = useAppStore()
const searchStore = useSearchStore()
const searchInputs = ref<(CharacterInput | CharacterSelect)[]>([
  { value: '', type: 'select', label: 'Genre', selections: appStore.bookCategories }
])
</script>