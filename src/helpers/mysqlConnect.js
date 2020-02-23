const mysql = require('mysql2/promise')

let conn
const connect = async () => {
  try {
    conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DB
    })
    console.info('Connected!')
  } catch (e) {
    console.info('error---------------------------------!')
    throw e
  }
}

connect()

const execQuery = async (query, args) => {
  try {
    // returns array [rows, fields]
    const result = await conn.execute(query, args)

    return result
  } catch (e) {
    console.info('Query not executed!', query, args)
    throw e
  }
}

module.exports = {
  conn,
  execQuery
}
