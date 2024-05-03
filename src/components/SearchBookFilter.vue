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
        class="mb-2 pa-2 border rounded"
        style="border-color: lightgray !important;">
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
        v-model="input.value"
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

    <div class="d-flex justify-space-between position-sticky bg-white py-3"
      style="bottom: -1rem;">
      <v-btn @click="throwOff"
        style="width: 48%;"
        variant="flat"
        class="mb-4"
        @submit="'ok'"
        type="submit"
        color="grey">Throw
        off</v-btn>
      <v-btn @click="scrollStart"
        style="width: 48%;"
        variant="flat"
        class="mb-4"
        @submit="'ok'"
        type="submit"
        color="accent">Apply</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import MyInput from '@/components/UI/MyInput.vue';
import { ref } from 'vue';
import { Input, Select, Range, MultipleSelect } from '@/types/CharacterInput'

function scrollStart() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const { bookCategories } = useAppStore()
const ageRestrictions = ['0+', "6+", "12+", "16+", "18+"]
const languages = ['English', 'Russian', 'Kazakh']
const bindings = ['Hardcover', 'Softcover', 'Adhesive seamless connection',
  'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
const formats = ['Book', 'E-Book']

function toggle(input: MultipleSelect) {
  input.value = input.allSelected ? [] : input.selections;
  update(input);
}
function update(input: MultipleSelect) {
  input.someSelected = input.value.length > 0;
  input.allSelected = input.value.length === input.selections.length;
}

function throwOff() {
  for (let i = 0; i < inputs.value.length; i++) {
    const input = inputs.value[i]
    if (input.defaultValue) {
      input.value = input.defaultValue

      if (input.inputType === 'select multiple') update(input)
    }
  }
  scrollStart()
}

const inputs = ref<(Input | Select | MultipleSelect | Range)[]>([
  { label: 'Author', value: '', defaultValue: '', inputType: 'input', type: 'text' },
  { label: 'Publisher', value: '', defaultValue: '', inputType: 'input', type: 'text' },
  {
    label: 'Format', inputType: 'select multiple',
    value: formats, defaultValue: formats, selections: formats,
    someSelected: true, allSelected: true
  },
  {
    label: 'Genre', inputType: 'select multiple',
    value: bookCategories, defaultValue: bookCategories, selections: bookCategories,
    someSelected: true, allSelected: true
  },
  { label: 'Price', value: [0, 30000], defaultValue: [0, 30000], inputType: 'range', max: 30000, min: 0, step: 1000 },
  {
    label: 'Age Restriction', inputType: 'select multiple',
    value: ageRestrictions, defaultValue: ageRestrictions, selections: ageRestrictions,
    someSelected: true, allSelected: true
  },
  {
    label: 'Languages', inputType: 'select multiple',
    value: languages, defaultValue: languages, selections: languages,
    someSelected: true, allSelected: true
  },
  { label: 'Publication Year', value: [1900, 2024], max: 2024, min: 1900, step: 1, inputType: 'range' },
  { label: 'Last Circulation', value: [1900, 2024], max: 2024, min: 1900, step: 1, inputType: 'range' },

  {
    label: 'Binding', inputType: 'select multiple',
    value: bindings, defaultValue: bindings, selections: bindings,
    someSelected: true, allSelected: true
  },
])
</script>