<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span class="display-2 font-weight-light">
          Drinks of week
          <v-icon color="grey" class="display-2">mdi-glass-cocktail</v-icon>
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="3" sm="4" md="4" lg="2" v-for="cocktail in cocktails" :key="cocktail.id">
        <v-card raised elevation="15" shaped>
          <v-img :src="cocktail.img" />

          <v-card-text>
            <div
              class="d-flex justify-center text--primary headline font-weight-light"
            >{{cocktail.name}}</div>
          </v-card-text>
          <div class="d-flex justify-center subtitle-1">
            <v-chip outlined label color="orange accent-4" text-color="orange accent-4">
              <span>{{cocktail.totalIngredients}} Ingredientes</span>
            </v-chip>
          </div>
          <v-card-actions class="d-flex justify-center mt-2">
            <v-btn icon @click="cocktail.loved = !cocktail.loved">
              <v-icon size="30" :color="cocktail.loved ? 'red' : ''">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon size="30">mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cocktail from "@/models/Cocktail";

export default {
  name: "Drink",

  data: () => ({
    dialog: false,
    cocktails: []
  }),
  methods: {},
  mounted() {
    this.$axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then(result => {
        // console.log(result.data.drinks);

        let max = 6;
        result.data.drinks.forEach(element => {
          if (max > 0) {
            let cocktail = new Cocktail();
            cocktail.id = element.idDrink;
            cocktail.name = element.strDrink;
            cocktail.img = element.strDrinkThumb + "/preview";

            let totalIgredients = 0;
            for (let ingredients = 1; ingredients <= 15; ingredients++) {
              if (element["strIngredient" + ingredients] != null) {
                totalIgredients++;
              }
            }
            cocktail.totalIngredients = totalIgredients;
            
            this.cocktails.push(cocktail);
            max--;
          }
        });
      });
  }
};
</script>

<style lang="stylus">
.v-card--shaped {
  border-radius: 24px;
}
</style>