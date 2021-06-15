import axios from "axios"

export default {
  getGalleryEntries() {
    return axios.get("http://localhost:3000/gallery/all");
  },
  getArticleEntries() {
    return axios.get("http://localhost:3000/articles/all"); 
  },
  getLatestArticle() {
    return axios.get("http://localhost:3000/articles/latest");
  },
  getArticle(filename) {
    return axios.get("http://localhost:3000/articles/" + filename);
  }
}