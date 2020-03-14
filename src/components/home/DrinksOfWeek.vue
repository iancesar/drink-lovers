<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span
          class="display-1 font-weight-light"
          style="font-family: Photoshoot !important"
        >Drinks of week</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col xs="3" sm="4" md="4" lg="2" v-for="cocktail in cocktails" :key="cocktail.id">
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
  },
  components: { CocktailCard }
};
</script>

<style lang="stylus">
.v-card--shaped {
  border-radius: 24px;
}
</style>