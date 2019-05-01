const chalk = require('chalk');
const yargs = require('yargs');
const getNotes =  require('./notes');

// customize yargs version

yargs.version('1.1.0');

//Add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note!');
  }
});

//Remove command

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  handler: function () {
    console.log('Removing the note!');
  }
});

//List command

yargs.command({
  command: 'list',
  describe: 'list all notes',
  handler: function () {
    console.log('Listin all notes');
  }
});

//Read commmand

yargs.command({
  command: 'read',
  describe: 'read a note',
  handler: function () {
    console.log('Reading the note!');
  }
});



console.log(yargs.argv);