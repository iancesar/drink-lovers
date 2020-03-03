<template>
  <v-container style="margin-top:60px">
    <v-row no-gutters>
      <v-col sm="12" md="6">
        <v-img src="https://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg" />
      </v-col>
      <v-col sm="12" md="6">
        <v-card outlined tile>
          <v-card-text>
            <div class="d-flex justify-center display-2 font-weight-light">{{cocktail.drink}}</div>
          </v-card-text>

          <v-card-text>
            <div class="pl-2 display-1 d-flex justify-start font-weight-light mb-5">Ingredientes</div>
            <v-chip
              v-for="(item, i) in cocktail.items"
              :key="i"
              class="ma-1"
              outlined
              color="deep-purple accent-4"
              text-color="deep-purple accent-4"
              label
            >{{item.measure}} of {{item.ingredient}}</v-chip>
          </v-card-text>

          <v-card-text>
            <p class="pl-2 display-1 d-flex justify-start font-weight-light">Como fazer</p>
            <div class="pl-2 body-1 justify-start">{{cocktail.instructions}}</div>
          </v-card-text>

          <v-card-text>
            <p class="pl-2 display-1 d-flex justify-start font-weight-light">Taça</p>
            <div class="pl-2 body-1 d-flex justify-start">{{cocktail.glass}}</div>
          </v-card-text>

          <v-card-actions class="d-flex justify-center">
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "DrinkInfo",
  data: () => ({
    cocktail: {
      drink: "Cuba Libre",
      instructions:
        "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
      glass: "Cocktail",
      items: [
        { ingredient: "Gin", measure: "1 3/4 shot" },
        { ingredient: "Grand Marnier", measure: "1 Shot" },
        { ingredient: "Lemon Juice", measure: "1/4 Shot" },
        { ingredient: "Grenadine", measure: "1/8 Shot" }
      ]
    }
  })
};
</script>

<style lang="stylus"></style>
