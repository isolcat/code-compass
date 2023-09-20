function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // 比它相邻的那个元素大，交换相邻的元素，让较大的元素往后移动
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

//test代码
const arrTest = [1, 2, 1, 6, 0, 1, 100, 20]
const sortArr = bubbleSort(arrTest)
console.log(sortArr)