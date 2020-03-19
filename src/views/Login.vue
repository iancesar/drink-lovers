<template>
  <v-app dark>
    <notifications group="foo" position="top center" class="mt-7" />
    <v-container fill-height fluid>
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
            <v-btn fab color="#4267B2" class="ml-6" small @click="facebook()">
              <v-icon>fab fa-facebook-f</v-icon>
            </v-btn>
            <v-btn color="#DB4437" fab class="ml-6" small>
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
  </v-app>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      valid: true,
      show1: false,
      loading: {
        signIn: false,
        siginUp: false,
        reseting: false
      },
      resetPanel: false,
      email: "iancesarvidinharego@gmail.com",
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

        let form = {
          email: this.email,
          password: this.password
        };

        this.$axios
          .post("/login/signIn", form)
          .then(data => {
            sessionStorage.token = data.data.token;
            this.loading.signIn = false;
            this.$router.push("/");
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              type: "warn",
              text: err.response.data.message
            });
            this.loading.signIn = false;
          });
      }
    },
    signUp() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        this.loading.siginUp = true;

        let form = {
          email: this.email,
          password: this.password
        };

        this.$axios
          .post("/login/signUp", form)
          .then(data => {
            sessionStorage.token = data.data.token;
            this.loading.siginUp = false;
            this.$router.push("/");
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              type: "warn",
              text: err.response.data.message
            });
            this.loading.siginUp = false;
          });
      }
    },
    resetPassword() {
      let isValid = this.$refs.resetPasswordForm.validate();
      if (isValid) {
        this.loading.reseting = true;

        let form = {
          email: this.emailToReset
        };

        this.$axios
          .post("/login/resetPassword", form)
          .then(data => {
            this.$notify({
              group: "foo",
              text:
                "Instructions to a new password was sent to " +
                this.emailToReset
            });
            this.resetPanel = false;
            this.loading.reseting = false;
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              type: "warn",
              text: err.response.data.message
            });
            this.loading.reseting = false;
          });
      }
    },
    facebook() {
      let firebaseConfig = {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.VUE_APP_FIREBASE_DATA_BASE_URL,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.VUE_APP_FIREBASE_APP_ID,
        measurementId: process.env.VUE_APP_MEASUREMENT_ID
      };

      console.log(firebaseConfig);

      firebase.initializeApp(firebaseConfig);

      let provider = new firebase.auth.FacebookAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
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