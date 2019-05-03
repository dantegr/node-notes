const chalk = require('chalk');
const yargs = require('yargs');
const notes =  require('./notes');

// customize yargs version

yargs.version('1.1.0');

//Add command

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
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

yargs.parse();

//console.log(yargs.argv);