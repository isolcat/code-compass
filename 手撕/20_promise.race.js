Promise.MyRace = function (promises) {
    return new Promise((resolve, reject) => {
        //这里无需索引，只要可以循环出每一项即可
        for (const item of promises) {
            Promise.resolve(item).then(resolve, reject)
        }
    })
}