const { execQuery } = require('../helpers/mysqlConnect')

// rename to checkForRepo?
const getRepo = async url => {
  const [rows] = await execQuery(
    'SELECT count(*) AS num FROM repositories WHERE remote_url=?',
    [url]
  )

  return rows[0].num
}

const addRepo = async url => {
  const [rows] = await execQuery(
    'INSERT INTO repositories SET remote_url=?',
    [url]
  )
  const id = rows.insertId

  await execQuery('UPDATE repositories SET location=? WHERE id=?', [id, id])
  return id
}

const addCommits = async (commit, idRepo) => {
  await execQuery(
    'INSERT INTO commits SET hash=?,id_repository=?',
    [commit, idRepo]
  )
}

module.exports = {
  getRepo,
  addRepo,
  addCommits
}
