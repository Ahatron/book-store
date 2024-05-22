<template>
  <div class="w-100 align-start">
    <UserPageHeader class="mb-5 pa-1 px-sm-5" />

    <v-divider class="mb-2" />

    <div class="px-sm-5">
      <v-tabs color="primary"
        class="mb-2"
        v-model="tab">
        <v-tab value="personal"
          to="/users/1/personal">Personal data</v-tab>
        <v-tab value="cart"
          to="/users/1/cart">Cart</v-tab>
        <v-tab value="liked"
          to="/users/1/liked">Liked</v-tab>
        <v-tab value="subscriptions"
          to="/users/1/subscriptions">Subscriptions</v-tab>
        <v-tab value="notifications"
          to="/users/1/notifications">Notifications</v-tab>
      </v-tabs>

      <router-view v-slot="{ Component }">
        <transition :name="fadeName">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>

</template>

<script setup lang="ts">
import UserPageHeader from '@/components/UserPageHeader.vue';
import { onBeforeRouteUpdate } from 'vue-router'
import { ref } from 'vue';

type FadeName = 'slide-left' | 'slide-right'
const tabs = ['personal', 'cart', 'liked', 'subscribtions', 'notifications']
const tab = ref('')
const fadeName = ref<FadeName>('slide-left')

onBeforeRouteUpdate((to, from) => {
  const fromIndex = tabs.findIndex((item) => {
    if (from?.name) return item.includes(from.name.toString())
    return -1
  })
  const toIndex = tabs.findIndex((item) => {
    if (to?.name) return item.includes(to.name.toString())
    return -1
  })

  if (fromIndex < toIndex) fadeName.value = 'slide-left'
  else fadeName.value = 'slide-right'
})
</script>

<style scoped>
.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 0.3s ease-in;
}

.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(50px);
  opacity: 0;
}


.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}
</style>