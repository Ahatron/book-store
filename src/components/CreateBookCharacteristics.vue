<template>
  <div>
    <template v-for="character of characterInputs"
      :key="character.label">
      <MyInput v-if="character.type !== 'select'"
        v-model="character.value"
        :type="character.type"
        :min="character.min"
        :rules="character.rules"
        :label="character.label"
        :placeholder="character.placeholder"
        density="compact" />
      <v-select v-else
        class="flex-column"
        v-model="character.value"
        :label="character.label"
        :items="character.selections"
        variant="outlined"
        density="comfortable" />
    </template>
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { rules } from '@/utils/ValidationRules';
import { useAppStore } from '@/store/app';
import { CharacterInput, CharacterSelect } from '@/types/CharacterInput';
import { ref, watch } from 'vue';

const appStore = useAppStore()

const format = ref<CharacterSelect>({
  label: "Format", value: 'Book', type: "select", placeholder: 'Book',
  selections: ['Book', 'E-Book'], rules: [rules.required]
})
const isEBook = ref(false)

const characterInputs = ref<(CharacterInput | CharacterSelect)[]>([
  { label: "Name", value: '', type: "text", required: true, rules: [rules.required] },
  { label: "Author", value: '', type: "text", rules: [rules.required] },
  { label: "Publisher", value: '', type: "text", rules: [rules.required] },
  { label: "Price", value: '0', type: "number", rules: [rules.required], min: 0 },
  {
    label: "Age restriction", value: '12+', type: "select",
    selections: ['0+', "6+", "12+", "16+", "18+"]
  },
  { label: "Publication year", value: '', type: "date" },
  { label: "Last circulation", value: '', type: "date", rules: [rules.required] },
  {
    label: "Genre", value: 'Other', type: "select",
    selections: appStore.bookCategories, rules: [rules.required]
  }, format.value,
  { label: "Weight", value: '', type: "text", disabled: isEBook.value },
  { label: "Width", value: '', type: "text", disabled: isEBook.value },
  { label: "Height", value: '', type: "text", disabled: isEBook.value },
  {
    label: "Binding", value: 'Hardcover', type: "select", placeholder: "Hardcover",
    disabled: isEBook.value,
    selections: ['Hardcover', 'Softcover', 'Adhesive seamless connection',
      'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
  },
  { label: "Series", value: '', type: "text" },
  { label: "ISBN", value: '', type: "text" },
])

watch(() => format.value.value, (format: string) => {
  if (format === 'E-Book') {
    isEBook.value = true
  } else {
    isEBook.value = false
  }
})
</script>