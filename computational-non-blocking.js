var child_process = require('child_process');

console.log(1);

var newProcess = child_process.spawn('node', ['_fibonacci.js'], {
    stdio : 'inherit'
});



console.log(2);

//address heavy computational processes by spawning them into seperate node processes so we dont block the main thread process
//one delay could cause a massive delay to the user if multiple requests are made
//use child processes if theres going to be heavy computational processes