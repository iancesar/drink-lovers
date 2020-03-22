<template>
  <v-container fill-height fluid>
    <notifications group="foo" position="top center" class="mt-7" />
    <v-row justify="center" no-gutters>
      <v-col class="d-flex justify-center" cols="12">
        <div>
          <span style="font-family: Photoshoot !important; font-size: 50px">Cocktails</span>
        </div>
      </v-col>

      <v-form ref="form" v-model="valid">
        <v-col class="d-flex justify-center" cols="12" style="padding: 12px 12px 0px 12px;">
          <v-text-field
            label="E-mail"
            type="email"
            v-model="email"
            color="pink"
            required
            :rules="rules.email"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex justify-center" cols="12" style="padding: 0px 12px 0px 12px;">
          <v-text-field
            label="Password"
            v-model="password"
            required
            color="pink"
            :rules="rules.password"
            :type="show1 ? 'text' : 'password'"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
          ></v-text-field>
        </v-col>

        <v-col class="d-flex justify-center" cols="12" style="padding: 10px 12px 0px 12px;">
          <v-btn
            color="pink"
            style="width: 100%"
            @click="signIn()"
            :loading="loading.signIn"
          >Sign in</v-btn>
        </v-col>

        <v-col class="d-flex justify-center" cols="12" style="padding: 12px 12px 0px 12px;">or</v-col>

        <v-col class="d-flex justify-center" cols="12" style="padding: 12px 12px 0px 12px;">
          <v-btn fab :loading="loading.siginUp" @click="signUp()" small>
            <v-icon size="19px">fas fa-user-plus</v-icon>
          </v-btn>
          <v-btn
            fab
            color="#4267B2"
            class="ml-6"
            small
            @click="facebook()"
            :loading="loading.facebook"
          >
            <v-icon>fab fa-facebook-f</v-icon>
          </v-btn>

          <v-btn color="#DB4437" fab class="ml-6" small @click="google()" :loading="loading.google">
            <v-icon>mdi-google</v-icon>
          </v-btn>
        </v-col>
      </v-form>

      <v-col class="d-flex justify-center mt-8" cols="12">
        <v-bottom-sheet v-model="resetPanel" inset>
          <template v-slot:activator="{ on }">
            <v-btn text small v-on="on">Reset Password</v-btn>
          </template>
          <v-sheet>
            <v-form ref="resetPasswordForm">
              <v-row class="d-flex justify-center">
                <v-col cols="10">
                  <v-text-field
                    label="Email"
                    v-model="emailToReset"
                    color="pink"
                    required
                    :rules="rules.email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" class="text-center">
                  <v-btn
                    text
                    color="pink"
                    :loading="loading.reseting"
                    @click="resetPassword()"
                  >Reset Password</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-sheet>
        </v-bottom-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import firebase from "firebase/app";
import "firebase/auth";
import FirebaseService from "@/services/FirebaseService";
import LoginService from "@/services/LoginService";
import CocktailService from "@/services/CocktailService";
import check from "underscore";

let loginService = new LoginService();
let cocktailService = new CocktailService();

export default {
  name: "LoginComponent",
  data() {
    return {
      valid: true,
      show1: false,
      loading: {
        signIn: false,
        siginUp: false,
        reseting: false,
        facebook: false,
        google: false
      },
      resetPanel: false,
      email: "",
      emailToReset: "",
      password: "",
      rules: {
        email: [v => !!v || "Email is required"],
        password: [
          v => !!v || "Password is required",
          v => v.length >= 6 || "Password must be more than 6 characters"
        ]
      }
    };
  },
  methods: {
    signIn() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.loading.signIn = true;

        loginService
          .signIn(this.email, this.password)
          .then(data => {
            this.afterLogin();
            this.loading.signIn = false;
            this.redirectToHome();
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              type: "warn",
              text: err.message
            });
            this.loading.signIn = false;
          });
      }
    },
    signUp() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.loading.siginUp = true;

        loginService
          .signUp(this.email, this.password)
          .then(data => {
            this.afterLogin();
            this.loading.siginUp = false;
            this.redirectToHome();
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              type: "warn",
              text: err.message
            });
            this.loading.siginUp = false;
          });
      }
    },
    resetPassword() {
      let isValid = this.$refs.resetPasswordForm.validate();
      if (isValid) {
        this.loading.reseting = true;

        loginService
          .recovery(this.emailToReset)
          .then(data => {
            this.$notify({
              group: "foo",
              text:
                "Instructions to a new password was sent to " +
                this.emailToReset
            });
            this.resetPanel = false;
            this.loading.reseting = false;
            this.emailToReset = "";
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              type: "warn",
              text: err.message
            });
            this.loading.reseting = false;
          });
      }
    },
    facebook() {
      this.loading.facebook = true;
      let provider = new firebase.auth.FacebookAuthProvider();

      loginService
        .signInSocial(provider)
        .then(result => {
          this.afterLogin();
          this.loading.facebook = false;
          this.redirectToHome();
        })
        .catch(err => {
          this.loading.facebook = false;
          let code = err.code;
          let msg = err.message;
          this.$notify({
            group: "foo",
            type: "warn",
            text: msg,
            duration: 7000
          });
        });
    },
    google() {
      this.loading.google = true;
      let provider = new firebase.auth.GoogleAuthProvider();

      loginService
        .signInSocial(provider)
        .then(result => {
          this.afterLogin();
          this.loading.google = false;
          this.redirectToHome();
        })
        .catch(err => {
          this.loading.google = false;
          let code = err.code;
          let msg = err.message;
          this.$notify({
            group: "foo",
            type: "warn",
            text: msg,
            duration: 7000
          });
        });
    },
    afterLogin() {
      //Check if the user tried add a new cocktail to favorit not logged
      let cocktailToBeLoved = this.$store.state.cocktailToBeLoved;
      if (!check.isEmpty(cocktailToBeLoved)) {
        cocktailService.loveIt(cocktailToBeLoved);
        this.$store.commit("applyCocktailToBeLoved", {});
        this.$store.commit("changeCocktailSheet", false);
      }
    },
    redirectToHome() {
      let name = this.$route.name;
      if (check.isEqual(name, "Login")) {
        this.$router.push("/");
      }
    }
  },
  mounted() {}
};
</script>

<style lang="stylus">
@font-face {
  font-family: 'Photoshoot';
  src: url('../fonts/Photoshoot.ttf') format('truetype');
}
</style>