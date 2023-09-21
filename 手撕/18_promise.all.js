Promise.myAll = function (promise) {
    let arr = []//存储promise的结果
    count = 0//计数器
    return new Promise((resolve, reject) => {
        promise.forEach((item, i) => {
            Promise.resolve(item).then(res => {
                arr[i] = res//将解决的结果存储到数组 arr 的对应位置
                count += 1//计数器+1
                if (count === promise.length) {//如果所有的Promise都已处理完毕
                    resolve(arr)
                }
            }).catch(err => {
                reject(err)
            })
        })
    })
}

// test
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
Promise.myAll([p3, p1, p2]).then(res => {
    console.log(res) // [3, 1, 2]
})