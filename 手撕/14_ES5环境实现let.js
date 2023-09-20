//原代码
// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
// console.log(i)

//babel转换后的代码
for (var _i = 0; _i < 10; _i++) {
    console.log(_i)
}
console.log(i)

// 原理：babel在let定义的变量前加了道下划线，避免在块级作用域外访问到该变量