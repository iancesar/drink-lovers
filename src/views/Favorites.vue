<template>
  <v-container>
    <div class="d-flex justify-center mt-10 display-2 pink--text font-weight-light">Favorites</div>
    <v-row class="ml-1">
      <v-col cols="6" sm="3" lg="3" v-for="cocktail in favorites" :key="cocktail.id">
        <cocktail-card :cocktail="cocktail"></cocktail-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CocktailService from "@/services/CocktailService";
import CocktailCard from "@/components/home/CocktailCard";

import check from "underscore";

let cocktailService = new CocktailService();

export default {
  name: "Favorites",
  data: () => ({}),
  computed: {
    favorites() {
      return this.$store.state.favorites;
    }
  },
  mounted() {
    if (check.isEmpty(this.favorites)) {
      cocktailService.getFavorites();
    }
  },
  components: { CocktailCard }
};
</script>