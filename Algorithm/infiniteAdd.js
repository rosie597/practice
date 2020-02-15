/**
* 题干： 实现两个数相加，不限制位数
* @param {string} a
* @param {string} b
* @return {string}
*/
function add( a , b ) {
    if ((!a && a !== '0') || (!b && b !== '0') || isNaN(Number(a)) || isNaN(Number(b))) return 'NaN';
    let arr1 = a.split('').reverse();
    let arr2 = b.split('').reverse();
    // arr1 为大数组的处理
    if (arr1.length < arr2.length) {
        let _arr = arr1;
        arr1 = arr2;
        arr2 = _arr;
    }
    // 负数的情况
    let flag1 = 1, flag2 = 1;
    if (arr1[arr1.length - 1] == '-') {
        flag1 = 0;
        arr1.pop();
    }
    if (arr2[arr2.length - 1] == '-') {
        flag2 = 0;
        arr2.pop();
    }
    let flag = flag1 ? '' : '-'; // 结果符号为绝对值较大数的符号

    let ret = new Array(arr1.length + 1); // 结果数组比较长的数组大一
    let c = 0; // 保存进位数
    for (let i = 0; i < arr1.length; i++) {
        let add = 0; // 位相加数
        if (flag1 ^ flag2) {
            // 符号相异的情况
            if(arr1.join('') === arr2.join('')) {
                // 互为相反数直接返回 0
                return "0"
            }

            add = i < arr2.length ? Number(arr1[i]) + c - Number(arr2[i]) : Number(arr1[i]) + c;
            c = add >= 0 ? (add >= 10 ? 1 : 0) : 1;
            
            ret[i] = add;
        } else {
            // 符号相同的情况
            add = i < arr2.length ? Number(arr1[i]) + Number(arr2[i]) + c : Number(arr1[i]) + c;
            c = add >= 10 ? 1 : 0;
            
            ret[i] = add >= 10 ? add % 10 : add;
        }
    }

    ret[ret.length -1] = c > 0 ? '1' : ''
    return flag + ret.reverse().join('')
}
console.log(add('1234567890123456789077799900002', '100000000000'));
console.log(add('-123456789012345', '45'));
console.log(add('99999', '999999'));
console.log(add('null', '999999'));
console.log(add('-999999', '999999'));