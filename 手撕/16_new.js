function myNew(fn, ...args) {
    //定义一个空对象
    const obj = {};
    //为步骤 1 新创建的对象添加属性 __proto__，将该属性链接至构造函数的原型对象
    obj.__proto__ = fn.prototype;
    //将步骤 1 新创建的对象作为 this 的上下文
    const result = fn.apply(obj, args);
    //判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象
    return result instanceof Object ? result : obj;
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