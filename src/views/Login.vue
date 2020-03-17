<template>
  <v-app dark>
    <v-container fill-height fluid>
      <v-row justify="center" no-gutters>
        <v-col class="d-flex justify-center" cols="12">
          <div>
            <span style="font-family: Photoshoot !important; font-size: 45px">Cocktails</span>
          </div>
        </v-col>

        <v-form>
          <v-col class="d-flex justify-center" cols="12" style="padding: 0px 12px 0px 12px;">
            <v-text-field label="E-mail" color="pink"></v-text-field>
          </v-col>

          <v-col class="d-flex justify-center" cols="12" style="padding: 0px 12px 0px 12px;">
            <v-text-field
              color="pink"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Passwrod"
              @click:append="show1 = !show1"
            ></v-text-field>
          </v-col>

          <v-col class="d-flex justify-center" cols="12" style="padding: 10px 12px 0px 12px;">
            <v-btn color="pink" style="width: 100%">Go</v-btn>
          </v-col>
          <v-col class="d-flex justify-center" cols="12" style="padding: 7px 12px 0px 12px;">
            <v-btn fab color="#4267B2" small>
              <i class="fab fa-facebook-f"></i>
            </v-btn>
            <v-btn color="#DB4437" fab small class="ml-3">
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
      show1: false
    };
  }
};
</script>

<style lang="stylus">
@font-face {
  font-family: 'Photoshoot';
  src: url('../fonts/Photoshoot.ttf') format('truetype');
}
</style>