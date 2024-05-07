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
      <template v-for="(input, key) in inputs"
        :key="key">
        <MyInput v-if="input.inputType === 'input' && input.type !== 'password'"
          class="mb-2"
          @input="withoutSpaces(key)"
          v-model.trim="input.value"
          @blur="input.type !== 'date' && v$.inputs[key].$touch()"
          :placeholder="input.placeholder"
          required
          variant="outlined"
          density="compact"
          :name="key"
          :error="input.type !== 'date' && v$.inputs[key].$error"
          :error-messages="input.type !== 'date' && v$.inputs[key].$errors.length ? v$.inputs[key].$errors[0].$message : ''"
          :label="input.label"
          :type="input.type" />
        <MyInput v-else
          v-model="input.value"
          class="mb-2"
          @input="withoutSpaces(key)"
          @click:append-inner="showPassword = !showPassword"
          @blur="v$.inputs[key].$touch()"
          :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          :error="v$.inputs[key].$error"
          :error-messages="v$.inputs[key].$errors.length ? v$.inputs[key].$errors[0].$message : ''"
          autocomplete="new-password"
          required
          variant="outlined"
          density="compact"
          :name="key"
          :label="input.label" />

      </template>
    </div>
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
import { minLength, required, alpha, email, numeric, sameAs, helpers } from '@vuelidate/validators'
import { ref, computed } from 'vue';
import { Inputs } from '@/types/CharacterInput';

function withoutSpaces(key: string | number) {
  const input = inputs.value[key]
  if (input.inputType === 'input' && input.value.includes(' ')) {
    input.value = input.value.replace(/\s/g, ''); // Удалить пробелы
  }
}

// const name = ref('')
// const surname = ref('')
// const phone = ref('')
// const userEmail = ref('')
// const birthDate = ref('')
// const password = ref('')
// const retryPassword = ref('')

const showPassword = ref(false)

const inputs = ref<Inputs>({
  name: { label: 'Name', value: '', inputType: 'input', type: 'text' },
  surname: { label: 'Surname', value: '', inputType: 'input', type: 'text' },
  phone: { label: 'Phone', value: '', inputType: 'input', type: 'text', placeholder: '+7 777 777 7777' },
  userEmail: { label: 'Email', value: '', inputType: 'input', type: 'text' },
  birthDate: { label: 'Birth date', value: '', inputType: 'input', type: 'date' },
  password: { label: 'Password', value: '', inputType: 'input', type: 'password' },
  retryPassword: { label: 'Retry password', value: '', inputType: 'input', type: 'password' },
})

const isPhoneNumber = (value: string) => !!value.match(/^\+\d+/)

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
// const v$ = useVuelidate(rules, { name, surname, phone, userEmail, password, retryPassword })

// function validNameCharacters() {
//   const validChars = name.value.match(/[\p{L}|\d|\-|_]+/iu)
//   if (validChars) name.value = validChars[0]
// }

// function validPasswordCharacters() {
//   const validChars = password.value.match(/([a-z]|\d|\[|\]|\^|\$|\.|\||\?|\*|\+|\(|\)|@|&|%|#|!|-|_)+/iu)
//   if (validChars) password.value = validChars[0]
// }
</script>
