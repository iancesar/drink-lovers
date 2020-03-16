<template>
  <v-container>
    <v-row style="flex-grow: 0 !important;" no-gutters>
      <v-col cols="12" class="d-flex justify-center mt-5">
        <v-text-field
          placeholder="Search"
          solo
          style="border-radius:5px"
          append-icon="mdi-magnify"
          color="pink"
          v-model="filter"
          @keydown.enter="search()"
          clearable
          :loading="loading"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-start">
        <v-row no-gutters>
          <v-col cols="12" class="mb-3 d-flex justify-start">
            <v-chip
              v-show="showFilteredChip"
              color="pink"
              label
              text-color="white"
              close
              class="mr-1"
              @click:close="clearFilter"
            >{{filteredValue}}</v-chip>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <div class="d-flex justify-center headline grey-text mt-10">
      <div v-show="!fouded" class>No cocktails are found :(</div>
    </div>

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
    filter: "",
    loading: false
  }),
  methods: {
    search() {
      this.cocktails = [];
      this.loading = true;
      this.$store.commit("applyFilter", this.filter);

      this.$axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" +
            this.filter
        )
        .then(result => {
          if (result.data.drinks != undefined) {
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
            this.loading = false;
          } else {
            this.loading = false;
            return [];
          }
        });
    },
    clearFilter() {
      this.$store.commit("applyFilter", "");
      this.loading = true;
    }
  },
  computed: {
    filteredValue() {
      return this.$store.state.filter;
    },
    showFilteredChip() {
      return this.$store.state.filter != "";
    },
    fouded() {
      return this.cocktails.length > 0;
    }
  },
  mounted() {},
  components: { CocktailCard }
};
</script>

<style lang="stylus">
.v-card--shaped {
  border-radius: 24px;
}
</style>