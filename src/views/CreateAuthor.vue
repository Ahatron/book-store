<template>
  <v-form class=""
    @submit.prevent
    fast-fail
    validate-on="submit">
    <h2 class="ml-4 mb-5">Create new author</h2>

    <h3 class="mb-3 ml-2">Image</h3>
    <CreateAuthorImage class="mb-10" />

    <h3 class="mb-3 ml-2">Characteristics</h3>
    <template v-for="character of characterInputs"
      :key="character.label">
      <MyInput v-if="character.inputType === 'input'"
        v-model="character.value"
        :required="character.required"
        :rules="character.rules"
        :type="character.type"
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
    </template>
    <div class="d-flex mt-5">
      <v-spacer />
      <v-btn @submit="'ok'"
        type="submit"
        color="accent">Create</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import CreateAuthorImage from '@/components/CreateAuthorImage.vue';
import MyInput from '@/components/UI/MyInput.vue';

import { ref } from 'vue';
import { Input, InputSelect } from '@/types/CharacterInput';

const rules = {
  required: (value: string) => !!value || 'Field is required',
}

const characterInputs = ref<(Input | InputSelect)[]>([
  {
    value: '', label: 'Name', inputType: 'input', type: 'text',
    required: true, rules: [rules.required]
  },
  { value: '', label: "Surname", inputType: 'input', type: 'text' },
  { value: 'Male', label: "Gender", inputType: 'select', selections: ['Male', 'Female'] },
  { value: '', label: "Birth date", inputType: 'input', type: 'date' },
  { value: '', label: "Death date", inputType: 'input', type: 'date' },
])


</script>