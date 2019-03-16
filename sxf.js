// let  C=function() {}
// C.prototype=Object.create({
//     option:{
//         name:'c'
//     }
// });
// let c1=new C();//实现潜拷贝
// let c2=new C();
// c1.option.name='new_c'//改变深层次name属性，c1，c2指向同一地址，c2跟随改变
// console.log(c2.option.name)
// c1.option=null//潜拷贝，第一层不影响
// console.log(c1.option,c2.option.name)

// function A(){}
// function B(){}
// B.prototype=Object.create(A.prototype);//B.prototype.__proto__===A.prototype
// let b=new B();
// function C(){}
// let c =new C();
// Object.setPrototypeOf(c,A.prototype)//c.__proto__===A.prototype
// console.log(b instanceof A)
// console.log(c instanceof A)//instanceof判断后面的构造函数是否在前面实例对象的原型链的某一位置
// console.log(b.__proto__.__proto__===A.prototype)
// console.log(c.__proto__===A.prototype)

var date=new Date()
var time=Number(date.getYear()+1900)+'-'+Number(date.getMonth()+1)+'-'+date.getDate()
console.log(time)

// function F(){
//     this.a='a'
// }
// F.prototype.b=function(){
//     console.log('b')
// }
// var f=new(F)
// var o=Object.create(f)
// console.log(o.__proto__===f,o.__proto__.__proto__===F.prototype)

// var fn=function(n,s,m){
//     var arr=[]
//     var r=[]
//     for(let i=0;i<n;i++){
//         arr[i]=true;
//     }
//     var total=n
//     var c=s
//     var i=s
//     while(total>1){
//         if(arr[i]==true){
//             c++;
//             if(c==m){
//                 c=0;
//                 arr[i]=false;
//                 total--;
//                 r.push(i+1)
//             }
//         }
//         i++;
//         if(i==arr.length){
//             i=0;
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==true){
//             r.push(i+1)
//             return r
//         }
//     }
//     return -1
// }
// console.log(fn(3,1,2))

// var fn=function(n,m,addStr,getCz){
//     var add=addStr.split(' '),
//         get=getCz.split(' '),
//         arr=[],
//         r=[],
//         k=1
//     for(let i=0;i<n;i++){
//         arr.push(add[i])
//         for(let j=0;j<m;j++){
//             if(i+1==get[j]){
//                 arr.sort()
//                 r.push(arr[k-1])
//                 k++;
//                 continue;
//             }
//         }
//     }
//     return r;
// }
// console.log(fn(7,4,'3 1 -4 2 8 -1000 2','1 2 6 6'))

// var fn=function(n,v,arr){
//     var l=1,//总共走了多长
//         s=1;//开始区间1
//         for(let i=0;i<arr.length;i++){
//             var jqj=[s,arr[i][0]]//减速区间
//             var jl=jqj[1]-jqj[0]//减速长度
//             var yl=arr[i][1]-arr[i][0]//匀速长度
//             while(v>0&&jl>0){
//                 l++;
//                 v--;
//                 jl--;
//                 if(v==0){
//                     return l-1
//                 }
//             }
//             if(v!==0){
//                 l+=yl;
//             }
//         }
// }
// console.log(fn(3,2,[[2,5],[7,9],[11,12]]))

// var fn=function(n,m,str){
//     var arr=str.split(' ')
//     var arr1=[]
//     var total=n
//     var r=0
//     for(let i=0;i<arr.length;i++){
//         arr1.push(true)
//     }
//     while(m>0){
//         for(let i=0;i<arr.length;i++){
//             if(arr1[i]==true){
//                 r=+(arr[i])+r
//                 arr1[i]=false
//                 arr1[i+1]=false
//                 arr1[i-1]=false
//                 m--
//             }else{
//                 continue;
//             }
//         }
//     }
//     return r
// }
// console.log(fn(8,8,'8 5 6 2 3 4 8 9'))
