/**
 * 实现一个每次 new 就加一的类
 */
let Add = (function() {
	this.count = 0;
	let _this = this
	return function () {
		// 闭包，注意区分是 new 调用还是普通调用
		if (this instanceof Add) {
			console.log(++_this.count);
		} else {
			console.log('非 new 调用')
		}
	}
})()
new Add(); // 1
new Add(); // 2
new Add(); // 3
Add() // 非 new 调用
new Add(); // 4

