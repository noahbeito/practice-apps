require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");
// console.log('DB: ', db);

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
  // we want to pass along relevant data
  // maybe easiest to send data over in an object
  // and then we can handle that data in the model???? or here
  // id like to avoid 3 different save methods
  // jk post will only be for F1 submission
  // then put requests for F2 and F3

  // then (upon response) send the client
  // status code 201
})

app.put('/responses', (req, res) => {
  // invoke update method from models
   // it will need session_id and new data to add

  // upon success, send 200 code to client.
})

app.get('/responses', (req, res) => {
  // invoke getAll from models
  // then (upon response) repond to the client with
  // 200 status code and the response data
  // ** check formatting of data
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
