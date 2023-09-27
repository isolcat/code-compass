function reduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < arr.length; i++) {
        if (accumulator !== undefined) {
            // 调用回调函数，将当前元素和累加器作为参数传递
            // 将回调函数的返回值作为新的累加器值
            accumulator = callback(accumulator, arr[i], i, arr);
        } else {
            // 初始情况下，将第一个元素作为累加器的初始值
            accumulator = arr[i];
        }
    }

    return accumulator;  // 返回最终的累加器值
}

// 示例用法
const arr = [1, 2, 3, 4, 5];

// 计算数组元素的总和
const sum = reduce(arr, (acc, curr) => acc + curr, 0);
console.log('Sum:', sum); // 输出: 15

// 计算数组元素的乘积
const product = reduce(arr, (acc, curr) => acc * curr, 1);
console.log('Product:', product); // 输出: 120
