let arr = [1, 2, 3, 34,]
//将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值
let sum = arr.reduce((total, i) => total += i, 0);
console.log(sum);