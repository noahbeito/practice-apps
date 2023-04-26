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
  const filter = { word: word};
  const update = { definition: definition};

  return Entry.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true
  })
  .then(() => {
    return getAll()
  });
};

const getAll = () => {
  return Entry.find({}, 'word definition')
    .then((response) => {
      return response;
    });
}
// 3. Export the models
module.exports.save = save;
module.exports.getAll = getAll;
// 4. Import the models into any modules that need them
