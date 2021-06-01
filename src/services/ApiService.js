import axios from "axios"

export default {
  async getData() {
    let res = await axios.get("http://localhost:3000/events");
    return res.data;
  },
  
  async getEvents() {
    let res = await axios.get("http://localhost:3000/events");
    return res.data;
  },

  async getGalleryEnries() {
    let res = await axios.get("http://localhost:3000/gallery/all");
    return res.data;
  },
  
  async getArticleEntries() {
    let res = await axios.get("http://localhost:3000/articles/all");
    return res.data;
  },

  async getLatestArticle() {
    let res = await axios.get("http://localhost:3000/articles/all");
    return res.data;
  },
  async getArticle(eventId) {
    let res = await axios.get("http://localhost:3000/articles/" + eventId);
    return res.data;
  }

}