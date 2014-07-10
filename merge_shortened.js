var merge = function (arrayOne, arrayTwo) {
    var result = [];
    while (arrayOne.length && arrayTwo.length) {
        result.push(arrayOne[0] < arrayTwo[0] ? arrayOne.shift() : arrayTwo.shift());
    }
    return result.concat(arrayOne).concat(arrayTwo);
};

var arr1 = [3,6,11];
var arr2 = [2,4,5,8,9];
var mergedArray = merge(arr1, arr2);
console.log("mergedArray: ", mergedArray);
