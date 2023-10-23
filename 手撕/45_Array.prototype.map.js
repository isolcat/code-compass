// 创建一个名为arr的数组，包含元素1、2和3
const arr = [1, 2, 3];

// 重写数组原型对象的map方法
// map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
Array.prototype.map = function (callback) {
    // 创建一个空数组res，用于存储映射后的结果
    const res = [];

    // 遍历当前数组（this），对每个元素调用回调函数
    for (let i = 0; i < this.length; i++) {
        // 使用this[i]来访问数组中的每个元素
        res.push(callback(this[i], i, this)); // 将回调函数的结果添加到res中
    }

    // 返回映射后的结果数组
    return res;
}

// 使用自定义的map方法，将每个元素乘以2，并将结果存储在res中
const res = arr.map((ele, index, arr) => {
    return ele * 2;
});

// 打印映射后的结果
console.log(res);
