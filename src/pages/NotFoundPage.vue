<template>
  <v-empty-state headline="Whoops, 404"
    title="Page not found"
    text="The page on this route does not exist, or it is the work of the organization... EL PSY KONGROO!"
    image="../assets/atlas-shrugged.jpg">
    <template #media>
      <v-img class="mb-4"
        aspect-ratio="1"
        src="../assets/sg.jpg" />
    </template>
  </v-empty-state>
</template>