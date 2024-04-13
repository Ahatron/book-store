<template>
  <div>
    <template v-for="character of characterInputs"
      :key="character.label">
      <MyInput v-if="character.type !== 'select'"
        v-model="character.value"
        :type="character.type"
        :label="character.label"
        :placeholder="character.placeholder"
        density="compact" />
      <v-select v-else
        class="flex-column"
        v-model="character.value"
        :type="character.type"
        :label="character.label"
        :placeholder="character.placeholder"
        :items="character.selections"
        variant="outlined"
        density="comfortable" />
    </template>
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { useAppStore } from '@/store/app';
import { CharacterInput, CharacterSelect } from '@/types/CharacterInput';
import { ref } from 'vue';

const appStore = useAppStore()

const characterInputs = ref<(CharacterInput | CharacterSelect)[]>([
  { label: "Name", value: '', type: "text" },
  { label: "Author", value: '', type: "text" },
  { label: "Publisher", value: '', type: "text" },
  {
    label: "Age restriction", value: '', type: "select", placeholder: '18+',
    selections: ['0+', "6+", "12+", "16+", "18+"]
  },
  { label: "Year of publication", value: '', type: "date" },
  { label: "Date of last circulation", value: '', type: "date" },
  { label: "Genre", value: '', type: "select", selections: appStore.bookCategories },
  { label: "Number of pages", value: '', type: "text" },
  { label: "Language", value: '', type: "text" },
  { label: "Format", value: '', type: "select", placeholder: 'Book', selections: ['Book', 'E-Book'] },
  { label: "Weight", value: '', type: "text", },
  { label: "Width", value: '', type: "text", },
  { label: "Height", value: '', type: "text", },
  {
    label: "Binding", value: '', type: "select", placeholder: "Hardcover",
    selections: ['Hardcover', 'Softcover', 'Adhesive seamless connection',
      'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
  },
  { label: "Series", value: '', type: "text" },
  { label: "ISBN", value: '', type: "text" },
])
</script>