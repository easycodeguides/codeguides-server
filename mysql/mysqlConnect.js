const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'zare', // change to your pass
  database: 'codeguides'
})
con.connect(err => {
  if (err) throw err
  // eslint-disable-next-line no-console
  console.log('Connected!')
})

module.exports = con
