//无需新开数组
//交换两个元素的值
let swap = function (arr, i, j) {
    //es6解构语法
    [arr[i], arr[j]] = [arr[j], arr[i]]
}
//将数组分割成两部分：一部分包含小于或等于基准值的元素，另一部分包含大于基准值的元素
function partition(arr, i, j) {
    let p = arr[i]//arr[i]作为基准值
    let index = i
    //i和j作为双指针数组两端向中间进行遍历
    while (i < j) {
        while (arr[j] > p && i < j) {
            j--
        }
        while (arr[i] <= p && i < j) {
            i++
        }
        swap(arr, i, j)
    }
    //将基准值放到正确的位置上
    swap(arr, index, i)
    return i
}

let quicksort = function (arr, i, j) {
    if (i >= j) return
    let p = partition(arr, i, j)
    //对左侧数进行递归排序
    quicksort(arr, i, p - 1)
    //对右侧数进行递归排序
    quicksort(arr, p + 1, j)
}

// 测试代码
let arr = [6, 2, 8, 5, 3, 7, 1, 4];

quicksort(arr, 0, arr.length - 1);

console.log("排序后数组:", arr);