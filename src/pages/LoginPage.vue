<template>
  <v-form @submit.prevent
    fast-fail
    validate-on="submit"
    class="d-flex flex-column h-100 py-5 px-3">
    <div class="d-flex justify-center mb-5 mr-1">
      <h2>Login</h2>
    </div>
    <div class="ml-2 mb-6">
      <router-link to="auth"
        class="text-grey-darken-1 ">No account? Registration.</router-link>
    </div>

    <MyInput v-model="userEmail"
      required
      class="mb-2"
      density="compact"
      @blur="v$.userEmail.$touch"
      :error="v$.userEmail.$error"
      :error-messages="v$.userEmail.$errors.length ? v$.userEmail.$errors[0].$message : ''"
      type="email"
      variant="outlined"
      name="name"
      label="Your email" />
    <MyInput v-model="password"
      required
      class="mb-2"
      density="compact"
      @blur="v$.password.$touch"
      @click:append-inner="show = !show"
      :append-inner-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :error="v$.password.$error"
      :error-messages="v$.password.$errors.length ? v$.password.$errors[0].$message : ''"
      :type="show ? 'text' : 'password'"
      variant="outlined"
      name="password"
      label="Your password" />
    <div class="d-flex">
      <v-spacer />
      <v-btn @submit="'ok'"
        @click="v$.$touch"
        type="submit"
        color="accent">Login</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { minLength, required, alpha, email, numeric, sameAs } from '@vuelidate/validators'


const userEmail = ref<string>('')
const password = ref<string>('')
const show = ref(false)

const rules = computed(() => ({
  userEmail: {
    required,
    email
  },
  password: {
    required
  }
}))

const v$ = useVuelidate(rules, { userEmail, password })

</script>