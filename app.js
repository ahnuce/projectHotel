require('./instantHello');
var goodbye = require('./talk/goodbye');
//if you have an index.js within a folder you dont have specify the name of the file itself you just need the name of the parent folder
var talk = require('./talk');
talk.intro();
talk.hello('Anusone');
goodbye();