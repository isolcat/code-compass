function parseParam(url) {
    const paramsArr = url.split('?')[1]?.split('&') || [];
    const result = {};

    paramsArr.forEach((param) => {
        const [key, value] = param.split('=');

        if (value === undefined) {
            // 如果没有指定值，将键对应的值设为 true
            result[key] = true;
        } else {
            if (result[key] === undefined) {
                // 如果键第一次出现，直接设置为解码后的值或者转换成数字
                result[key] = !isNaN(value) ? Number(value) : decodeURIComponent(value);
            } else {
                // 如果键已经出现过，将其值转换成数组，然后添加新的值
                if (!Array.isArray(result[key])) {
                    result[key] = [result[key]];
                }
                result[key].push(!isNaN(value) ? Number(value) : decodeURIComponent(value));
            }
        }
    });

    return result;
}

const url = "http://www.domain.com/?user=jack&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled";
const parsedParams = parseParam(url);
console.log(parsedParams);
