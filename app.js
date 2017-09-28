require('./instantHello');
var goodbye = require('./talk/goodbye');
//if you have an index.js within a folder you dont have specify the name of the file itself you just need the name of the parent folder
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello('Anusone');

var answer = question.ask("what is the meaning of life?");
console.log(answer);



goodbye();


