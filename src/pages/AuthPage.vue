<template>
  <v-form @submit.prevent
    fast-fail
    validate-on="submit"
    class="d-flex flex-column h-100 py-5">
    <div class="d-flex justify-center mb-5 mr-1">
      <h2>Registration</h2>

    </div>
    <div>
      <router-link to="/login"
        class="text-grey-darken-1 ml-2 mb-2"
        color="gray">Already have an account? Login.</router-link>
    </div>

    <div class="mb-5">
      <MyInput v-model="name"
        required
        variant="outlined"
        name="name"
        :error="v$.name.$error"
        :error-messages="v$.name.$errors"
        label="Your name" />
      <MyInput v-model="surname"
        required
        variant="outlined"
        name="surname"
        label="Your surname" />
      <MyInput v-model="phone"
        required
        type="tel"
        variant="outlined"
        name="phone"
        label="Your phone" />
      <MyInput v-model="userEmail"
        required
        autocomplete
        type="email"
        pattern=".+@example\.com"
        variant="outlined"
        name="email"
        label="Your email" />
      <MyInput v-model="birthDate"
        required
        type="date"
        variant="outlined"
        name="birth date"
        label="Your birth date" />
      <MyInput v-model="password"
        @click:append-inner="showPassword = !showPassword"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        autocomplete="new-password"
        required
        variant="outlined"
        name="password"
        label="Your password" />
      <MyInput v-model="password"
        @click:append-inner="showRetryPassword = !showRetryPassword"
        :append-inner-icon="showRetryPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showRetryPassword ? 'text' : 'password'"
        autocomplete="new-password"
        required
        variant="outlined"
        name="retry password"
        label="Retry your password" />

    </div>
    <div class="d-flex">

      <v-spacer />
      <v-btn @submit="'ok'; v$.$validate"
        type="submit"
        color="accent">Registration</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import useVuelidate from '@vuelidate/core';
import { minLength, required, alpha, email, numeric, sameAs } from '@vuelidate/validators'
import { ref, computed } from 'vue';

const name = ref('')
const surname = ref('')
const phone = ref('')
const userEmail = ref('')
const birthDate = ref('')
const password = ref('')
const retryPassword = ref('')

const showPassword = ref(false)
const showRetryPassword = ref(false)

const rules = computed(() => ({
  name: {
    required,
    alpha,
    minLength: minLength(3)
  },
  surname: {
    alpha,
    minLength: minLength(3)
  },
  phone: {
    required,
    numeric,
    minLength: minLength(11)
  },
  userEmail: {
    required,
    email
  },
  password: {
    required,
    minLength: minLength(8)
  },
  retryPassword: {
    required,
    sameAs: sameAs(password.value)
  }
}))

const v$ = useVuelidate(rules, { name, surname, phone, userEmail, password, retryPassword })

function validNameCharacters() {
  const validChars = name.value.match(/[\p{L}|\d|\-|_]+/iu)
  if (validChars) name.value = validChars[0]
}

function validPasswordCharacters() {
  const validChars = password.value.match(/([a-z]|\d|\[|\]|\^|\$|\.|\||\?|\*|\+|\(|\)|@|&|%|#|!|-|_)+/iu)
  if (validChars) password.value = validChars[0]
}
</script>