module.exports = {
  add: () => 'added',
  edit: () => 'edited',
  delete: () => 'deleted',
  clone: () => 'cloned',
  get: (repo) => {
    const exec = require('child_process')
    return exec.execSync(`../scripts/clone-project.sh ${repo} tmpdir`).toString()
  }
}
