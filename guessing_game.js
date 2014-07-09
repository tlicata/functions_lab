// Have your program pick a random number between
// 1 - 100. Prompt the user for guesses and compare
// their guess to the random value.  Make them keep
// guessing until they guess correctly.

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var rand = Math.floor(Math.random() * 100);

var ask = function () {
    rl.question("Enter a guess between 1 - 100: ", function (answer) {
        if (rand == answer) {
            console.log("You chose wisely. Thank you.");
            rl.close();
        } else {
            console.log("You chose poorly. Try again.");
            ask();
        }
    });
};

ask();

