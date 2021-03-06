let f=function() {
	this.a=1;
	this.b=2;
};

//在自身拥有a和b属性的函数里创建一个对象o
let o=new f();

//相当于：
let _o=new Object();
_o.__proto__=f.prototype;
f.call(_o);

//在f的原型里定义属性
f.prototype.b=3;
f.prototype.c=4;

//不要在f函数的原型上直接定义 f.prototype = {b:3,c:4};这样会直接打破原型链

console.log('o');
console.log(o.constructor.prototype,o.__proto__);//o的构造函数的原型(o.__proto__)有属性b和c
console.log(o.__proto__.__proto__);//是Object.prototype
console.log(o.__proto__.__proto__.__proto__);//这就是原型链的末尾，即 null
console.log(o.a);//1
console.log(o.b);//2,原型链上有b,但不会被访问，我们称之为“属性遮蔽 (property shadowing)”
console.log(o.c);//c不是o自身属性，往原型上找，该属性值为4
// 综上，整个原型链如下: 
// {a:1, b:2} ---> {b:3, c:4} ---> Object.prototye---> null

//this指向
let o1 = {
	a: 2,
	m: function(){
	return this.a + 1;
	}
};
let p=Object.create(o1);//建立一个继承自o1的对象
console.log('o1',o1,o1.__proto__);
p.a=4
console.log(p.m())//这里的this指向当前继承的对象而不是继承的函数所在原型的对象，则a为p中的4

console.log(Array.prototype);
console.log(Function.prototype);

// Object.create()创建一个对象
var o2={
	a:1
};//o2-->object.prototype-->null
var b=Object.create(o2);
//b-->o2-->object.prototype-->null
var c=Object.create(b);
//c-->b-->o2-->object.prototype-->null
var arr=[1,2,3];
console.log('arr',arr.__proto__);
console.log(arr.__proto__.__proto__);