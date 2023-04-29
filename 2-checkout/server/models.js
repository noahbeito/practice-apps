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

const updateF2 = (session_id, ship1, ship2, city, state, zip, phone_number) => {
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

const updateF3 = (session_id, cc_number, exp_date, cvv, billing_zip) => {
  return db.queryAsync(
    `UPDATE responses
     SET cc_number = ?,
         cc_expire_date = ?,
         cvv = ?,
         billing_zip = ?
     WHERE session_id = ?`,
     [cc_number, exp_date, cvv, billing_zip, session_id]
  )
}

const getAll = (session_id) => {
  return db.queryAsync(
    `SELECT * FROM responses WHERE session_id = ?`,
    [session_id]
  )
}

module.exports.save = save;
module.exports.getAll = getAll;
module.exports.updateF2 = updateF2;
module.exports.updateF3 = updateF3;