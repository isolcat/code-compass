Function.prototype.myApply = function (context, args) {
    // 判断调用对象是否为函数
    if (typeof this !== 'function') {
        console.log('type error')
    }
    let result = null
    // 判断context是否存在
    context = context || window
    //将函数作为上下文对象的一个属性
    context.fn = this
    //使用上下文来调用这个方法，并返回结果
    //这部分和之前的call的唯一区别是多了一个args的参数作为判断（数组
    if (args) {
        result = context.fn(...args)
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
let obj = {
    name: 'test'
}
function add(a, b, c) {
    console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
}
add.myApply(obj, [1, 2, 3])