import { defineStore } from 'pinia'
import { ref } from 'vue';
import { minLength, required, between, alpha, email, numeric, sameAs, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core';
import { useAppStore } from '@/stores/app';
import { Inputs } from '@/types/CharacterInput';


const rules = computed(() => ({
  imagesURL: {
    minLength: helpers.withMessage('There must be at least one image',
      (arr: []) => arr.length > 0)
  },
  inputs: {
    name: {
      value: {
        required,
        minLenght: minLength(5)
      }
    },
    author: {
      value: {
        required,
        minLenght: minLength(3)
      }
    },
    publisher: {
      value: {
        required,
        minLenght: minLength(3)
      }
    },
    series: {
      value: {
        required,
        minLenght: minLength(3)
      }
    },
    isbn: {
      value: {
        required,
        numeric,
        length: {
          between: between(8, 18)
        }
      }
    },
  }
}))

export const useCreateBookStore = defineStore('add-book', () => {
  const appStore = useAppStore()
  const dialogActive = ref(false)
  const imagesURL = ref<any[]>([])
  const selectedImage = ref(0)
  const inputs = ref<Inputs>({
    name: { label: "Name", value: '', inputType: 'input', type: "text", required: true },
    author: { label: "Author", value: '', inputType: 'input', type: "text", },
    publisher: { label: "Publisher", value: '', inputType: 'input', type: "text", },
    price: { label: "Price", value: '0', inputType: 'input', type: "number", min: 0 },
    ageRestriction: {
      label: "Age Restriction", value: '12+', inputType: 'select',
      selections: ['0+', "6+", "12+", "16+", "18+"]
    },
    publicationYear: { label: "Publication Year", value: '', inputType: 'input', type: "date" },
    lastCirculation: { label: "Last Circulation", value: '', inputType: 'input', type: "date", },
    genre: {
      label: "Genre", value: 'Other', inputType: 'select',
      selections: appStore.bookCategories,
    },
    format: {
      label: "Format", value: ['Book'], inputType: 'select multiple',
      selections: ['Book', 'E-Book'],
    },
    weight: { label: "Weight", value: '', inputType: 'input', type: "text", },
    width: { label: "Width", value: '', inputType: 'input', type: "text", },
    height: { label: "Height", value: '', inputType: 'input', type: "text", },
    binding: {
      label: "Binding", value: 'Hardcover', inputType: 'select',
      selections: ['Hardcover', 'Softcover', 'Adhesive seamless connection',
        'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
    },
    series: { label: "Series", value: '', inputType: 'input', type: "text" },
    isbn: { label: "ISBN", value: '', inputType: 'input', type: "text" },
  })

  function removeImage(index: number) {
    imagesURL.value = imagesURL.value.filter((_, i) => i !== index)
  }

  function showCarousel(index: number) {
    selectedImage.value = index
    dialogActive.value = true
  }

  const v$ = useVuelidate(rules, { inputs, imagesURL })

  return {
    v$,
    inputs,
    dialogActive,
    imagesURL,
    selectedImage,
    removeImage,
    showCarousel
  }
})