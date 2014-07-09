// Ok, now for something a little different (and difficult).

// Write a function, called isPrime, that takes one
// argument, a number, and returns true if it's a prime
// number and false if it is not.

var isPrime = function (num) {
    if (num < 2) {
        // 2 is the smallest prime.
        // Negative numbers cannot be prime.
        return false;
    }
    var sqrt = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= sqrt; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

// Below here we test our solution.
var check = function (num, prime) {
    if (isPrime(num) === prime) {
        console.log("OK");
    } else {
        var is = prime ? " is" : " isn't";
        console.log("Uh oh, " + num + is + " prime :(");
    }
};

check(1, false);
check(2, true);
check(3, true);
check(4, false);
check(5, true);
check(6, false);
check(7, true);
check(8, false);
check(9, false);
check(10, false);
check(11, true);
check(12, false);
check(13, true);
check(14, false);
check(15, false);
check(16, false);
check(17, true);
check(19, true);
check(23, true);
check(29, true);
check(30, false);
check(31, true);
check(37, true);
check(41, true);
check(42, false);
check(43, true);
check(47, true);
