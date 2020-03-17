<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="stylus">
@font-face {
  font-family: 'Photoshoot';
  src: url('/fonts/Photoshoot.ttf') format('truetype');
}
</style>