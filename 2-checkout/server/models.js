const db = require('./db');

// there will be different arguments passed to save
// depending on which form is being submitted. may need to adjust
// the parameters
const save = (session_id, name, email, password) => {
  return db.queryAsync(
    // save inputs to db
    `INSERT INTO responses (session_id, name, email, password) VALUES (?, ?, ?, ?)`, [session_id, name, email, password]
  )
}

const update = (ship1, ship2, city, state, zip, phone_number, session_id) => {
  // find by session_id or id
    // then add data to relevant fields
  return db.queryAsync(
    `UPDATE responses
     SET ship_address_line_1 = ?,
         ship_address_line_2 = ?,
         ship_city = ?,
         ship_state = ?,
         ship_zip = ?,
         phone_number = ?
     WHERE responses.session_id = ?`,
    [ship1, ship2, city, state, zip, phone_number, session_id]
  )
}

const getAll = () => {
  // get all data stored at session id or id
  // return data
}

module.exports.save = save;
module.exports.getAll = getAll;
module.exports.update = update;