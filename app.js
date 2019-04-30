const validator = require('validator');
const getNotes =  require('./notes');


const msg = getNotes(' part 1');

console.log(msg);

console.log(validator.isURL('asd.ad'));