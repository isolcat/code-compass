Function.prototype.myCall = function (context) {
    //判断调用对象
    if (typeof this !== 'function') {
        console.error('type error')
    }
    //获取参数 处理参数 ,截取第一个参数之后的所有参数
    let args = [...arguments].slice(1)

    result = null
    //判断context是否传入，如果未传入则设置为window
    context = context || window
    //将调用函数设为对象的方法
    context.fn = this
    //使用上下文对象调用这个方法，并保存返回结果
    result = context.fn(...args)
    //删除刚刚新增的属性
    delete context.fn
    //返回结果
    return result
}

//测试一下
function person() {
    console.log(this.name);
}
var cat = {
    name: 'isolcat',
};

person.myCall(cat);//isolcat