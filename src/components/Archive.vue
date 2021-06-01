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
      Articles: {}
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
        (Articles => {
          this.$set(this, "Articles", Articles);
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