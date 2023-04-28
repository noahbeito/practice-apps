const db = require('./db');

// there will be different arguments passed to save
// depending on which form is being submitted. may need to adjust
// the parameters
const save = (...vals) => {
  db.queryAsync(
    // save inputs to db
    'INSERT INTO responses VALUES (.....change this........)'
  )
}

const update = () => {
  // find by session_id or id
    // then add data to relevant fields
}

const getAll = () => {
  // get all data stored at session id or id
  // return data
}

module.exports.save = save;
module.exports.getAll = getAll;