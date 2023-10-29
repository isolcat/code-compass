var obj = { a: {a: "hello", b: 21} };
var initalObj = Object.assign({}, obj);

initalObj.a.a = "changed";
console.log(obj.a.a); // "changed"

let obj1 = {a: 1}
let obj2 = {...obj1}
obj1.a = 2
console.log(obj2.a)   // 1
