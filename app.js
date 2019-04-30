const chalk = require('chalk');
const getNotes =  require('./notes');


const msg = getNotes(' part 1');

console.log(msg);

console.log(chalk.green('Success'));

