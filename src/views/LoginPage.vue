<template>
  <Basic>
    <v-form @submit.prevent
      fast-fail
      validate-on="submit"
      class="d-flex flex-column h-100 pt-15">
      <div class="d-flex justify-center mb-10 mr-1">
        <h2>Login</h2>
      </div>
      <div class="mb-5">
        <MyInput v-model="nickname"
          required
          type="input"
          variant="outlined"
          name="nikname"
          label="Your nickname"
          :rules="[required]" />
        <MyInput v-model="password"
          required
          type="input"
          variant="outlined"
          name="password"
          label="Your password"
          :rules="[required]" />
      </div>
      <div class="d-flex">
        <RouterLink to="''"
          class="text-grey-darken-1">No account? Registration.</RouterLink>
        <v-spacer />
        <v-btn @submit="'ok'"
          type="submit"
          color="accent">Login</v-btn>
      </div>
    </v-form>
  </Basic>
</template>

<script setup lang="ts">
import Basic from '@/layouts/Basic.vue';
import MyInput from '@/components/UI/MyInput.vue';
import { ref } from 'vue';

const nickname = ref<string>('')
const password = ref<string>('')
const required = (value: string) => !!value || 'Field is required'
</script>