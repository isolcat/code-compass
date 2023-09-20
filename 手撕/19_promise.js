class MyPromise {
    constructor(executor) {
        // 初始化状态、结果和原因
        this.state = 'pending';
        this.result = null;
        this.reason = null;

        // 存储在 pending 状态时的回调函数
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

        // 执行传入的 executor 函数
        executor(this.resolve.bind(this), this.reject.bind(this));
    }

    resolve(result) {
        if (this.state === 'pending') {
            // 修改状态和结果
            this.state = 'fulfilled';
            this.result = result;

            // 执行成功回调函数
            this.onFulfilledCallbacks.forEach(fn => {
                setTimeout(() => {
                    fn(this.result);
                });
            });
        }
    }

    reject(reason) {
        if (this.state === 'pending') {
            // 修改状态和原因
            this.state = 'rejected';
            this.reason = reason;

            // 执行失败回调函数
            this.onRejectedCallbacks.forEach(fn => {
                setTimeout(() => {
                    fn(this.reason);
                });
            });
        }
    }

    then(onFulfilled, onRejected) {
        // 处理回调函数参数，确保它们是函数类型
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

        // 返回一个新的 Promise 实例，实现链式调用
        return new MyPromise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        const result = onFulfilled(this.result);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            } else if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        const result = onRejected(this.reason);
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            } else if (this.state === 'pending') {
                // 存储回调函数，等待状态变更后执行
                this.onFulfilledCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const result = onFulfilled(this.result);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const result = onRejected(this.reason);
                            resolve(result);
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            }
        });
    }
}



//测试代码
// 测试代码
const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

promise.then(
    result => {
        console.log('Fulfilled:', result);
        return 'New Value';
    },
    reason => {
        console.log('Rejected:', reason);
    }
).then(
    result => {
        console.log('Chained Fulfilled:', result);
    },
    reason => {
        console.log('Chained Rejected:', reason);
    }
);