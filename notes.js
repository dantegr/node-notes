const chalk = require('chalk');
const fs = require('fs');

const getNotes = (msg) => {
  return 'Your notes...' + msg ;
};


const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);
  
  debugger;
  
  if (!duplicateNote){
    notes.push({
      title: title,
      body: body
    });
  
    saveNotes(notes);
    console.log(chalk.bgGreen.bold('saved'));
  } else {
    console.log(chalk.bgRed.bold('This note exists'));
  }

};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => {
    return note.title !== title;
  });

  if (notesToKeep.length < notes.length){
    console.log(chalk.bgGreen.bold('Note remnoved!'))
  } else {
    console.log(chalk.bgRed.bold('Note not found!'))
  }

  saveNotes(notesToKeep);
  console.log(title);
 
};

const listNotes = () => {
const notes = loadNotes();

console.log(chalk.blue('Your notes:'))
notes.forEach((note) => {
  console.log(note);
});

};

const readNote = (title) => {
  const notes = loadNotes();
  
  const foundNote = notes.find((note) => {
    return note.title === title;
  });

  if(foundNote) {
    console.log(chalk.green(foundNote.title) + ' ' + foundNote.body);
  } else {
    console.log(chalk.red('No note found'));
  };
  
};
  

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  }catch (e) {
    return [];
  }
  
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};


module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote:removeNote,
  listNotes:listNotes,
  readNote:readNote
};