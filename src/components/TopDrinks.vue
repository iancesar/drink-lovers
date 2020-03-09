<template>
  <div>
    <v-container class="d-flex justify-left">
      <span class="display-2 font-weight-light">
        Top Drinks
        <v-icon color="red" class="display-2">mdi-heart</v-icon>
      </span>
    </v-container>

    <v-container class="d-flex justify-center justify-space-between mb-6">
      <v-card v-for="cocktail in cocktails" :key="cocktail.id">
        <v-img :src="cocktail.img" height="200" width="200" />

        <v-card-text>
          <div
            class="d-flex justify-center text--primary headline font-weight-light"
          >{{cocktail.cocktail}}</div>
        </v-card-text>
        <div class="d-flex justify-center subtitle-1">
          <v-chip outlined label color="orange accent-4" text-color="orange accent-4">
            <span>{{cocktail.totalIngredients}} Ingredientes</span>
          </v-chip>
        </div>
        <v-card-actions class="d-flex justify-center">
          <v-btn icon>
            <v-icon :color="cocktail.loved ? 'red' : 'grey'">mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="primary">mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
  <!-- <v-row>
    <v-col cols="12">
      <span class="display-2 font-weight-light">
        Top Drinks
        <v-icon color="red" class="display-2">mdi-heart</v-icon>
      </span>
    </v-col>


    <v-col xs="6" sm="4" md="4" lg="2" v-for="cocktail in cocktails" :key="cocktail.id">
      <v-card>
        <v-img :src="cocktail.img" />

        <v-card-text>
          <div
            class="d-flex justify-center text--primary headline font-weight-light"
          >{{cocktail.cocktail}}</div>
        </v-card-text>
        <div class="d-flex justify-center subtitle-1">
          <v-chip outlined label color="orange accent-4" text-color="orange accent-4">
            <span>{{cocktail.totalIngredients}} Ingredientes</span>
          </v-chip>
        </div>
        <v-card-actions class="d-flex justify-center">
          <v-btn icon>
            <v-icon :color="cocktail.loved ? 'red' : 'grey'">mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon color="primary">mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>-->
</template>

<script>
export default {
  name: "Drink",

  data: () => ({
    dialog: false,
    cocktails: [
      {
        id: "1",
        cocktail: "a",
        totalIngredients: 6,
        loved: true,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg"
      },
      {
        id: "2",
        cocktail: "b",
        totalIngredients: 5,
        loved: false,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
      },
      {
        id: "3",
        cocktail: "c",
        totalIngredients: 12,
        loved: true,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
      },
      {
        id: "4",
        cocktail: "c",
        totalIngredients: 12,
        loved: false,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
      }
    ]
  }),
  methods: {},
  mounted() {}
};
</script>