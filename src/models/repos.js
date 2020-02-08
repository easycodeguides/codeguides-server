const con = require('../helpers/mysqlConnect')

function getRepo (url, callback) {
  con.query('SELECT count(*) AS num FROM repositories WHERE remote_url=?', [url], (err, rows) => {
    if (err) throw err
    callback(rows[0].num)
  })
}

function addRepo (url, callback) {
  con.query(`
    INSERT INTO repositories
    SET remote_url=?
  `, [url], (err, result) => {
    if (err) throw err
    const id = result.insertId
    con.query('UPDATE repositories SET location=? WHERE id=?',
      [id, id],
      (err2) => {
        if (err2) throw err2
        callback(id)
      })
  })
  return []
}

module.exports = { getRepo, addRepo }
