function customIndexOf(str, searchStr, fromIndex) {
    // 如果未提供fromIndex参数，则默认为0
    fromIndex = fromIndex || 0;

    // 处理负数的fromIndex，将其转换为正数
    if (fromIndex < 0) {
        fromIndex = Math.max(0, str.length + fromIndex);
    }

    // 循环遍历主字符串的字符
    for (let i = fromIndex; i < str.length; i++) {
        // 如果找到searchStr的第一个字符
        if (str[i] === searchStr[0]) {
            let match = true;
            // 继续比较searchStr的每个字符
            for (let j = 0; j < searchStr.length; j++) {
                // 如果字符不匹配，则设置match为false，并跳出循环
                if (str[i + j] !== searchStr[j]) {
                    match = false;
                    break;
                }
            }
            // 如果找到匹配的子字符串，返回第一个匹配字符的索引
            if (match) {
                return i;
            }
        }
    }

    // 未找到匹配的子字符串，返回-1
    return -1;
}

// 测试
const str = "Hello, World!";
const searchStr = "World";
const index = customIndexOf(str, searchStr);
console.log(index); // 输出 7
