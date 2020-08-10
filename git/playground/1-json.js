 const fs = require('fs')

// const book ={
//     title: 'hello node.js',
//     author: 'learn file JSON'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const bookDATA = JSON.parse(bookJSON);
// console.log(bookDATA.title);
// fs.writeFileSync('1-json.json',bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');//type buffer
const dataJSON = dataBuffer.toString();
console.log(dataJSON);
const userJSON = JSON.parse(dataJSON);//type object
console.log(userJSON);
userJSON.name = 'hoang ky';
userJSON.age =21;

const user = JSON.stringify(userJSON);// type String-- chuyeenr sang kieuer JSON
console.log(user);

//fs.writeFileSync('1-json.json',user);
