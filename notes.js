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
  addNote: addNote
}