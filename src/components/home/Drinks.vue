<template>
  <v-container>
    <v-row style="flex-grow: 0 !important;" no-gutters>
      <v-col cols="12" class="d-flex justify-center mt-5">
        <v-text-field
          placeholder="Search"
          solo
          style="border-radius:5px"
          append-icon="mdi-magnify"
          color="white"
          v-model="filter"
          @keydown.enter="search()"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-start">
        <v-row no-gutters>
          <v-col cols="12" class="mb-3 d-flex justify-start">
            <v-chip
              color="pink"
              label
              text-color="white"
              close
              class="mr-1"
            >{{filter}}</v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" sm="3" lg="3" v-for="cocktail in cocktails" :key="cocktail.id">
        <cocktail-card :cocktail="cocktail"></cocktail-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Cocktail from "@/models/Cocktail";
import CocktailCard from "./CocktailCard";

export default {
  name: "Drinks",

  data: () => ({
    dialog: false,
    cocktails: [],
    filter: "Marguerita"
  }),
  methods: {
    search(){
      console.log(this.filter);
    }
  },
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