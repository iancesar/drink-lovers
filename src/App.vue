<template>
  <v-app dark>
    <v-container>
      <v-app-bar max-height="25" color="#121212" flat class="mt-2">
        <v-row>
          <v-col cols="1">
            <v-app-bar-nav-icon @click="drawer = true" style="overflow: initial; " class="mt-2"></v-app-bar-nav-icon>
          </v-col>

          <v-col cols="4" offset="3" class="d-flex justify-center">
            <v-toolbar-title
              class="mt-4"
              style="font-family: Photoshoot !important; font-size: 35px !important;overflow: initial; "
            >
              <div>Cocktails</div>
            </v-toolbar-title>
          </v-col>
        </v-row>
        <!-- <v-row>
          <v-col cols="1" class="d-flex justify-start mt-8">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          </v-col>

          <v-col cols="4" offset="3" class="d-flex justify-center">
            <span
              @click="home()"
              class="mt-10 white--text"
              style="font-family: Photoshoot !important; font-size: 35px !important;"
            >Cocktails</span>
          </v-col>

        </v-row>-->
      </v-app-bar>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary class="drawer">
      <v-card color="grey darken-4" flat>
        <!-- <v-img height="200px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-TydIS9iHJX6YYD1BBP7hOLaJwIrjpm_rHbVFmv1pRyWdaI4D"></v-img> -->

        <v-card-text
          class="mt-6 d-flex justify-center"
          style="font-family: Photoshoot !important; font-size: 30px !important;overflow: initial; "
        >Cocktails</v-card-text>

        <v-list nav dense flat>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon color="pink">mdi-glass-cocktail</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="pink">mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <!-- <v-divider class="mx-12 mt-8"></v-divider> -->

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({ drawer: false }),
  methods: {
    home() {
      this.$router.push("/");
    }
  },
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="stylus">
.searchInput {
  font-size: 20px !important;
}

@media screen and (max-width: 400px) {
  .searchInput {
    font-size: 18px !important;
  }
}

@font-face {
  font-family: 'Photoshoot';
  src: url('fonts/Photoshoot.ttf') format('truetype');
}

.drawer {
  background-color: #212121 !important;
}
</style>
