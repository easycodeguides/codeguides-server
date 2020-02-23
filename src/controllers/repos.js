const { getRepo, addRepo, addCommits } = require('../models/repos')
const path = require('path')
const execute = require('../helpers/execute')

const parseCommits = (repoDir, root, idRepo) => {
  const output = execute(
    `${path.resolve(root, 'scripts/parse-commits.sh')} ${repoDir}`
  )
  const commits = output.trim().split('\n')

  commits.forEach(async commit => {
    await addCommits(commit, idRepo)
  })
}

module.exports = {
  add: () => 'added',
  edit: () => 'edited',
  delete: () => 'deleted',
  clone: () => 'cloned',
  get: async url => {
    // todo - check if repository url format is ok
    const rows = await getRepo(url)

    if (rows) return

    const exec = require('child_process')
    const id = await addRepo(url)
    const root = path.resolve(__dirname, '../../')

    exec
      .execSync(
        path.resolve(__dirname, '../../scripts/clone-project.sh') +
          ` ${url} ${id} ${root}`
      )
      .toString()
    const repoDir = path.resolve(root, 'repos', id.toString())

    parseCommits(repoDir, root, id)
  }
}
