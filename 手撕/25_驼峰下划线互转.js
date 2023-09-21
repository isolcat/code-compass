//下划线转驼峰
let a = '_abc_de_gf'
let reg = /_/
const change = function (str) {
    let strArr = str.split('')
    let count = 0
    strArr.forEach((value, index) => {
        if (reg.test(value)) {
            strArr[count++] = strArr[index + 1].toUpperCase()
            strArr.splice(index + 1, 1)
        }
        else strArr[count++] = strArr[index]
    })
    return strArr.join('')
}
console.log(change(a))

//驼峰转下划线
let b = 'AbcDeGfh'
const changeNext = function (str) {
    let strArr = str.split('')
    strArr.forEach((value, index) => {
        if (value == value.toUpperCase()) {
            strArr[index] = '_' + value.toLowerCase()
        }
    })
    return strArr.join('')
}
console.log(changeNext(b))