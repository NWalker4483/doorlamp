// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;




app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//  mock data to send to our frontend
let events = 
[
  {
    time: '12:00',
    filename: 'chair.jpeg',
    description: " The First One" 
  },
  {
    time: '12:00',
    filename: 'chair.jpeg',
    description: "The Second One" 
  }
];

app.get('/gallery', (req, res) => {
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

// listen on the port
app.listen(port);