// 定义 debounce 函数
function debounce(fn) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn();
        }, 3000);
    };
}

// 测试
function doSomething() {
    console.log("Function executed.");
}

const debouncedFunction = debounce(doSomething);

// 调用防抖函数，它将延迟执行
debouncedFunction();

// 再次调用，计时器被重新设置
debouncedFunction();