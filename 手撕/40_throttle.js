function throttle(fn) {
    let timer = null
    return function () {
        if (timer) return
        timer = setTimeout(() => {
            fn()
            timer = null
        }, 1000)
    }
}
// 测试
function doSomething() {
    console.log("Function executed.");
}

const throttledFunction = throttle(doSomething);

// 多次调用，但只有第一次会立即执行
throttledFunction();
throttledFunction();