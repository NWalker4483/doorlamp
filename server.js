// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

const article_dir = "public/articles"

const gallery_dir = "public/gallery/descriptions"

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/gallery/all', (req, res) => {
  fs.promises.readdir(
    path.resolve(__dirname, gallery_dir)).then((files) => {
      let galleryFiles = []
      for (let file of files) {
        galleryFiles.push(require(path.resolve(__dirname, gallery_dir, file)));
      }
      res.send(galleryFiles);
    }
    );
});

app.get('/gallery/:id', (req, res) => {
  var gallery_dir = "public/gallery/descriptions"
  fs.promises.readdir(
    path.resolve(__dirname, gallery_dir)).then((files) => {
      let galleryFiles = []
      for (let file of files) {
        galleryFiles.push(require(path.resolve(__dirname, gallery_dir, file)));
      }
      res.send(galleryFiles);
    }
    );
});

loadArticles = function () {
  return new Promise((resolve, reject) => {
  fs.promises.readdir(
    path.resolve(__dirname, article_dir)).then((files) => {
      let galleryFiles = []
      for (let file of files) {
        let data = {
          title: file.split(".")[0],
          date: new Date(file.split(".")[1]),
          content: null,
          filename: file
        }
        galleryFiles.push(data);
      }
      resolve(galleryFiles);
    }
    );
})}

loadArticlesContent = function (article_json) {

}

app.get('/articles/all', (req, res) => {
  loadArticles().then(articles => res.send(articles));
});

function custom_sort(a, b) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

app.get('/articles/latest', (req, res) => {
  loadArticles().then(articles => res.send(
    articles.sort(custom_sort)[0]));
});

app.get('/articles/:filename', (req, res) => {
  const name = req.params.filename;
  var article_dir = "public/articles"
  fetch(path.resolve(__dirname, article_dir, filename))
});

// listen on the port
app.listen(port);