var sortStr=function(str) {
	var arr=str.split('')
	var r=[arr[0]]
	var result=[]
	for(let i=1;i<arr.length+1;i++){
		if(arr[i]==arr[i-1]){
			r.push(arr[i])
		}else{
			var item={}
			var sx=arr[i-1]
			item[sx]=r.length
			result.push(item)
			r=[arr[i]]
		}
	}
	return result
}
console.log(sortStr('aaabb 88888777'))