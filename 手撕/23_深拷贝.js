function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

const originalObj = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    },
};

const clonedObj = deepClone(originalObj);

clonedObj.b.c = 5;
clonedObj.b.d[0] = 6;

//结果不会互相干扰
console.log(originalObj); // {a: 1, b: {c: 2, d: [3, 4]}}
console.log(clonedObj); // {a: 1, b: {c: 5, d: [6, 4]}}