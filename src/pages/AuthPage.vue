<template>
  <v-form @submit.prevent
    fast-fail
    validate-on="submit"
    class="d-flex flex-column h-100 py-5 px-3">
    <div class="d-flex justify-center mb-5 mr-1">
      <h2>Registration</h2>

    </div>
    <div class="ml-2 mb-6">
      <router-link to="/login"
        class="text-grey-darken-1 "
        color="gray">Already have an account? Login.</router-link>
    </div>

    <template v-for="(input, key) in inputs"
      :key="key">
      <MyInput v-if="input.inputType === 'input' && input.type !== 'password'"
        class="mb-2"
        @input="withoutSpaces(input)"
        v-model.trim="input.value"
        @blur="input.type !== 'date' && v$.inputs[key].$touch()"
        :placeholder="input.placeholder"
        :name="key"
        :error="input.type !== 'date' && v$.inputs[key].$error"
        :error-messages="input.type !== 'date' && v$.inputs[key].$errors.length ? v$.inputs[key].$errors[0].$message : ''"
        :label="input.label"
        :type="input.type" />
      <MyInput v-else-if="input.inputType === 'input'"
        v-model="input.value"
        class="mb-2"
        @input="withoutSpaces(input)"
        @click:append-inner="showPassword = !showPassword"
        @blur="v$.inputs[key].$touch()"
        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :error="v$.inputs[key].$error"
        :error-messages="v$.inputs[key].$errors.length ? v$.inputs[key].$errors[0].$message : ''"
        autocomplete="new-password"
        :name="key"
        :label="input.label" />
      <v-select v-else-if="input.inputType === 'select'"
        class="flex-column mb-4"
        v-model="input.value"
        :label="input.label"
        :items="input.selections"
        variant="outlined"
        density="compact" />
    </template>
    <div class="d-flex">

      <v-spacer />
      <v-btn @submit="'ok'"
        @click="v$.$touch"
        type="submit"
        color="accent">Registration</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import useVuelidate from '@vuelidate/core';
import { minLength, required, alpha, email, sameAs, helpers } from '@vuelidate/validators'
import { ref, computed } from 'vue';
import { Inputs } from '@/types/CharacterInput';
import { withoutSpaces } from '@/utils/input-restrictions';
import { isPhoneNumber } from '@/utils/validation-rules';

const showPassword = ref(false)

const inputs = ref<Inputs>({
  name: { label: 'Name', value: '', inputType: 'input', type: 'text' },
  surname: { label: 'Surname', value: '', inputType: 'input', type: 'text' },
  gender: { label: 'Gender', value: 'None', inputType: 'select', selections: ['None', 'Male', 'Female'] },
  phone: { label: 'Phone', value: '', inputType: 'input', type: 'text', placeholder: '+7 777 777 7777' },
  userEmail: { label: 'Email', value: '', inputType: 'input', type: 'text' },
  birthDate: { label: 'Birth date', value: '', inputType: 'input', type: 'date' },
  password: { label: 'Password', value: '', inputType: 'input', type: 'password' },
  retryPassword: { label: 'Retry password', value: '', inputType: 'input', type: 'password' },
})


const rules = computed(() => ({
  inputs: {
    name: {
      value: {
        required,
        alpha,
        minLength: minLength(3)
      }
    },
    surname: {
      value: {
        alpha,
        minLength: minLength(3)
      }
    },
    phone: {
      value: {
        required,
        isPhoneNumber: helpers.withMessage('Is no valid phone number', isPhoneNumber),
        minLength: minLength(11)
      }
    },
    userEmail: {
      value: {
        required,
        email
      }
    },
    password: {
      value: {
        required,
        minLength: minLength(8)
      }
    },
    retryPassword: {
      value: {
        required,
        sameAs: sameAs(inputs.value.password.value)
      }
    }
  }
}))

const v$ = useVuelidate(rules, { inputs })

</script>
