<template>
  <v-app dark>
    <v-container>
      <notifications group="message" position="top center" class="mt-7" />

      <v-app-bar max-height="25" color="#121212" flat class="mt-2">
        <v-app-bar-nav-icon @click="drawer = true" class="mt-2"></v-app-bar-nav-icon>
        <v-row>
          <v-col cols="4" offset="4" class="d-flex justify-center">
            <v-toolbar-title
              class="mt-4"
              style="font-family: Photoshoot !important; font-size: 35px !important;overflow: initial; "
            >
              <div>Cocktails</div>
            </v-toolbar-title>
          </v-col>
        </v-row>
      </v-app-bar>
    </v-container>

    <v-navigation-drawer v-model="drawer" absolute temporary class="drawer">
      <v-card color="grey darken-4" flat>
        <v-card-text
          class="mt-6 d-flex justify-center"
          style="font-family: Photoshoot !important; font-size: 30px !important;overflow: initial; "
        >Cocktails</v-card-text>

        <v-divider class="mx-2 mt-2"></v-divider>

        <v-list nav dense flat class="mt-2">
          <v-list-item to="/" v-show="isLogged">
            <v-list-item-icon>
              <v-icon color="pink">mdi-glass-cocktail</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Cocktails</v-list-item-title>
          </v-list-item>

          <v-list-item v-show="isLogged" to="/favorites/drinks">
            <v-list-item-icon>
              <v-icon color="pink">mdi-heart</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favorites</v-list-item-title>
          </v-list-item>

          <v-list-item v-show="isLogged" @click="signOut()">
            <v-list-item-icon>
              <v-icon color="pink">mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item>

          <v-list-item v-show="!isLogged" to="/login">
            <v-list-item-icon>
              <v-icon color="pink">mdi-login-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Sign in</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <router-view />
  </v-app>
</template>

<script>
import LoginService from "@/services/LoginService";
import FirebaseService from "@/services/FirebaseService";
import check from "underscore";

let firebaseService = new FirebaseService();

let loginService = new LoginService();

export default {
  name: "Main",
  data: () => ({
    drawer: false
  }),
  computed: {
    isLogged() {
      return this.$store.state.isLogged;
    }
  },
  methods: {
    home() {
      this.$router.push("/");
    },
    signOut() {
      loginService.signOut();
      this.$store.commit("applyIsLoged", false);
    }
  },
  mounted() {
    firebaseService
      .getCurrentUser()
      .then(data => {
        if (!check.isNull(data)) {
          this.$store.commit("applyIsLoged", true);
        } else {
          this.$store.commit("applyIsLoged", false);
        }
      })
      .catch(err => {
        this.$store.commit("applyIsLoged", false);
      });
  }
};
</script>

<style lang="stylus">
.drawer {
  background-color: #212121 !important;
}
</style>
