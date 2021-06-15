0%<template>
  <div>
    <div v-for="entry in entries" :key="entry.filename" class="gallery-entry">
      <br />
      <img
        class="gallery-image"
        v-bind:src="'/gallery/images/' + entry.filename"
      />
      <p class="gallery-desc">
        {{ entry.description }}
      </p>
    </div>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService.js";
export default {
  name: "GalleryPage",
  data() {
    return {
      entries: {},
    };
  },
  created() {
    ApiService.getGalleryEntries().then(
      (entries) => (this.entries = entries.data)
    );
  },
  // NEW
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gallery-desc {
  text-align: left;
  margin-left: 30%;
  margin-right: 30%;
}

.gallery-image {
  max-width: 500px;
}

.gallery-entry {
  border-bottom: 1px solid #fff;
  padding: 5px;
  margin: 2px;
  font-size: 17px;
  font-weight: bold;
}
</style>
