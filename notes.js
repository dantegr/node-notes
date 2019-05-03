const chalk = require('chalk');
const fs = require('fs');

const getNotes = function (msg) {
  return 'Your notes...' + msg ;
};


const addNote =function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter( function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body
    });
  
    saveNotes(notes);
    console.log('saved');
  } else {
    console.log('This note exists');
  }

};

const removeNote = function (title) {
  const notes = loadNotes();

  const notesToKeep = notes.filter(function (note){
    return note.title !== title;
  });

  if (notesToKeep.length !== notes.length){
    console.log(chalk.bgGreen.bold('Note remnoved!'))
  } else {
    console.log(chalk.bgRed.bold('Note not found!'))
  }

  saveNotes(notesToKeep);
  console.log(title);
 
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch (e) {
    return [];
  }
  
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote:removeNote
};