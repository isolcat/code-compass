function myNew(fn, ...args) {
    //定义一个空对象
    const obj = {};
    //将空对象的原型指向构造函数的原型
    obj.__proto__ = fn.prototype;
    //将构造函数的this指向空对象
    fn.apply(obj, args);
    return obj;
}

//测试代码
// 定义一个构造函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 使用 myNew 函数创建对象实例
const person = myNew(Person, 'John', 30);

// 输出实例的属性
console.log(person.name); // 输出: John
console.log(person.age);  // 输出: 30