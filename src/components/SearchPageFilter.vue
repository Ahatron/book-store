<template>
  <v-form @submit.prevent>
    <MyInput v-model="author"
      label="Author"
      type="text"
      density="compact" />

    <MyInput v-model="publisher"
      label="publisher"
      type="text"
      density="compact" />

    <div class="mb-2">
      <span class="ml-3"
        style="color: grey;">Price</span>
      <v-range-slider v-model="price"
        color="primary"
        step="1000"
        min="0"
        max="30000"
        thumb-label />
    </div>

    <v-select v-model="genre"
      label="Genre"
      class="flex-column"
      :items="bookCategories"
      variant="outlined"
      density="compact"
      multiple>
      <template v-slot:prepend-item>
        <v-list-item title="Select All"
          @click="selectAllGenreToggle">
          <template v-slot:prepend>
            <v-checkbox-btn :color="allGenreSelected ? 'indigo-darken-4' : undefined"
              :indeterminate="allGenreSelected && !someGenreSelected"
              :model-value="someGenreSelected" />
          </template>
        </v-list-item>
      </template>
    </v-select>

    <v-select v-model="selectedAgeRestriction"
      label="Age restriction"
      class="flex-column"
      :items="ageRestrictions"
      variant="outlined"
      density="compact" />

    <MyInput v-model="publicationYear"
      label="Publication year"
      type="date"
      density="compact" />

    <MyInput v-model="lastCirculation"
      label="Last circulation"
      type="date"
      density="compact" />

    <v-select v-model="languages"
      label="Languages"
      class="flex-column"
      :items="languageSelections"
      variant="outlined"
      density="compact"
      multiple>
      <template v-slot:prepend-item>
        <v-list-item title="Select All"
          @click="selectAllLanguageToggle">
          <template v-slot:prepend>
            <v-checkbox-btn :color="allLanguageSelected ? 'indigo-darken-4' : undefined"
              :indeterminate="allLanguageSelected && !someLanguageSelected"
              :model-value="someLanguageSelected" />
          </template>
        </v-list-item>
      </template>
    </v-select>

    <v-select v-model="formats"
      label="Formats"
      class="flex-column"
      :items="formatSelections"
      variant="outlined"
      density="compact"
      multiple>
      <template v-slot:prepend-item>
        <v-list-item title="Select All"
          @click="selectAllFormatToggle">
          <template v-slot:prepend>
            <v-checkbox-btn :color="allFormatSelected ? 'indigo-darken-4' : undefined"
              :indeterminate="allFormatSelected && !someFormatSelected"
              :model-value="someFormatSelected" />
          </template>
        </v-list-item>
      </template>
    </v-select>

    <v-select v-model="bindings"
      label="Bindings"
      class="flex-column"
      :items="bindingSelections"
      variant="outlined"
      density="compact"
      multiple>
      <template v-slot:prepend-item>
        <v-list-item title="Select All"
          @click="selectAllBindingToggle">
          <template v-slot:prepend>
            <v-checkbox-btn :color="allBindingSelected ? 'indigo-darken-4' : undefined"
              :indeterminate="allBindingSelected && !someBindingSelected"
              :model-value="someBindingSelected" />
          </template>
        </v-list-item>
      </template>
    </v-select>

    <div class="d-flex position-sticky "
      style="bottom: 0;">
      <v-spacer />
      <v-btn class="mb-4"
        @submit="'ok'"
        elevation="10"
        type="submit"
        color="accent">Apply</v-btn>
    </div>
  </v-form>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app';
import MyInput from '@/components/UI/MyInput.vue';
import { computed, ref } from 'vue';

const author = ref('')
const publisher = ref('')
const price = ref([20, 40])

const genre = ref(['All'])
const { bookCategories } = useAppStore()
const selectAllGenreToggle = () => genre.value = allGenreSelected.value ? [] : bookCategories;
const someGenreSelected = computed(() => genre.value.length > 0)
const allGenreSelected = computed(() => genre.value.length === bookCategories.length)

const selectedAgeRestriction = ref('')
const ageRestrictions = ['0+', "6+", "12+", "16+", "18+"]

const publicationYear = ref('')
const lastCirculation = ref('')

const languages = ref(['All'])
const languageSelections = ['English', 'Russian', 'Kazakh']
const selectAllLanguageToggle = () => languages.value = allLanguageSelected.value ? [] : languageSelections;
const someLanguageSelected = computed(() => languages.value.length > 0)
const allLanguageSelected = computed(() => languages.value.length === languageSelections.length)

const formats = ref(['All'])
const formatSelections = ['All', 'Book', 'E-Book']
const selectAllFormatToggle = () => formats.value = allFormatSelected.value ? [] : formatSelections;
const someFormatSelected = computed(() => formats.value.length > 0)
const allFormatSelected = computed(() => formats.value.length === formatSelections.length)


const bindings = ref(['All'])
const bindingSelections = ['All', 'Hardcover', 'Softcover', 'Adhesive seamless connection',
  'Adhesive sewing connection', 'Spring binding', 'Binding 7B and 7BTS']
const selectAllBindingToggle = () => bindings.value = allBindingSelected.value ? [] : bindingSelections;
const someBindingSelected = computed(() => bindings.value.length > 0)
const allBindingSelected = computed(() => bindings.value.length === bindingSelections.length)

</script>