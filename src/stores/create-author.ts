import { Inputs } from "@/types/CharacterInput";
import useVuelidate from "@vuelidate/core";
import { helpers, required } from "@vuelidate/validators";
import { defineStore } from "pinia";

const rules = computed(() => ({
  imageURL: {
    reqired: helpers.withMessage('Image required', required)
  },
  inputs: {
    fullname: {
      value: {
        required,
      }
    }
  }
}))

export const useCreateAuthorStore = defineStore('create-author', () => {
  const inputs = ref<Inputs>({
    fullname: {
      value: '', label: 'Name', inputType: 'input', type: 'text',
      required: true
    },
    gender: { value: 'Male', label: "Gender", inputType: 'select', selections: ['Male', 'Female'] },
    birthYear: { value: '', label: "Birth date", inputType: 'input', type: 'date' },
    deathYear: { value: '', label: "Death date", inputType: 'input', type: 'date' },
  })
  const imageURL = ref<null | any>(null)

  const v$ = useVuelidate(rules, { inputs, imageURL })

  return { inputs, imageURL, v$ }
})