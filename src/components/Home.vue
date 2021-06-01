<template>
  <div>
    <p>This website is to store my ideas about things I find interesting.</p>
    <h1>this week's essay</h1>
    <Article v-bind:text="latest"></Article>
    
  </div>
</template>

<script>
import ApiService from '@/services/ApiService.js';
import Article from './Article';
export default {
  components: { Article },
  name: "Home",
  mounted(){
        // Use the eventService to call the getEventSingle() method
      ApiService.getLatestArticle()
      .then(
        (latest => {
           this.$set(this, "latest", latest);
          console.log(latest);
        }).bind(this)
      );
  },

   data() {
    return {
      latest: "Failed to Load",
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
