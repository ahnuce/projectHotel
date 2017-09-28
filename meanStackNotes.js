var goodbye = require('./talk/goodbye');
//if you have an index.js within a folder you dont have specify the name of the file itself you just need the name of the parent folder

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

console.log("1: Start app");

var holdOn = setTimeout(function() {
    console.log("2: In the setTimeout");
}, 1000);

console.log("3: End app");
//example of how to use setTimeout to delay certain processes

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var fs = require('fs');

console.log('Going to get a file');
var file = fs.readFileSync('readFileSync.js');
console.log('Got the file');

console.log('App continues...');


//example of how to use fs file system load files synchroniously where the last console log has to wait until the file is loaded

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var fs = require('fs');

var onFileLoad = function(err, file){
    console.log('Got the file');
};
console.log('Going to get a file');
fs.readFile('readFileSync.js', onFileLoad);


console.log('App continues...');

//example of fs where everything is loaded asynchroniously so everything is loaded even if something is delayed and that will not stop everything else from loading

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var recursive = function(n){
    if(n <= 2){
        return 1;
    } else {
        return recursive(n-1) + recursive(n-2);
    }
};

console.log(recursive(42));

//certain processes use heavy computational resources and could slow down users when there are multiple requests being made ie. this fibonacci equation.

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

console.log(1);

require('./_fibonacci.js');

console.log(2);
//when running this the first console log will run then the fibonacci function will take time to compute then the second console log will run

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio : 'inherit'
});



console.log(2);

//address heavy computational processes by spawning them into seperate node processes so we dont block the main thread process
//one delay could cause a massive delay to the user if multiple requests are made
//use child processes if theres going to be heavy computational processes

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/


//with npm it can distinguish dependancies that you use for development and for production
//testing frameworks or task runners in development
//npm install packagename --save-dev
//it will save as dev dependancies under the node modules folder and in the package.json

//if you didnt have the node modules folder and wanted to install the dependancies listed in the package.json you could just do npm install

//to just install the production dependancies you could just do npm install --production as well

//to not get the warnings when you use npm you should create a readme.md file and have some text in there

//let npm manage your packages when moving between environments like windows to unix so dont upload your node modules folder and let them install their own dependancies
//so create a .gitignore and add node_modules into the file
