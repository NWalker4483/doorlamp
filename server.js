// server/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
  res.send(events);
});

// listen on the port
app.listen(port);