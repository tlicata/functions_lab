var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var rand = Math.floor(Math.random() * 100);

var ask = function () {
    rl.question("Enter a guess between 1 - 100: ", function (answer) {
        if (rand == answer) {
            rl.close();
        } else {
            console.log("You chose poorly. Try again.");
            ask();
        }
    });
};

ask();

