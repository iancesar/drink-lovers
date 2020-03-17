<template>
  <v-app dark>
    <v-toolbar max-height="60" color="#121212" flat class="mt-2">
      <v-row>
        <v-col cols="4" offset="4" class="d-flex justify-center">
          <span
            @click="home()"
            class="mt-10 white--text"
            style="font-family: Photoshoot !important; font-size: 35px !important;"
          >Cocktails</span>
        </v-col>

        <v-col cols="1" offset="3" class="d-flex justify-end mt-8">
          <!-- <v-btn icon>
            <v-icon size="30" color="white">mdi-heart</v-icon>
          </v-btn>-->
        </v-col>
      </v-row>
    </v-toolbar>
    <!-- <v-divider class="mx-12 mt-8"></v-divider> -->

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({}),
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
</style>
