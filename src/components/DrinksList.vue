<template>
  <v-container style="margin-top:60px">
    <v-btn @click="teste()">Teste</v-btn>
    <v-row>
      <v-col xs="6" sm="4" md="3" lg="2" v-for="cocktail in cocktails" :key="cocktail.id">
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
    </v-row>
  </v-container>
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
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
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
      },
      {
        id: "5",
        cocktail: "c",
        totalIngredients: 12,
        loved: true,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
      },
      {
        id: "6",
        cocktail: "c",
        totalIngredients: 12,
        loved: true,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
      },
      {
        id: "7",
        cocktail: "c",
        totalIngredients: 12,
        loved: true,
        img:
          "https://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg/preview"
      }
    ]
  }),
  methods: {
    teste() {
      this.$axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
        )
        .then(result => {
          console.log(result.data);
        });
    }
  },
  mounted() {
    console.log('oi', this.$route.params.search);
  }
};
</script>