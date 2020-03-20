<template>
  <div>
    <span class="white--text text-uppercase font-weight-bold cocktail-name">{{cocktail.name}}</span>
    <v-card elevation="15" style="border-radius: 4px;">
      <v-img :src="cocktail.img" @click="to()">
        <!-- <v-card-title>{{cocktail.name}}</v-card-title> -->
      </v-img>

      <v-card-actions style="max-height:40px">
        <v-row no-gutters>
          <v-col cols="1" class="d-flex justify-start">
            <v-btn icon @click="loveIt(cocktail)">
              <v-icon size="20" :color="cocktail.loved ? 'red' : 'white'">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon @click="share = !share">
              <v-icon size="20" color="white">mdi-share-variant</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>

    <v-bottom-sheet v-model="share" inset>
      <v-sheet class="text-center" style="border-radius: 20px 20px 0 0px !important;">
        <div class="py-3">
          <div class="mb-5">Share with</div>
          <Share :cocktail="cocktail"></Share>
        </div>
        <v-btn class="mt-6" text color="primary" @click="share = !share">Close</v-btn>
      </v-sheet>
    </v-bottom-sheet>

    <v-bottom-sheet v-model="cocktail.sheet" inset>
      <v-sheet class="text-center" style="border-radius: 20px 20px 0 0px !important;">
        <LoginBottomSheet></LoginBottomSheet>
        <v-btn text color="pink" @click="cocktail.sheet = !cocktail.sheet">Cancel</v-btn>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import Share from "@/components/Share";
import LoginBottomSheet from "@/components/LoginBottomSheet";
import FirebaseService from "@/services/FirebaseService";
import CocktailService from "@/services/CocktailService";

let firebaseService = new FirebaseService();
let cocktailService = new CocktailService();

export default {
  name: "cocktail-card",
  props: ["cocktail"],
  data: () => ({ share: false }),
  methods: {
    to() {
      this.$store.commit("applyCocktail", this.cocktail);
      this.$router.push("/drink/" + this.cocktail.id);
    },
    loveIt(cocktail) {
      firebaseService
        .getCurrentUser()
        .then(data => {
          if (!data) {
            this.$store.commit("applyCocktailToBeLoved", cocktail);
            cocktail.sheet = true;
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
  components: { Share, LoginBottomSheet }
};
</script>

<style lang="stylus">
.cocktail-name {
}
</style>