// const fs = require('fs');
// // //fs.writeFileSync('test.txt','hello node js'); 
// // fs.appendFileSync('test.txt',' Hoang ky');
// const chalk = require('chalk');
// const validator = require('validator');
// const name = require('./util.js');
// var mess= name();
// console.log(mess);
// //console.log(validator.isEmail(mess+'gmail.com'));
// console.log(chalk.red.bgGrey.bold(mess));


const yargs = require('yargs');
const notes = require('./util.js');
const chalk = require('chalk');
//console.log(process.argv);
//console.log(notes.getNote());

yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'add note',
    builder: {
        title:{
            describe:'adding 1 note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
        console.log(chalk.green.inverse('add 1 note!!'));
    }
});
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
            describe: 'title remove 1 note!!',
            demandOption: true,
            type: 'string'
        },
    },//handler dùng thực hiện chức năng của command line
    handler: function(argv){
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command:'read',
    describe:'read a notes!!',
    builder: {
        title:{
            describe:'read a note!! ',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }

});
yargs.command({
    command:'list',
    describe:'list Notes!!',
    handler(){
        notes.listNotes();
    }
});

yargs.parse();
//console.log(yargs.argv); 

