const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:3000/glossary');
// 2. Set up any schema and models needed by the app
const schema = new mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
});

const Entry = mongoose.model('Entry', schema);
// 3. Export the models
// 4. Import the models into any modules that need them
