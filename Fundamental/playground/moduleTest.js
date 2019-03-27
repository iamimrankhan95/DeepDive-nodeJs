console.log('moduleTest.js started');
var fs = require('fs');
// console.log(module);
module.exports.add = (a, b) => {
    return a + b;
}
function getAllNote() {
    try {
        return JSON.parse(fs.readFileSync('note.json'));
    } catch(ex){
        return [];
    }

}
function saveNote(notes) {
    fs.writeFileSync('note.json', JSON.stringify(notes));
}
var addNote = (title, body) => {
    var notes = getAllNote();
    debugger;
    var note = {
        title,
        body
    }
    console.log(typeof notes);
    // console.log( notes);
     notes.push(note);
     saveNote(notes);
};
var remove = (title,body) => {
    var notes = getAllNote();
    var filteredNotes=notes.filter((note)=>note.title!==title);
    saveNote(filteredNotes);
}
module.exports = {
    addNote,
    remove
}