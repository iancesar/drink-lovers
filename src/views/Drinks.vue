<template>
  <DrinksList />
</template>

<script>
// @ is an alias to /src
import DrinksList from "@/components/DrinksList.vue";

export default {
  name: "Drinks",
  mounted() {
    // console.log(this.$route.params.search);
  },
  components: {
    DrinksList
  }
};
</script>
