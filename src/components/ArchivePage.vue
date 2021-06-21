<template>
<div>

     <!-- <md-table v-model="Articles" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Users</h1>
      </md-table-toolbar>

      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.title }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.date }}</md-table-cell>
        <md-table-cell md-label="Email" md-sort-by="email">{{ item.content }}</md-table-cell>
      </md-table-row>
    </md-table> -->

  <ul id="example-1">
  <li v-for="item in Articles" :key="item.message" @click="updateSelected(item)">
    {{ item.title }} | {{item.date | formatDate}}
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