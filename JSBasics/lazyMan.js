// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

function _LazyMan (name) {
	this.tasks = [];
	var self = this;

	var fn = (function (name) {
		return function () {
			console.log("Hi This is" + name + '!');
			self.next();
		}
	})(name)

	this.tasks.push(fn);

	setTimeout(() => {
		self.next();
	})
}

_LazyMan.prototype.next = function () {
	var fn = this.tasks.shift();
	console.log(fn)
	fn&&fn();
}

_LazyMan.prototype.eat = function (food) {
	var self = this;

	var fn = (function (food) {
		return function () {
			console.log("Eat " + food);
			self.next();
		}
	})(food)

	this.tasks.push(fn);

	return this
}

_LazyMan.prototype.sleep = function (time) {
	var self = this;
	var fn = (function (time) {
		setTimeout(() => {
			console.log("wakeup after " + time);
			self.next();
		}, time * 1000)
	})(time)
	this.tasks.push(fn);
	
	return this
}
_LazyMan.prototype.sleepFirst = function (time) {
	var self = this;
	var fn = (function (time) {
		setTimeout(() => {
			console.log("wakeup after " + time);
			self.next();
		}, time * 1000)
	})(time)
	this.tasks.unshift(fn);
	
	return this
}

_LazyMan.prototype.constructor = _LazyMan

function LazyMan (name) {
	return new _LazyMan(name);
}

LazyMan("Hank").sleepFirst(5).eat("dinner")
