// 定义一个普通的 JavaScript 对象
let data = {
    name: "xm",
    age: 21,
    friend: {
        name: "xh",
    },
};

// 变成响应式数据
observer(data);

// 观察函数，将对象变成响应式
function observer(target) {
    // 检查传入的 target 是否为对象，如果不是，直接返回
    if (!target || typeof target !== "object") {
        return target;
    }

    // 遍历对象的属性，对每个属性调用 defineReactive 进行观察
    for (let key in target) {
        defineReactive(target, key, target[key]);
    }
}

// 定义属性的 getter 和 setter
function defineReactive(target, key, value) {
    // 递归地调用 observer 函数以确保嵌套对象也变成响应式
    observer(value);

    // 使用 Object.defineProperty 定义属性的 getter 和 setter
    Object.defineProperty(target, key, {
        get() {
            return value; // 获取属性值
        },
        set(newValue) {
            observer(newValue); // 递归地观察新值
            if (newValue !== value) {
                value = newValue; // 更新属性的值
                console.log("更新视图"); // 触发 "更新视图" 日志
            }
        },
    });
}

// 修改对象的属性值以测试响应式
data.name = "New Name"; // 更新视图
data.friend.name = "New Friend Name"; // 更新视图
