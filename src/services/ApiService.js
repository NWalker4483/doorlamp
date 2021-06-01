import axios from "axios"

export default {
  async getGalleryEnries() {
    let res = await axios.get("http://localhost:3000/gallery/all");
    return res.data;
  },
  
  async getArticleEntries() {
    let res = await axios.get("http://localhost:3000/articles/all");
    return res.data;
  },

  async getLatestArticle() {
    let res = await axios.get("http://localhost:3000/articles/latest");
    return res.data;
  },
  async getArticle(eventId) {
    let res = await axios.get("http://localhost:3000/articles/" + eventId);
    return res.data;
  }

}