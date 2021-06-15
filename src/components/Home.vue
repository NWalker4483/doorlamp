<template>
  <div>
    <p>This website is to store my ideas about things I find interesting.</p>
    <h1>this week's essay</h1>
    <div class="article">{{latest}}</div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  components: { },
  name: "Home",
  created() {
    ApiService.getLatestArticle().then((response) => {
      this.latest = response.data;
    });
  },
  data() {
    return {
      latest: {},
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
