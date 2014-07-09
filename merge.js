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
    while (arrayOne.length > 0 && arrayTwo.length > 0) {
        var smallest;
        if (arrayOne[0] < arrayTwo[0]) {
            smallest = arrayOne.shift();
        } else {
            smallest = arrayTwo.shift();
        }
        result.push(smallest);
    }

    // Once at least one array is empty, we know we can
    // take any remaining numbers from the other array
    // and add them on to the end.
    if (arrayOne.length > 0) {
        result = result.concat(arrayOne);
    } else if (arrayTwo.length > 0) {
        result = result.concat(arrayTwo);
    }

    return result;
};

var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9];
var mergedArray = merge(arr1, arr2);
console.log("mergedArray: ", mergedArray);
