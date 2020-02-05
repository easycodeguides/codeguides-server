const con = require('./../../mysql/mysqlConnect')

// pseudocode
//
// function getUrl(code) {
//   // check if there is in database entry with this code, if there is and if it's not expired we will return link
//   con.query("SELECT * FROM urls WHERE code=?", [code], (err, rows) => {
//     if(err) {
//       throw err;
//     } else if(rows.length > 0) {
//       return rows[0].url;
//     }
//   });
//   return "";
// }

module.exports = {
  add: (req, res) => {
    // eslint-disable-next-line no-console
    console.log(req.body)
    const sql = 'INSERT INTO tutorials (name, type, id_user) VALUES ?'
    const values = [
      [req.body['tutorial-name'], req.body['main-category'], '1']
    ]

    con.query(sql, [values], (err, result) => {
      if (err) throw err

      // eslint-disable-next-line
      console.log('Number of records inserted: ' + result.affectedRows)
    })

    return { status: 'added', ...req.body }
  },
  edit: () => 'edited',
  delete: () => 'deleted'
}
