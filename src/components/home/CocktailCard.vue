<template>
  <div>
    <!-- :to="to" -->
    <v-card raised elevation="15" shaped>
      <v-img :src="cocktail.img" @click="to" />

      <v-card-text @click="to">
        <div
          class="d-flex justify-center text--primary headline font-weight-light"
        >{{cocktail.name}}</div>
      </v-card-text>

      <v-card-text @click="to" class="d-flex justify-center subtitle-1">
        <v-chip outlined label color="primary accent-4" text-color="primary accent-4">
          <span>{{cocktail.totalIngredients}} Ingredientes</span>
        </v-chip>
      </v-card-text>

      <v-card-actions class="d-flex justify-center">
        <v-btn icon @click="cocktail.loved = !cocktail.loved">
          <v-icon size="30" :color="cocktail.loved ? 'red' : ''">mdi-heart</v-icon>
        </v-btn>
        <v-btn icon @click="share = !share">
          <v-icon size="30">mdi-share-variant</v-icon>
        </v-btn>
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
  </div>
</template>

<script>
import Share from "@/components/Share";

export default {
  name: "cocktail-card",
  props: ["cocktail"],
  data: () => ({ share: false }),
  methods: {
    to() {
      this.$router.push("/drink/" + this.cocktail.id);
    }
  },
  components: { Share }
};
</script>