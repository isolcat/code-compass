function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
// 用回调函数实现
const task = (timer, light, callback) => {
    setTimeout(() => {
        if (light == 'red') {
            red()
        } else if (light == 'green') {
            green()
        } else if (light == 'yellow') {
            yellow()
        }
        callback()
    }, timer)
}
const step = () => {
    task(3000, 'red', () => {
        task(2000, 'green', () => {
            task(1000, 'yellow', step)
        })
    })
}
step()//回调函数＋递归可以实现循环打印红绿灯

// promise实现
const task = (timer, light) =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }
            else if (light === 'green') {
                green()
            }
            else if (light === 'yellow') {
                yellow()
            }
            //在一次亮灯结束后，resolve 当前 promise
            resolve()
        }, timer)
    })
const step = () => {
    task(3000, 'red')
        .then(() => task(2000, 'green'))
        .then(() => task(2100, 'yellow'))
        .then(step)
}
step()