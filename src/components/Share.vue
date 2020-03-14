<template>
  <social-sharing
    :url="url"
    :title="description"
    :description="description"
    quote="Cocktails web, the best way to find a cocktail"
    :hashtags="hashtags"
    inline-template
  >
    <!-- twitter-user="vuejs" -->
    <div>
      <network network="facebook">
        <i
          aria-hidden="true"
          class="v-icon notranslate display-2 mdi mdi-facebook"
          style="color:#3b5998;margin-right: 20px;"
        ></i>
      </network>
      <network network="whatsapp">
        <i
          aria-hidden="true"
          class="v-icon notranslate display-2 mdi mdi-whatsapp"
          style="color:#25d366;margin-right: 20px;"
        ></i>
      </network>
      <network network="telegram">
        <i
          aria-hidden="true"
          class="v-icon notranslate display-2 mdi mdi-telegram"
          style="color:#0088cc;margin-right: 20px;"
        ></i>
      </network>
      <network network="twitter">
        <i
          aria-hidden="true"
          class="v-icon notranslate display-2 mdi mdi-twitter"
          style="color:#1da1f2;margin-right: 20px;"
        ></i>
      </network>
    </div>
  </social-sharing>
</template>

<script>
import SocialSharing from "vue-social-sharing";

export default {
  props: ["cocktail"],
  data: () => ({}),
  computed: {
    url() {
      return "http://localhost:8080/#/drinks/" + this.cocktail.id;
    },
    description() {
      return "How to make the " + this.cocktail.name + " cocktail";
    },
    hashtags() {
      return "cocktail," + this.cocktail.name + "Cocktail";
    }
  },
  components: { SocialSharing }
};
</script>