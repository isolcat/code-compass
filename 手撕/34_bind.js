Function.prototype.myBind = function (context) {
    //判断是否为函数
    if (typeof this !== 'function') {
        console.log('error')
    }
    //获取参数(这里和call一样的)
    var args = [...arguments].slice(1)
    fn = this
    //返回一个函数
    return function Fn() {
        //根据调用方式绑定不一样的值
        return fn.apply(
            //用于确定调用闭包函数的方式
            this instanceof Fn ? this : context,
            //之前通过 myBind 方法传递的参数 args 与调用闭包函数时传递的参数 arguments 进行合并，最终传递给原始函数作为参数
            args.concat(...arguments)
        )
    }
}
const obj1 = {
    name: 'objName',
};

function func(a, b, c) {
    console.log(this.name);
    console.log(a, b, c);
}

const bindFunc = func.myBind(obj1, 1, 2);

bindFunc(3);