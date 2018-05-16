import { extractIntl } from './lib'

const program = require('commander')

program
  .version('0.0.1')
  .usage('[options] <files>')
  .parse(process.argv)

const files = program.args

extractIntl(files)
  .then(messages => {
    console.log(messages)
  })
  .catch(err => {
    console.log(err)
  })
