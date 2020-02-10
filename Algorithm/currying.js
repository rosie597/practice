/**
 * 实现一个累加函数 如 add(1)(2,3)() 或 add(1)(2,3).finish() 输出6
 * @param  {...any} args 
 */
function add(...args) {
	var cache = 0;
	if (args.length) {
		for (let i = 0; i < args.length; i++) {
			cache+=args[i];
		}
	} else {
		throw new Error('参数不能为空');
	}
	var sum = function (...args2) {
		if (args2.length === 0) {
			return cache
		} else {
			for (let i = 0; i < args2.length; i++) {
				cache+=args2[i];
			}
			return sum
		}
    }
    sum.finish = function () {
        return cache
    }
	return sum
}

console.log(add(1)(2)(3)())
console.log(add(1)(2,3).finish())