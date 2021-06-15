<template>
<div>
  <ul id="example-1">
  <li v-for="item in Articles" :key="item.message" @click="updateSelected(item)">
    {{ item }}
  </li>
</ul>
</div>
</template>

<script>
import ApiService from '@/services/ApiService.js';
export default {
  name: 'ArchivePage', 
  data() {
    // NEW - initialize the event object
    return {
      Articles: {}
    }
  },  
  created() {
    ApiService.getArticleEntries().then((response) => {this.Articles = response.data}); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
      updateSelected (selectedItem) {
        console.log(selectedItem)
     }
  }
}
</script>

<style scoped>
li 
{
    border-bottom:1px solid #fff;
    padding:5px;
    margin:2px;
    list-style: none;
    font-size: 17px;
    font-weight: bold;
}
li:hover {
  color: rgb(230, 227, 191);
}
</style>