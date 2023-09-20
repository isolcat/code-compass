let arr = [1, [2, [3, 4, 5]]];
function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
flatten(arr);  //  [1, 2, 3, 4，5]
console.log(flatten(arr))

// ES6的flat
const arr1 = [1, [1, 2], [1, 2, 3, 4, 5]]
console.log(arr1.flat(Infinity));