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
      ApiService.getEventSingle(this.$route.params.id)
      .then(
        (articles => {
          this.$set(this, "articles", articles);
        }).bind(this)
      );
    }
  }
}
</script>

