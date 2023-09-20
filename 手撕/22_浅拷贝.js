function shallowCopy(object) {
    // 只拷贝对象
    if (!object || typeof object !== "object") return;

    // 根据 object 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(object) ? [] : {};

    // 遍历 object，并且判断是 object 的属性才拷贝
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = object[key];
        }
    }

    return newObject;
}

const originalObj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

const clonedObj = shallowCopy(originalObj);

clonedObj.b.c = 5;
clonedObj.b.d[0] = 6;

//结果会互相干扰
console.log(originalObj); // { a: 1, b: { c: 5, d: [ 6, 4 ] } }
console.log(clonedObj); // {a: 1, b: {c: 5, d: [6, 4]}}