/**
* 题干： 找出字符串中的最长回文串
* 思路： 动态规划
* @param {string} str
* @return {string}
*/
function longestPalindrome( s ) {
    if (!s) return;
    let n = s.length;
    let l = 0, r = 0;
    // 创建二维数组
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = new Array(n);
    }
    for (let i = n-2; i >= 0; i--) {
        arr[i][i] = true;
        for (let j = i + 1; j < n; j++) {
            arr[i][j] = s.charAt(i) == s.charAt(j) && arr[i+1][j-1];
            if (arr[i][j] && r - l < j - i) {
                l = i;
                r = j;
            }
        }
    }
    return s.substring(l, r+1);
}
console.log(longestPalindrome('aadada'))