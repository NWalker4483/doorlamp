<template>
    <div>
        <br>
    <img src="/gallery/chair.jpeg" alt="Desk in an abandoned building">
    <p class="body-gallery">
        Door: How is there internet and a computer but no floor? <br><br>
        Lamp: There's no need. It'd be a waste of money. <br><br>
        Door: It's simple priorities <br><br>
        Lamp: No, just your priorities. Who would want<br>to stand
        on the floor when they can surf on the web?
    </p>
    </div>
</template>

<script>
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

</style>
