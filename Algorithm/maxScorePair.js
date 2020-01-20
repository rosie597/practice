/**
 * 题干： 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。

 *       一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。

 *       返回一对观光景点能取得的最高分。
 
 * 思路： 贪心算法，求 A[i] + A[j] + i - j 的最大值问题可以转化为求 A[i] + i 与 A[j] - j 的最大值问题
 */

 /** 
 * @param {number[]} arr
 * @return {number}
 */
var maxScorePair = function(arr) {
    let max = 0, pre_max = arr[0] + 0;
    let l = arr.length;
    if(l) {
        for(let i = 1; i < l; i++) {
            let val1 = arr[i] + i, val2 = arr[i] - i;
            max = max > pre_max + val2 ? max : pre_max + val2;
            pre_max = pre_max > val1 ? pre_max : val1;
        }
    }
    return max;
};

let arr = [8,1,5,2,6];
console.log(maxScorePair(arr)) // 11