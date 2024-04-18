<template>
  <v-form @submit.prevent>
    <template v-for="input of searchInputs"
      :key="input.label">

      <MyInput v-if="input.type === 'text' || input.type === 'date' || input.type === 'number'"
        v-model="input.value"
        :type="input.type"
        :label="input.label"
        :placeholder="input.placeholder"
        density="compact" />
      <div v-else-if="input.type === 'range'"
        class="mb-2">
        <span class="ml-3"
          style="color: grey;">{{ input.label }}</span>
        <v-range-slider v-model="input.value"
          color="primary"
          :step="input.step"
          :min="input.min"
          :max="input.max"
          thumb-label></v-range-slider>
      </div>
      <v-select v-else-if="input.type === 'select'"
        class="flex-column"
        v-model="input.value"
        :label="input.label"
        :placeholder="input.placeholder"
        :items="input.selections"
        variant="outlined"
        density="compact" />
    </template>
    <div class="d-flex position-sticky"
      style="bottom: 0;">
      <v-spacer />
      <v-btn @submit="'ok'"
        elevation="10"
        type="submit"
        color="accent">Apply</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import MyInput from '@/components/UI/MyInput.vue';
import { CharacterInput, CharacterRange, CharacterSelect } from '@/types/CharacterInput';
import { ref } from 'vue';

const appStore = useAppStore()
const searchInputs = ref<(CharacterInput | CharacterSelect | CharacterRange)[]>([
  { label: "Author", value: '', type: "text" },
  { label: "Publisher", value: '', type: "text" },
  { value: 'Any', type: 'select', label: 'Genre', selections: ['Any', ...appStore.bookCategories] },
  { label: "Price", value: [20, 40], type: "range", min: 0, max: 30000, step: 1000 },
  {
    label: "Age restriction", value: '12+', type: "select",
    selections: ['0+', "6+", "12+", "16+", "18+"]
  },
  { label: "Publication year", value: '', type: "date" },
  { label: "Last circulation", value: '', type: "date" },
  { label: "Pages count", value: '', type: "text" },
  { label: "Language", value: '', type: "text" },
  {
    label: "Format", value: 'Any', type: "select", placeholder: 'Book',
    selections: ['Any', 'Book', 'E-Book']
  },
  {
    label: "Binding", value: 'Any', type: "select", placeholder: "Hardcover",
    selections: ["Any", 'Hardcover', 'Softcover', 'Adhesive seamless connection',
      'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
  },
])
</script>