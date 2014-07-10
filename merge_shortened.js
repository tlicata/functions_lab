// Merge two sorted arrays into one longer sorted array.
var merge = function (arrayOne, arrayTwo) {
    // Declare a variable that we will use to
    // hold the newly merged array.
    var result = [];

    // As long as neither array argument is empty,
    // we need to compare the minimum number from
    // each (which will be in the first position
    // since we know the arrays are sorted). We
    // remove the smallest element from its array
    // and add it to our accumulated results array.
    while (arrayOne.length && arrayTwo.length) {
        result.push(arrayOne[0] < arrayTwo[0] ? arrayOne.shift() : arrayTwo.shift());
    }

    // Once at least one array is empty, we know we can
    // take any remaining numbers from the other array
    // and add them on to the end.
    return result.concat(arrayOne).concat(arrayTwo);
};

var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9];
var mergedArray = merge(arr1, arr2);
console.log("mergedArray: ", mergedArray);
