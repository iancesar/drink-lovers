<template>
  <v-app>
    <v-app-bar color="orange accent-4" app>
      <span class="display-2 font-weight-light white--text">Drinks Web</span>
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
  })
};
</script>
