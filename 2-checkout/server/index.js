require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// import models methods
const { save, update } = require("./models");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.use(express.json());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/responses', (req, res) => {
  // invoke save method from models
  let session_id = req.session_id;
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;

  save(session_id, name, email, password)
   .then((response) => {
     res.status(201).send();
   })
   .catch((err) => {
    res.status(500).send('error saving data');
   })
})

// invoke update method from models
 // it will need session_id and new data to add
// upon success, send 200 code to client.
app.put('/responses', (req, res) => {
  let session_id = req.session_id;
  let ship1 = req.body.ship1;
  let ship2 = req.body.ship2;
  let city = req.body.city;
  let state = req.body.state;
  let zip = req.body.zip;
  let phone_number = req.body.phone_number;

  update(ship1, ship2, city, state, zip, phone_number, session_id)
    .then(() => {
      console.log('successfully upated address & number')
    })
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send(err);
    })
})

app.get('/responses', (req, res) => {
  // invoke getAll from models
  // then (upon response) repond to the client with
  // 200 status code and the response data
  // ** check formatting of data
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
