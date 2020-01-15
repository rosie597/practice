/**
 * 将字符串相邻的数字用 - 连接，如输入'1 3 4 5 7 8' 得 '1 3-5 7 8'
 * @param {number} num 
 * @param {string} s 
 */
var find = function(num, s) {
	var arr = s.split(' ');
	var str = '';
	var c_arr = [];
	for(i=0; i < num; i++) {
		c_arr.push(arr[i]);
		if(+arr[i] + 1 !== +arr[i+1]){
			if(c_arr.length >= 3){
				str = str + c_arr[0] + '-' + c_arr[c_arr.length-1] + ' ';
			}else{
				str = str + c_arr.join(' ') + ' ';
			}
			c_arr = [];
		}
	}
	return str.substr(0, str.length - 1);
}
var num=6;
var s='1 3 4 5 7 8';
console.log(find(num, s));