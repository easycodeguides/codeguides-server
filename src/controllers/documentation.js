const fs = require('fs')
const path = require('path')
const showdown = require('showdown')

module.exports = () => {
  const readme = path.resolve(__dirname, '../../README.md')
  const content = fs.readFileSync(readme).toString()
  const converter = new showdown.Converter()
  return converter.makeHtml(content)
}
