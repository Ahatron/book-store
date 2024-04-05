<template>
  <div>
    <BookCommentsCreate />

    <v-divider />

    <v-list lines="three"
      item-props>
      <template v-for="item of items"
        :key="item.title">

        <v-list-item :prepend-avatar="item.prependAvatar">

          <v-list-item-title class="">
            <div>
              {{ item.title }}
            </div>
            <div class="d-inline-flex mx-1">
              <v-icon v-for="n in 5"
                :key="n"
                color="yellow-darken-3"
                size="15">
                mdi-star
              </v-icon>
            </div>
            <v-list-item-subtitle class="d-inline">
              last week
            </v-list-item-subtitle>

          </v-list-item-title>
          <v-list-item-subtitle class="d-inline-flex">
            {{ item.subtitle }}

          </v-list-item-subtitle>

          <template #append>
            <div class="d-flex flex-column align-center">
              <v-btn flat
                size="small"
                icon
                variant="plain">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              0
              <v-btn flat
                size="small"
                icon
                variant="plain">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </div>
          </template>
        </v-list-item>
        <v-divider />
      </template>

    </v-list>
  </div>
</template>

<script setup
  lang="ts">
  import BookCommentsCreate from '@/components/BookInfoCommentsCreate.vue'
  import { ref } from 'vue'
  const items = ref([
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
      title: 'Brunch this weekend?',
      subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
      title: 'Summer BBQ',
      subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
      title: 'Oui oui',
      subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
    },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
      title: 'Birthday gift',
      subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
    },
    {
      prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      title: 'Recipe to try',
      subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
    }])
</script>