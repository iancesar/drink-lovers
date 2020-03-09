<template>
  <div>
    <!-- <v-container style="margin-top:60px"> -->
    <TopDrinks />
    <DrinksOfWeek />
  </div>
  <!-- </v-container> -->
</template>

<script>
import TopDrinks from "@/components/TopDrinks.vue";
import DrinksOfWeek from "@/components/DrinksOfWeek.vue";

export default {
  name: "Home",
  components: { TopDrinks, DrinksOfWeek }
};
</script>
