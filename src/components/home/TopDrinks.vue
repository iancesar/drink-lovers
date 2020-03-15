<template>
  <v-container fluid>
    <!-- <v-row>
      <v-col cols="12">
        <div
          class="mt-5 display-1 font-weight-light"
          style="font-family: Photoshoot !important"
        >Top Drinks</div>
      </v-col>
    </v-row> -->

    <v-row>
      <v-col xs="1" sm="2" md="2" lg="2" v-for="cocktail in cocktails" :key="cocktail.id">
        <cocktail-card :cocktail="cocktail"></cocktail-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cocktail from "@/models/Cocktail";
import CocktailCard from "./CocktailCard";

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
        let max = 10;
        result.data.drinks.forEach(element => {
          if (max > 0) {
            let cocktail = new Cocktail();
            cocktail.id = element.idDrink;
            cocktail.name = element.strDrink;
            cocktail.img = element.strDrinkThumb;

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
  },
  components: { CocktailCard }
};
</script>

<style lang="stylus">
.v-card--shaped {
  border-radius: 24px;
}
</style>