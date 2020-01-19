/**
 * 题干： 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度
 * @param {string} str
 * @return {number}
 */

var lengthOfLongestStr = function(str) {
    let i = 0, j = 0, ans = 0;
    let s ='', l = str.length;
    while (j < l && i < l) {
        var flag = s.includes(str[j]);
        if (flag) {
            // 当前字符已存在时, 从第一个字符开始截取字符串，并动态保存最大长度，直至切除相同的字符
            s = str.substring(++i, j);
            ans = Math.max(ans, j - i + 1);
        } else {
            // 当前字符串不存在时，将字符连接到字符串
            s += str[j++];
        }
    }
    return ans;
}

let str = 'comemnbaby';
console.log(lengthOfLongestStr(str)); // 6