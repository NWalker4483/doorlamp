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

app.get('/articles/all', (req, res) => {
  fs.promises.readdir(
    path.resolve(__dirname, article_dir)).then((files) => {
      let galleryFiles = []
      for (let file of files) {
        let data = {
          title: file.split(".")[0],
          date: Date.parse(file.split(".")[1]),
          content: "Not Loaded"
        }
        galleryFiles.push(data);
      }
      res.send(galleryFiles);
    }
    );
});

app.get('/articles/latest', (req, res) => {
  res.send({
    title: "Test Article",
    date: Date.parse("6-23-21"),
    content: "<h2>Loaded</h2>"
  });
});

app.get('/articles/:filename', (req, res) => {
  const name = req.params.filename;
  var article_dir = "public/articles"
  fs.promises.readdir(
    path.resolve(__dirname, article_dir)).then((files) => {
      let galleryFiles = []
      for (let file of files) {
        galleryFiles.push(require(path.resolve(__dirname, article_dir, file)));
      }
      res.send("galleryFiles");
    }
    );
});

// listen on the port
app.listen(port);