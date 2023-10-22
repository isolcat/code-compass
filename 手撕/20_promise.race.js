Promise.MyRace = function (promises) {
    return new Promise((resolve, reject) => {
        //这里无需索引，只要可以循环出每一项即可
        for (const item of promises) {
            Promise.resolve(item).then(resolve, reject)
        }
    })
}

// test
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 1000);
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved")
    }, 2000)
})

Promise.myRace([p1, p2])
    .then(result => {
        console.log("resolved:", result)
    })
    .catch(error => {
        console.log("error:", error)
    })