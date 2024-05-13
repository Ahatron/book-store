<template>
  <v-form class=""
    @submit.prevent
    fast-fail
    validate-on="submit">
    <h2 class="ml-4 mb-5">Create new author</h2>

    <h3 class="mb-3 ml-2">Image</h3>
    <CreateAuthorImage class="mb-10" />

    <h3 class="mb-3 ml-2">inputistics</h3>
    <template v-for="(input, key) in inputs"
      :key="input.label">
      <MyInput v-if="input.inputType === 'input'"
        v-model="input.value"
        @blur="v$.inputs[key] && v$.inputs[key].$touch()"
        :error="v$.inputs[key] && v$.inputs[key].$error"
        :error-messages="v$.inputs[key] && v$.inputs[key].$errors.length ? v$.inputs[key].$errors[0].$message : ''"
        :type="input.type"
        :label="input.label"
        density="compact" />
      <v-select v-else-if="input.inputType === 'select'"
        class="flex-column mb-4"
        v-model="input.value"
        :label="input.label"
        :items="input.selections"
        variant="outlined"
        density="compact" />
    </template>
    <div class="d-flex mt-5">
      <v-spacer />
      <v-btn @submit="'ok'"
        @click="v$.$touch"
        type="submit"
        color="accent">Create</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import CreateAuthorImage from '@/components/CreateAuthorImage.vue';
import MyInput from '@/components/UI/MyInput.vue';
import { useCreateAuthorStore } from '@/stores/create-author';

const { inputs, v$ } = useCreateAuthorStore()
</script>