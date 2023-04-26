require("dotenv").config();
const express = require("express");
const path = require("path");

const { save, getAll } = require('./db');

const app = express();
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.get('/glossary', (req, res) => {
  // invoke getAll from models in db.js
  getAll()
    .then((response) => {
      console.log("GET ALL RESPONSE:", response);
      res.status(200).send(response);
    })
});

app.post('/glossary', (req, res) => {
  save(req.body.word, req.body.definition)
    .then((response) => {
    console.log('THE RESPONSE:', response);
    res.status(201).send(response)
    })
    .catch((err) => console.log(err))
});

app.put('/glossary');

app.delete('/glossary');

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
