<template>
  <v-container style="margin-top:60px">
    <v-row no-gutters>
      <v-col sm="12" md="6" class="d-flex align-stretch">
        <v-img :src="cocktail.img" />
      </v-col>
      <v-col sm="12" md="6" class="d-flex align-stretch">
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
            <v-btn icon @click="cocktail.loved = !cocktail.loved">
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

export default {
  name: "DrinkInfo",
  data: () => ({ share: false }),
  computed: {
    cocktail() {
      return this.$store.state.cocktail;
    }
  },
  mounted() {
    let cocktail = this.$store.state.cocktail;
    let id = this.$route.params.id;
    if (this.cocktail.id == undefined && id != null) {
      this.$axios
        .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(response => {
          let element = response.data.drinks[0];
          let cocktail = new Cocktail().convert(element);

          this.$store.commit("applyCocktail", cocktail);
        });
    }
  },
  components: { Share }
};
</script>

<style lang="stylus"></style>
