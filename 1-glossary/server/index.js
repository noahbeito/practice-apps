require("dotenv").config();
const express = require("express");
const path = require("path");

const { save, getAll, remove, edit } = require('./db');

const app = express();
app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));


app.get('/glossary', (req, res) => {
  getAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
    })
});

app.post('/glossary', (req, res) => {
  save(req.body.word, req.body.definition)
    .then(() => {
    res.status(201).send();
    })
    .catch((err) => {
      console.log(err)
    })
});

app.put('/glossary', (req, res) => {
  edit(req.body._id, req.body.word, req.body.definition)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
    })
});

app.delete('/glossary', (req, res) => {
  remove(req.body.word)
    .then(() => {
      res.status(200).send()
    })
    .catch((err) => {
      console.log(err)
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
