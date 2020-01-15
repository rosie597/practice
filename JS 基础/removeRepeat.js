/**
 * 数组去重方法汇总
 */

// 利用indexOf
function unique1(arr) {
	var result=[];
	for(var i=0;i<arr.length;i++){
		if(result.indexOf(arr[i])==-1){
			result.push(arr[i]);
		}
	}
	return result;
}

// 利用对象属性不能重复
function unique2(arr){
	var result=[],obj=new Object();
	for(var i=0;i<arr.length;i++){
		if(obj[arr[i]]!=1){
			result.push(arr[i]);
			obj[arr[i]]=1;
		}
	}  
	return result;
}

// 利用排序
Array.prototype.unique3=function(){
	this.sort();
	var result=[this[0]];
	//与结果数组的最后一项相比，不一样就插入结果数组
	for(var i=1;i<this.length;i++){
		if(this[i]!==result[result.length-1]){
			result.push(this[i]);
		}
	}
	return result;
}

// 利用 es6 的 set
function unique4(arr){
	return Array.from(new Set(arr))
}

var arr1=[1,2,3,44,5,2,1,44,33,6,7,8,null,undefined,0]
var arr2=['aa','ab','hh','dd','jj','gi','aa','dd']
console.log(unique1(arr1));
console.log(unique1(arr2));

console.log(unique2(arr1));
console.log(unique2(arr2));

console.log(arr1.unique3());
console.log(arr2.unique3());

console.log(unique4(arr1));
console.log(unique4(arr2));

