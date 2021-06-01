<template>
    <div>
      <div v-for="entry in entries" :key="entry.filename">
    <br>
    <img v-bind:src="'/gallery/images/' + entry.filename"/> 
    <p class="body-gallery">
        {{entry.description}}
    </p>
      </div>

    </div>
</template>

<script>

import ApiService from '@/services/ApiService.js';
export default {
  name: 'Gallery',
  data() {
    // NEW - initialize the event object
    return {
      entries: {}
    }
  },  
  created() {
    this.getGalleryEnries(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getGalleryEnries() {
      // Use the eventService to call the getEventSingle() method
      ApiService.getGalleryEnries(this.$route.params.id)
      .then(
        (entries => {
          this.$set(this, "entries", entries);
        }).bind(this)
      );
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-gallery {
  text-align: left;
  margin-left: 30%;
  margin-right: 30%;
}
</style>
