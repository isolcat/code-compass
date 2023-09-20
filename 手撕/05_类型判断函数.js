function getType(value) {
    // 判断数据是null的情况
    if (value === null) {
        return value + ''; // 将null转换为字符串并返回
    }

    // 引用数据类型
    if (typeof value === 'object') {
        let valueClass = Object.prototype.toString.call(value); // 获取对象的内部属性[[Class]]
        type = valueClass.split(' ')[1].split(''); // 将"[object Type]"中的"Type"提取出来，并转换为数组
        type.pop(); // 移除数组最后一个空字符
        return type.join('').toLowerCase(); // 将提取出来的类型转换为小写并返回
    } else {
        // 基本数据类型
        return typeof value; // 返回基本数据类型的字符串表示
    }
}

// 测试基本数据类型
console.log(getType(5));         // 输出: "number"
console.log(getType('hello'));   // 输出: "string"
console.log(getType(true));      // 输出: "boolean"
console.log(getType(undefined)); // 输出: "undefined"

// 测试引用数据类型
console.log(getType([]));        // 输出: "array"
console.log(getType({}));        // 输出: "object"
console.log(getType(null));      // 输出: "null"
console.log(getType(new Date())); // 输出: "date"

// 自定义对象
class Person {
    constructor(name) {
        this.name = name;
    }
}
const person = new Person('Alice');
console.log(getType(person)); // 输出: "object"

// 函数
console.log(getType(getType)); // 输出: "function"

// 特殊情况
console.log(getType(Symbol('foo'))); // 输出: "symbol"
