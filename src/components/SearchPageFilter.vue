<template>
  <v-form @submit.prevent>
    <template v-for="input of inputs"
      :key="input.label">
      <MyInput v-if="input.inputType === 'input'"
        v-model="input.value"
        :label="input.label"
        :type="input.type"
        density="compact" />

      <div v-else-if="input.inputType === 'range'"
        class="mb-2">
        <span class="ml-3"
          style="color: grey;">{{ input.label }}</span>
        <v-range-slider v-model="input.value"
          color="primary"
          :step="input.step"
          :min="input.min"
          :max="input.max"
          thumb-label />
      </div>

      <v-select v-else-if="input.inputType === 'select'"
        v-model="input.value"
        :label="input.label"
        class="flex-column"
        :items="input.selections"
        variant="outlined"
        density="compact" />

      <v-select v-else-if="input.inputType === 'select multiple'"
        v-model="input.values"
        :label="input.label"
        @update:model-value="update(input)"
        class="flex-column"
        :items="input.selections"
        variant="outlined"
        density="compact"
        multiple>
        <template #prepend-item>
          <v-list-item title="Select All"
            @click="toggle(input)">
            <template v-slot:prepend>
              <v-checkbox-btn :color="input.someSelected ? 'indigo-darken-4' : undefined"
                :indeterminate="!input.allSelected && input.someSelected"
                :model-value="input.allSelected" />
            </template>
          </v-list-item>
          <v-divider />
        </template>
      </v-select>
    </template>

    <div class="d-flex position-sticky "
      style="bottom: 0;">
      <v-spacer />
      <v-btn class="mb-4"
        @submit="'ok'"
        elevation="10"
        type="submit"
        color="accent">Apply</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import MyInput from '@/components/UI/MyInput.vue';
import { ref } from 'vue';
import { Input, Select, Range, MultipleSelect } from '@/types/CharacterInput'

const { bookCategories } = useAppStore()
const ageRestrictions = ['0+', "6+", "12+", "16+", "18+"]
const languages = ['English', 'Russian', 'Kazakh']
const bindings = ['Hardcover', 'Softcover', 'Adhesive seamless connection',
  'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
const formats = ['Book', 'E-Book']

function toggle(input: MultipleSelect) {
  input.values = input.allSelected ? [] : input.selections;
  update(input);
}
function update(input: MultipleSelect) {
  input.someSelected = input.values.length > 0;
  input.allSelected = input.values.length === input.selections.length;
}

const inputs = ref<(Input | Select | MultipleSelect | Range)[]>([
  { label: 'Author', value: '', inputType: 'input', type: 'text' },
  { label: 'Publisher', value: '', inputType: 'input', type: 'text' },
  {
    label: 'Format', inputType: 'select multiple',
    values: formats, selections: formats,
    someSelected: true, allSelected: true
  },
  {
    label: 'Genre', inputType: 'select multiple',
    values: bookCategories, selections: bookCategories,
    someSelected: true, allSelected: true
  },
  { label: 'Price', value: [20, 40], inputType: 'range', max: 30000, min: 0, step: 1000 },
  {
    label: 'Age Restriction', inputType: 'select multiple',
    values: ageRestrictions, selections: ageRestrictions,
    someSelected: true, allSelected: true
  },
  {
    label: 'Languages', inputType: 'select multiple',
    values: languages, selections: languages,
    someSelected: true, allSelected: true
  },
  { label: 'Publication Year', value: '', inputType: 'input', type: 'date' },
  { label: 'Last Circulation', value: '', inputType: 'input', type: 'date' },

  {
    label: 'Binding', inputType: 'select multiple',
    values: bindings, selections: bindings,
    someSelected: true, allSelected: true
  },
])
</script>