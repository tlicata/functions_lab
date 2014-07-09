var countLetters = function (word) {
    var counts = {};
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (isNaN(counts[letter])) {
            // If it's the first time we've seen a letter,
            // initialize its count to 1.
            counts[letter] = 1;
        } else {
            // If the letter already has a corresponding
            // count (meaning we've seen it before), then
            // increment the count.
            counts[letter] += 1;
        }
    }
    return counts;
};

var results = countLetters("all sorts of cool stuff");
for (var key in results) {
    console.log(key + " - " + results[key]);
}
