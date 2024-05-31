<template>
  <div>
    <template v-for="(input, key) in inputs"
      :key="key">
      <MyInput v-if="input.inputType === 'input'"
        v-model="input.value"
        @blur="v$.inputs[key] && v$.inputs[key].$touch()"
        :error="v$.inputs[key] && v$.inputs[key].$error"
        :error-messages="v$.inputs[key] && v$.inputs[key].$errors.length ? v$.inputs[key].$errors[0].$message : ''"
        :type="input.type"
        :min="input.min"
        :rules="input.rules"
        :label="input.label"
        :placeholder="input.placeholder" />
      <v-select v-else-if="input.inputType === 'select'"
        class="flex-column mb-4"
        v-model="input.value"
        :label="input.label"
        :items="input.selections"
        variant="outlined"
        density="compact" />
      <v-select v-else-if="input.inputType === 'select multiple'"
        class="flex-column mb-4"
        v-model="input.value"
        :label="input.label"
        :items="input.selections"
        variant="outlined"
        density="compact"
        multiple />
    </template>
  </div>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { useCreateBookStore } from '@/stores/create-book';

const { inputs, v$ } = useCreateBookStore()
</script>