<template>
  <v-container style="margin-top:60px">
    <v-row>
      <v-col sm="12" md="6" lg="4" v-for="n in 6" :key="n">
        <v-card @click="dialog = !dialog">
          <v-img src="https://www.thecocktaildb.com/images/media/drink/txustu1473344310.jpg" />

          <v-card-text>
            <div class="d-flex justify-center text--primary display-2 font-weight-light">Cuba Libre</div>
          </v-card-text>
          <div class="d-flex justify-center">
            <v-chip outlined label color="deep-purple accent-4" text-color="deep-purple accent-4">
              <span>6 Ingredientes</span>
            </v-chip>
          </div>
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

    <v-dialog v-model="dialog" transition="dialog-bottom-transition">
      <v-card>
        <v-card-title class="display-2 font-weight-light">Cuba Libre</v-card-title>
        <v-card-text>
          <v-chip v-for="(item, i) in items" :key="i" class="ma-2" color="green" text-color="white">
            <v-avatar left class="green darken-4">{{item.measure}}</v-avatar>
            {{item.ingredient}}
          </v-chip>
        </v-card-text>
        <v-card-actions>
          <v-btn color="deep-purple lighten-2" text >Reserve</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    dialog: false,
    item: 1,
    items: [
      { ingredient: "Tequila", measure: "4" },
      { ingredient: "Tequila", measure: "4" },
      { ingredient: "Tequila", measure: "4" },
      { ingredient: "Tequila", measure: "4" }
    ]
  }),
  methods: {
    ola() {
      console.log("hi");
    }
  },
  mounted() {
    var convert = require("convert-units");

    let a =convert(1.5)
      .from("fl-oz")
      .to("ml");

      console.log(Math.floor(a))
  }
};
</script>