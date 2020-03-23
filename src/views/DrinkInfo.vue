<template>
  <v-container>
    <v-row no-gutters class="mt-10">
      <v-col class="d-flex justify-center align-stretch">
        <v-img :src="cocktail.img" />
      </v-col>
      <v-col class="d-flex justify-center align-stretch">
        <v-card tile>
          <v-card-text>
            <div class="d-flex justify-center display-1 font-weight-light mb-5">{{cocktail.name}}</div>

            <div class="pl-2 display-1 d-flex justify-start font-weight-light mb-5">Ingredients</div>
            <v-chip
              v-for="(item, i) in cocktail.ingredients"
              :key="i"
              class="ma-1"
              color="pink"
              label
            >{{item}}</v-chip>
          </v-card-text>

          <v-card-text>
            <p class="pl-2 display-1 d-flex justify-start font-weight-light">Instuctions</p>
            <div class="pl-2 body-1 justify-start">{{cocktail.instructions}}</div>
          </v-card-text>

          <v-card-text>
            <p class="pl-2 display-1 d-flex justify-start font-weight-light">Glass</p>
            <div class="pl-2 body-1 d-flex justify-start">{{cocktail.glass}}</div>
          </v-card-text>

          <v-card-actions class="d-flex justify-center align-end">
            <v-btn icon @click="loveIt(cocktail)">
              <v-icon size="26" :color="cocktail.loved ? 'red' : 'white'">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon @click="share = !share">
              <v-icon size="26">mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-bottom-sheet v-model="share" inset>
      <v-sheet class="text-center" style="border-radius: 20px 20px 0 0px !important;">
        <div class="py-3">
          <div class="mb-5">Share with</div>
          <Share :cocktail="cocktail"></Share>
        </div>
        <v-btn class="mt-6" text color="primary" @click="share = !share">Close</v-btn>
      </v-sheet>
    </v-bottom-sheet>
  </v-container>
</template>

<script>
import Cocktail from "@/models/Cocktail";
import Share from "@/components/Share";
import LoginBottomSheet from "@/components/LoginBottomSheet";
import check from "underscore";
import FirebaseService from "@/services/FirebaseService";
import CocktailService from "@/services/CocktailService";

let firebaseService = new FirebaseService();
let cocktailService = new CocktailService();

export default {
  name: "DrinkInfo",
  data: () => ({ share: false }),
  computed: {
    cocktail() {
      return this.$store.state.cocktail;
    }
  },
  methods: {
    loveIt(cocktail) {
      firebaseService
        .getCurrentUser()
        .then(data => {
          if (!data) {
            this.$store.commit("applyCocktailToBeLoved", cocktail);
            this.$store.commit("changeCocktailSheet", true);
          } else {
            cocktailService.loveIt(cocktail);
          }
        })
        .catch(err => {
          this.$notify({
            group: "message",
            type: "warn",
            text: err.message
          });
        });

      cocktail.loved = !cocktail.loved;
    }
  },
  mounted() {
    let cocktail = this.$store.state.cocktail;
    let id = this.$route.params.id;
    if (check.isUndefined(this.cocktail.id) && !check.isNull(id)) {
      this.$axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(async response => {
          let element = response.data.drinks[0];
          let cocktail = new Cocktail().convert(element);

          let favoriteIds = await cocktailService.getFavoriteIds();
          if (favoriteIds.includes(cocktail.id)) {
            cocktail.loved = true;
          }

          this.$store.commit("applyCocktail", cocktail);
        });
    }
  },
  components: { Share, LoginBottomSheet }
};
</script>

<style lang="stylus"></style>
