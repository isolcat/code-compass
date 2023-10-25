function removeDuplicates(inputString) {
    // 创建一个空对象，用于跟踪已经出现的字符
    const charMap = {};
    let result = '';

    // 遍历输入字符串的每个字符
    for (let i = 0; i < inputString.length; i++) {
        const char = inputString[i];

        // 如果字符尚未出现过，将其添加到结果字符串中
        if (!charMap[char]) {
            charMap[char] = true;
            result += char;
        }
    }

    return result;
}

// 示例用法
const inputString = "programming";
const uniqueString = removeDuplicates(inputString);
console.log(uniqueString); // 输出 "progamin"
