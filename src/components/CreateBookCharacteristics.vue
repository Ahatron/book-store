<template>
  <div>
    <template v-for="character of characterInputs"
      :key="character.label">
      <MyInput v-if="character.inputType === 'input'"
        v-model="character.value"
        :type="character.type"
        :min="character.min"
        :rules="character.rules"
        :label="character.label"
        :placeholder="character.placeholder"
        density="compact" />
      <v-select v-else-if="character.inputType === 'select'"
        class="flex-column"
        v-model="character.value"
        :label="character.label"
        :items="character.selections"
        variant="outlined"
        density="comfortable" />
      <v-select v-else-if="character.inputType === 'select multiple'"
        class="flex-column"
        v-model="character.values"
        :label="character.label"
        :items="character.selections"
        variant="outlined"
        density="comfortable"
        multiple />
    </template>
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { rules } from '@/utils/ValidationRules';
import { useAppStore } from '@/store/app';
import { Input, Select, MultipleSelect } from '@/types/CharacterInput';
import { ref } from 'vue';

const appStore = useAppStore()

const characterInputs = ref<(Input | Select | MultipleSelect)[]>([
  { label: "Name", value: '', inputType: 'input', type: "text", required: true, rules: [rules.required] },
  { label: "Author", value: '', inputType: 'input', type: "text", rules: [rules.required] },
  { label: "Publisher", value: '', inputType: 'input', type: "text", rules: [rules.required] },
  { label: "Price", value: '0', inputType: 'input', type: "number", rules: [rules.required], min: 0 },
  {
    label: "Age Restriction", value: '12+', inputType: 'select',
    selections: ['0+', "6+", "12+", "16+", "18+"]
  },
  { label: "Publication Year", value: '', inputType: 'input', type: "date" },
  { label: "Last Circulation", value: '', inputType: 'input', type: "date", rules: [rules.required] },
  {
    label: "Genre", value: 'Other', inputType: 'select',
    selections: appStore.bookCategories, rules: [rules.required]
  },
  {
    label: "Format", values: ['Book'], inputType: 'select multiple',
    selections: ['Book', 'E-Book'], rules: [rules.required]
  },
  { label: "Weight", value: '', inputType: 'input', type: "text", },
  { label: "Width", value: '', inputType: 'input', type: "text", },
  { label: "Height", value: '', inputType: 'input', type: "text", },
  {
    label: "Binding", value: 'Hardcover', inputType: 'select',
    selections: ['Hardcover', 'Softcover', 'Adhesive seamless connection',
      'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
  },
  { label: "Series", value: '', inputType: 'input', type: "text" },
  { label: "ISBN", value: '', inputType: 'input', type: "text" },
])


</script>