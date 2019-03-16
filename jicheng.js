//1.原型链继承
// function Fn1() {
// 	this.a='a'
// }
// function Fn2(){
// 	this.b='b'
// }
// Fn2.prototype=new Fn1();//Fn2.prototype.__proto__===Fn1.prototype
// var fn1=new Fn2()//fn1.__proto__===Fn2.prototype
// console.log('原型链继承',fn1.a)

//2.构造函数继承(没有原型,不可复用)
// function Fn1(a) {
// 	this.a=a
// }
// function Fn2(b){
// 	Fn1.call(this,b)
// }
// var n=new Fn2(3)
// console.log(n.a)

//3.原型链继承+构造函数继承
// function Fn1(a) {
// 	this.a=a
// }
// Fn1.prototype.c=function(res){
// 	console.log(res)
// }
// function Fn2(b){
// 	Fn1.call(this,b)
// }
// Fn2.prototype=new Fn1()
// var f=new Fn2(33)
// f.c(22)
// console.log(f.a)

//4.原型式继承
// function obj(o){
// 	function F(){}
// 	F.prototype=o
// 	return new F()
// }
// var O={
// 	name:'lxr',
// 	age:21
// }
// var o1=obj(O)
// console.log(o1.name)
// O.name='lxx'
// console.log(o1.name)

//动态规划,爬楼梯问题
// function fn(n){
// 	let i=1,j=2,a=3
// 	while(a<=n){
// 		var m=j;
// 		j=i+j;
// 		i=m;
// 		a++;
// 	}
// 	return j
// }
// console.log(fn(9))

// //节流函数
// function throttle(fn,interval){
// 	var canRun=true
	
// 	return function(){
// 		if(!canRun) return
// 		canRun=false
// 		setTimeout(()=>{
// 			fn.apply(this)
// 			canRun=true
// 		},interval)
// 	}
// }
// //防抖函数
// function debounce(fn,interval){
// 	var timeout=null;
// 	return function(){
// 		clearTimeout(timeout)
// 		timeout=setTimeout(()=>{
// 			fn.apply(this)
// 		},interval)
// 	}
// }

// var generate = function(numRows){
//     let result=[]
//     for(let i=0;i<numRows;i++){
//         var arr=[];
//         if(i+1==1){
//             arr=[1]
//             result.push(arr)
//             console.log(arr.join(' '))
//             continue;
//         } 
//         if(i+1==2){
//             arr=[1,1]
//             result.push(arr)
//             console.log(arr.join(' '))
//             continue;
//         }
//         for(let j=0;j<=i;j++){
//             if(j==0||j==i){
//                 arr.push(1)
//             }
//             else{
//                 arr.push(+(result[i-1][j-1]+result[i-1][j]))
//             }
//         }
//         result.push(arr)
//         console.log(arr.join(' '))
//     }
//     return result
// };
// generate(6)

