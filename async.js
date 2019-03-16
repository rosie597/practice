// async function a1(){
// 	console.log('a')
// 	await a2()
// 	console.log('c')
// }
// function a2(){
// 	console.log('b')
// }
// a1()
// var p=new Promise((resolve)=>{
// 	resolve('hhh')
// 	console.log(111)
// })
// p.then((res)=>{
// 	console.log(res)
// })

setTimeout(()=>{
	console.log(1)
})
var p=new Promise((resolve)=>{resolve()}).then(()=>{
	console.log(2)
	var p2=new Promise((resolve)=>{resolve()}).then(()=>{
		console.log(3)
	})
})
console.log(4)