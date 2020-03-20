<template>
    <div class="py-3">
      <div class="mb-5"> </div>
      <LoginComponent></LoginComponent>
    </div>
 
</template>
<script>
import LoginComponent from "@/components/Login";
export default {
  name: "LoginBottomSheet",
  components: { LoginComponent }
};
</script>