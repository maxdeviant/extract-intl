const program = require('commander');

program
  .version('0.0.1')
  .usage('[options] <files>')
  .parse(process.argv);

const files = program.args;

console.log(files)
