// console.log("hello: ");
// var name= function () {
//     return  'hoangky';
// };
const fs = require('fs');
const chalk= require('chalk');
const { check } = require('yargs');
const getNote = function(){
    return 'hi, your notes';
} ;
const addNote = (title, body)=>{
    const notes = loadNotes();
    const checkNote= notes.filter((note)=>{
        return note.title === title;
    });
    if(checkNote.length===0){
        notes.push({
            title: title,
            body: body
        });
        console.log(notes);
        saveNotes(notes);
    }
    else{
        console.log(chalk.red.inverse('đã có note!!!'));
        console.log(checkNote);
    }
};
const saveNotes = (notes)=>{
    const dataJSON= JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};
const removeNote = (title)=>{
    const notes = loadNotes();
    const checkNote= notes.filter((note)=>{
        return note.title !== title;
    });
    if(checkNote.length < notes.length){
        console.log(chalk.green.inverse('Đã xóa note!!'));
        saveNotes(checkNote);
    }else{
        console.log(chalk.red.inverse('Xóa thất bại!!'));
    }
};
const listNotes=()=>{
    const notes = loadNotes();
    console.log(chalk.whiteBright.inverse('LIST YOUR NOTES: '));
    notes.forEach((note) => {
        console.log('\t- '+note.title);
    });
};
const readNote= (title)=>{
    const notes = loadNotes();
    const note = notes.find((note)=> note.title === title);

    debugger
    if(note){
        console.log(chalk.inverse(note.title));
        console.log(chalk.green.inverse(note.body));
    }
    else{   console.log(chalk.red.inverse('not found!!'));}
};
const loadNotes= ()=>{
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        console.log(chalk.red('lỗi file'));
        return [];
    }
};
module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};