<template>
  <div>
    <p>This website is to store my ideas about things I find interesting.</p>
    <h1>this week's essay</h1>
    <Article v-bind:text="latest"></Article>
  </div>
</template>

<script>
import Article from './Article';
export default {
  components: { Article },
  name: "Home",
   data() {
    return {
      latest: "feweaerw",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
