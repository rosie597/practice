// 如输入"LEETCODEISHIRING" 行数为 3 时，排列如下：
// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 实现 z字形变换
 */

var convert = function(s, numRows) {
    // 行数为 1 直接输出
    if (numRows < 2) {
        return s;
    }
    let resArr = new Array(numRows), p = 0, flag = 1;
    // resArr： 长度为 numRows 的字符串数组
    // 每一项代表排列顺序的一行，利用 p 标识上下来回扫描
    resArr.fill('');
    for (let i = 0; i < s.length; i++) {
        resArr[p] = resArr[p] + s[i];
        // flag 为 1 时，p 标识递增，为 -1 时递减
        p += flag;
        flag = p === 0 ? 1 : p === numRows - 1 ? -1 : flag;
    }
    return resArr.join('');
};

console.log(convert("LEETCODEISHIRING", 3)) // LCIRETOESIIGEDHN