var sortFn=function (arr) {
	var l=arr.length
	for(let i=0;i<l;i++){
		for(let j=0;j<l-1-i;j++){
			if(arr[j]>arr[j+1]){
				var a=arr[j];
				arr[j]=arr[j+1]
				arr[j+1]=a
			}
		}
	}
	return arr
}
console.log(sortFn([3]))