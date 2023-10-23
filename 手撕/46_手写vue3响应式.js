function createReactiveObject(target) {
    // 使用 Proxy 对象创建一个代理，用于拦截对目标对象的操作
    return new Proxy(target, {
        // 当属性被访问时，触发 get 处理程序
        get(target, key) {
            if (typeof target[key] === 'object' && target[key] !== null) {
                // 如果属性是对象，并且不为 null，递归创建响应式对象
                return createReactiveObject(target[key]);
            }
            // 返回属性值
            return target[key];
        },
        // 当属性被修改时，触发 set 处理程序
        set(target, key, value) {
            if (target[key] !== value) {
                // 如果新值不等于旧值，更新属性值
                target[key] = value;
                console.log("更新视图"); // 输出 "更新视图" 日志，表示数据已更改
            }
            return true; // 告诉 Proxy 操作成功
        }
    });
}

// 调用 createReactiveObject 函数，传入一个初始对象作为参数，获得一个深层次的响应式对象 data
const data = createReactiveObject({
    name: "hdf",
    age: 19,
    friend: {
        name: "zwl",
    }
});

// 修改数据
data.name = "New Name"; // 更新视图，因为属性被修改
data.friend.name = "New Friend Name"; // 更新视图，因为属性被修改
