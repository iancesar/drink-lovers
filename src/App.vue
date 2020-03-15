<template>
  <v-app dark>
    <v-app-bar color="primary">
      <v-text-field
        clearable
        placeholder="Type something"
        full-width
        single-line
        class="mt-4 searchInput"
        dark
      ></v-text-field>

      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon style="font-size:45px">mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-list dense>
          <v-list-item to="/drink">
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>
          <v-list-item to="/drink">
            <v-list-item-title>Favorite Drinks</v-list-item-title>
          </v-list-item>
          <v-list-item to="/drink">
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="stylus">
.searchInput {
  font-size: 30px !important;
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

.theme--dark.v-application {
  background: #121212f2 !important;
  color: #00daff !important;
}
</style>
