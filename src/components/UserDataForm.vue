<template>
  <v-form @submit.prevent
    fast-fail
    validate-on="submit"
    class="d-flex flex-column h-100 py-5">

    <template v-for="(input, key) in inputs"
      :key="key">
      <MyInput v-if="input.inputType === 'input' && input.type !== 'password'"
        @input="withoutSpaces(input)"
        v-model.trim="input.value"
        @blur="input.type !== 'date' && v$.inputs[key].$touch()"
        :placeholder="input.placeholder"
        required
        variant="outlined"
        density="compact"
        :max="input.max"
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
        required
        variant="outlined"
        density="compact"
        :name="key"
        :label="input.label" />

    </template>
    <div class="d-flex">
      <v-spacer />
      <v-btn @submit="'ok'"
        @click="v$.$touch"
        type="submit"
        color="accent">Save changes</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import MyInput from '@/components/UI/MyInput.vue';
import useVuelidate from '@vuelidate/core';
import { minLength, required, alpha, email, numeric, sameAs, helpers } from '@vuelidate/validators'
import { ref, computed } from 'vue';
import { Inputs } from '@/types/CharacterInput';
import { useUserForm } from '@/stores/user-form';
import { withoutSpaces } from '@/utils/input-restrictions';

defineProps<{ type: 'change' | 'registration' }>()

const showPassword = ref(false)
const userFormStore = useUserForm()

const inputs = ref<Inputs>({
  name: { label: 'Name', value: '', inputType: 'input', type: 'text' },
  surname: { label: 'Surname', value: '', inputType: 'input', type: 'text' },
  phone: {
    label: 'Phone', value: '', inputType: 'input', type: 'text', placeholder: '+7 777 777 7777'
  },
  userEmail: { label: 'Email', value: '', inputType: 'input', type: 'text' },
  birthDate: {
    label: 'Birth date', value: '', inputType: 'input', type: 'date', max: userFormStore.getMaxUserAge()
  },
  password: { label: 'Password', value: '', inputType: 'input', type: 'password' },
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
    birthDate: {
      value: {
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