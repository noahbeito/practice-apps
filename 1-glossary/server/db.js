const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`);
// 2. Set up any schema and models needed by the app
const schema = mongoose.Schema({
  word: {type: String, unique: true},
  definition: String
});

const Entry = mongoose.model('Entry', schema);


const save = (word, definition) => {
  const filter = { word: word };
  const update = { definition: definition };

  return Entry.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  })
};

const getAll = () => {
  return Entry.find({}, 'word definition')
    .then((response) => {
      return response;
    });
}

const remove = (word) => {
  return Entry.findOneAndDelete({word: word})
}

const edit = (id, word, definition) => {
  const filter = { _id: id };
  const update = {
    word: word,
    definition: definition
  }
  return Entry.findOneAndUpdate(filter, update)
}
// 3. Export the models
module.exports.save = save;
module.exports.getAll = getAll;
module.exports.remove = remove;
module.exports.edit = edit;
// 4. Import the models into any modules that need them
