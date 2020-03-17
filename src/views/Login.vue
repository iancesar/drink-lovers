<template>
  <v-app dark>
    <v-container fill-height fluid>
      <v-row justify="center" no-gutters>
        <v-col class="d-flex justify-center" cols="12">
          <div>
            <span style="font-family: Photoshoot !important; font-size: 50px">Cocktails</span>
          </div>
        </v-col>

        <v-form ref="form" v-model="valid">
          <v-col class="d-flex justify-center" cols="12" style="padding: 12px 12px 0px 12px;">
            <v-text-field label="E-mail" color="pink" required :rules="rules"></v-text-field>
          </v-col>

          <v-col class="d-flex justify-center" cols="12" style="padding: 0px 12px 0px 12px;">
            <v-text-field
              color="pink"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              @click:append="show1 = !show1"
              required
              :rules="rules"
            ></v-text-field>
          </v-col>

          <v-col class="d-flex justify-center" cols="12" style="padding: 10px 12px 0px 12px;">
            <v-btn color="pink" style="width: 100%" @click="login()">Go</v-btn>
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
      rules: [v => !!v || "This Field is required"]
    };
  },
  methods: {
    login() {
      this.$refs.form.validate();
    }
  }
};
</script>

<style lang="stylus">
@font-face {
  font-family: 'Photoshoot';
  src: url('../fonts/Photoshoot.ttf') format('truetype');
}
</style>