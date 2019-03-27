console.log('beginning json.js');
var fs = require('fs');
const c=require('../commonFiles/common.js');
// var personString ='{"name":"imran", "age":25}';
// var person=JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name);
var originalNote={
    title:'some title',
    body:'some body'
};
var originalNoteString=JSON.stringify(originalNote);
fs.writeFileSync('note.json',originalNoteString);
c.p('json saved');

var noteStringReading=fs.readFileSync('note.json');
var note=JSON.parse(noteStringReading);
c.p(note.title);


