const models = require('../models/repos')
const path = require('path')

const parseCommits = (repoDir) => {
  console.log(repoDir)
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
        const repoDir = path.resolve(root, 'repos', id)
        parseCommits(repoDir)
      })
    })
  }
}
