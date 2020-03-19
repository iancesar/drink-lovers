<template>
  <v-app dark>
    <notifications group="foo" position="top center" classes="my-style" />
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
            <v-btn color="pink" style="width: 100%" @click="login()">Sign in</v-btn>
          </v-col>

          <v-col class="d-flex justify-center" cols="12" style="padding: 12px 12px 0px 12px;">or</v-col>

          <v-col class="d-flex justify-center" cols="12" style="padding: 12px 12px 0px 12px;">
            <v-btn fab>
              <v-icon>fas fa-user-plus</v-icon>
            </v-btn>
            <v-btn fab color="#4267B2" class="ml-8">
              <v-icon>fab fa-facebook-f</v-icon>
            </v-btn>
            <v-btn color="#DB4437" fab class="ml-8">
              <v-icon>mdi-google</v-icon>
            </v-btn>
          </v-col>
        </v-form>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      valid: true,
      show1: false,
      email: "iancesarvidin2harego@gmail.com",
      password: "123456",
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
    login() {
      let isValid = this.$refs.form.validate();
      if (isValid) {
        let form = {
          email: this.email,
          password: this.password
        };

        this.$axios
          .post("http://localhost:5000/login/signIn", form)
          .then(data => {
            console.log(data);
          })
          .catch(err => {
            this.$notify({
              group: "foo",
              text: err.response.data.message
            });
          });
      }
    }
  }
};
</script>

<style lang="stylus">
@font-face {
  font-family: 'Photoshoot';
  src: url('../fonts/Photoshoot.ttf') format('truetype');
}

.my-style {
  padding: 10px;
  margin: 10px 0 10px 5px;
  font-size: 14px;
  color: #ffffff;
  background: #44A4FC;
  border-left: 5px solid #ffffff;
  background: #272727;
  border-left-color: #121212;
}
</style>