<template>
  <Basic>
    <v-form @submit.prevent
      fast-fail
      validate-on="submit"
      class="d-flex flex-column h-100 pt-15">
      <div class="d-flex justify-center mb-10 mr-1">
        <h2>Registration</h2>
      </div>
      <div class="mb-5">
        <MyInput @input="validNicknameCharacters"
          v-model="nickname"
          required
          type="input"
          variant="outlined"
          name="nikname"
          label="Your nickname"
          :rules="[rules.required, rules.nicknameMinLength, rules.requiredNicknameSymbols]"
          error-message="loh" />
        <MyInput @input="validPasswordCharacters"
          v-model="password"
          required
          type="input"
          variant="outlined"
          name="password"
          label="Your password"
          :rules="[rules.required, rules.passwordMinLength, rules.requiredPasswordSymbols]" />
      </div>
      <div class="d-flex">
        <RouterLink to="''"
          class="text-grey-darken-1"
          color="gray">Already have an account? Login.</RouterLink>
        <v-spacer />
        <v-btn @submit="'ok'"
          type="submit"
          color="accent">Registration</v-btn>
      </div>
    </v-form>
  </Basic>
</template>

<script setup lang="ts">
import Basic from '@/layouts/Basic.vue';
import MyInput from '@/components/UI/MyInput.vue';
import { rules } from '@/utils/ValidationRules';
import { ref } from 'vue';

const nickname = ref<string>('')
const password = ref<string>('')

function validNicknameCharacters() {
  const validChars = nickname.value.match(/[\p{L}|\d|\-|_]+/iu)
  if (validChars) nickname.value = validChars[0]
}

function validPasswordCharacters() {
  const validChars = password.value.match(/[a-z]|\d|\[|\]|\^|\$|\.|\||\?|\*|\+|\(|\)|@|&|%|#|!|-|_+/iu)
  if (validChars) password.value = validChars[0]
}
</script>