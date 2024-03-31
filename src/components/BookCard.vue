<template>
  <v-card variant="flat">
    <v-img aspect-ratio="1"
      cover
      src="../assets/atlas-shrugged.jpg"></v-img>
    <v-card-item class="pa-2">
      <v-card-title primary-title>
        Atlas shrugged
      </v-card-title>
      <v-card-subtitle>Ayn Rand</v-card-subtitle>
      <v-card-actions>
        <v-btn color="secondary"
          variant="outlined"
          disabled>
          <v-icon></v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="secondary"
          variant="outlined">
          <v-icon>mdi-cart-plus</v-icon>
        </v-btn>
        <v-btn color="secondary"
          variant="outlined">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-item>

  </v-card>
</template>