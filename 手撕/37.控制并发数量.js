async function sleep(n, name = 'test') {
    return new Promise(resolve => {
        console.log(n, name, 'start')
        setTimeout(() => {
            console.log(n, name, 'end', '-----')
            resolve({ n, name })
        }, n * 1000)
    })
}

//限制并发数量
async function asyncPool({ limit, items }) {
    // 需要一个数组来管理所有的异步任务
    const promises = []
    //需要有任务池的概念，方便我们增加和删除
    const pool = new Set()

    for (const item of items) {
        // 辅助函数，本质上是一个promise
        const fn = async item => await item()
        //变成promise
        const promise = fn(item)
        promises.push(promise)
        pool.add(promise)
        const clean = () => pool.delete(promise)
        promise.then(clean, clean)//无论是成功还是失败都清理当前的
        //当大于并发数量的时候，就执行掉
        if (pool.size >= limit) {
            await Promise.race(pool)
        }
    }
    return Promise.all(promises)
}

async function start() {
    await asyncPool({
        limit: 2,
        items: [
            () => sleep(1, '吃饭'),
            () => sleep(3, '学习'),
            () => sleep(5, '睡觉'),
            () => sleep(4, '学习前端')
        ]
    })
    console.log('结束')
}

start()