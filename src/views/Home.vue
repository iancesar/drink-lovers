<template>
  <div>
    <TopDrinks />
    <DrinksOfWeek />
  </div>
</template>

<script>
import TopDrinks from "@/components/home/TopDrinks.vue";
import DrinksOfWeek from "@/components/home/DrinksOfWeek.vue";

export default {
  name: "Home",
  components: { TopDrinks, DrinksOfWeek }
};
</script>
