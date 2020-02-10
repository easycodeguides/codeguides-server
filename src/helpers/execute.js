const childProcess = require('child_process')

function execute (cmd) {
  try {
    return childProcess.execSync(cmd).toString()
  } catch (error) {
    const { status, message, stderr, stdout } = error
    console.error(status, message, stderr, stdout)
  }
}

module.exports = execute
