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

    <div class="d-flex justify-center headline grey-text">
      <div class="mt-2" v-show="!fouded">No cocktails were found :(</div>
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
    filter: "",
    loading: false
  }),
  methods: {
    search() {
      this.doSearch();

      let filter = this.$route.params.search;

      if (filter == undefined || (filter != null && filter != this.filter)) {
        this.$router.push("/" + this.filter);
      }
    },
    doSearch() {
      let cocktails = [];
      this.loading = true;
      this.$store.commit("applyFilter", this.filter);

      this.$axios
        .get(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
            this.filter
        )
        .then(result => {
          if (result.data.drinks != undefined) {
            result.data.drinks.forEach(element => {
              let cocktail = new Cocktail().convert(element);

              cocktails.push(cocktail);
              this.$store.commit("applyCocktails", cocktails);
            });
            this.loading = false;
          } else {
            this.loading = false;
            this.$store.commit("applyCocktails", []);
          }
        });
    },
    clearFilter() {
      this.filter = ''
      this.$store.commit("applyFilter", "");
      this.findRandom();
    },
    findRandom() {
      this.doSearch();
    }
  },
  computed: {
    cocktails() {
      return this.$store.state.cocktails;
    },
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
  mounted() {
    let cocktails = this.$store.state.cocktails;
    let filter = this.$route.params.search;

    if (cocktails.length == 0 && filter != null) {
      this.filter = filter;
      this.doSearch();
    } else if (cocktails.length == 0) {
      this.findRandom();
    }
  },
  components: { CocktailCard }
};
</script>

<style lang="stylus">
.v-card--shaped {
  border-radius: 24px;
}
</style>