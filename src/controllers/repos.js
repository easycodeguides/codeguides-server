const models = require('../models/repos')
const path = require('path')
const execute = require('../helpers/execute')
const con = require('../helpers/mysqlConnect')

const parseCommits = (repoDir, root, idRepo) => {
  const output = execute(`${path.resolve(root, 'scripts/parse-commits.sh')} ${repoDir}`)
  const commits = output.trim().split('\n')
  commits.forEach((commit, id) => {
    con.query('INSERT INTO commits SET hash=?,id_repository=?', [commit, idRepo], (err, result) => {
      if (err) throw err
    })
  })
}

module.exports = {
  add: () => 'added',
  edit: () => 'edited',
  delete: () => 'deleted',
  clone: () => 'cloned',
  get: (url) => {
    // todo - check if repository url format is ok
    models.getRepo(url, exist => {
      if (exist) return

      const exec = require('child_process')
      models.addRepo(url, (id) => {
        const root = path.resolve(__dirname, '../../')
        exec.execSync(path.resolve(__dirname, '../../scripts/clone-project.sh') + ` ${url} ${id} ${root}`).toString()
        const repoDir = path.resolve(root, 'repos', id.toString())
        parseCommits(repoDir, root, id)
      })
    })
  }
}
