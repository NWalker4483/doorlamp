<template>
<div>
  
</div>
</template>

<script>
import ApiService from '@/services/ApiService.js';
export default {
  name: 'Archive', 
  data() {
    // NEW - initialize the event object
    return {
      articles: {}
    }
  },  
  created() {
    this.getArticleData(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getArticleData() {
      // Use the eventService to call the getEventSingle() method
      ApiService.getArticleEntries()
      .then(
        (articles => {
          this.$set(this, "articles", articles);
        }).bind(this)
      );
    }
  }
}
</script>

<style scoped>
.article {
  margin-left: 10%;
  margin-right: 10%;
  font-family: "Courier New", Courier, monospace;
  background-color: white;
  color: black;
  padding: 30px;
  font-size: large;
}
</style>