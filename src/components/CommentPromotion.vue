<template>
  <div class="d-flex flex-column align-center ml-2">
    <v-btn @click="upToggle"
      flat
      size="small"
      icon
      variant="plain">
      <v-icon :color="userPromotion === 'up' ? 'green' : ''">mdi-arrow-up</v-icon>
    </v-btn>
    <h4 :style="{ color: userPromotion === 'none' ? 'gray' : userPromotion === 'up' ? 'green' : 'red' }">
      {{ promotionCount }}
    </h4>
    <v-btn @click="downToggle"
      flat
      size="small"
      icon
      variant="plain">
      <v-icon :color="userPromotion === 'down' ? 'red' : ''">mdi-arrow-down</v-icon>
    </v-btn>
  </div>
</template>

<script setup
  lang="ts">
  import { UserComment, Promotion } from '@/store/book-info';
  import { onMounted } from 'vue';
  import { ref } from 'vue';

  const props = defineProps<{ item: UserComment }>()

  const userPromotion = ref<Promotion>(props.item.userPromotion)
  const promotionCount = ref(props.item.promotionCount)

  onMounted(() => {
    // userPromotion.value = 
    // promotionCount.value = props.item.promotionCount
  })

  function upToggle() {
    if (userPromotion.value === 'up') {
      userPromotion.value = 'none'
      promotionCount.value -= 1
    } else if (userPromotion.value === 'down') {
      userPromotion.value = 'up';
      promotionCount.value = promotionCount.value + 2
    } else {
      userPromotion.value = 'up';
      promotionCount.value += 1
    }
  }

  function downToggle() {
    if (userPromotion.value === 'down') {
      userPromotion.value = 'none'
      promotionCount.value += 1
    }
    else if (userPromotion.value === 'up') {
      userPromotion.value = 'down';
      promotionCount.value = promotionCount.value - 2
    } else {
      userPromotion.value = 'down';
      promotionCount.value -= 1
    }
  }

</script>