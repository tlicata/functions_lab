var merge = function (arrayOne, arrayTwo) {
    var result = [];

    while (arrayOne.length > 0 && arrayTwo.length > 0) {
        var smallest;
        if (arrayOne[0] < arrayTwo[0]) {
            smallest = arrayOne.shift();
        } else {
            smallest = arrayTwo.shift();
        }
        result.push(smallest);
    }

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
