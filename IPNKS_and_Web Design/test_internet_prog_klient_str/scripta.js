// console.log("Voa go gledas li be");
// document.write("qwertyuiopasdfghjklZXCVBNM");
//
//
// function fib(n,m={}){
//     if(n in m)return m[n];
//     if(n<=2)return 1;
//     m[n]=fib(n-1,m)+fib(n-2,m);
//     return m[n];
// }
// /*
// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));
// console.log(fib(15));
// */
//
// function traveler(n,m,M={}){
//     let k=n+" "+m;
//     if(k in M)return M[k]
//     if(m===1 && n===1)return 1;
//     if(m===0 || n===0)return 0;
//     M[k]=traveler(n-1,m,M)+traveler(n,m-1,M);
// return M[k];
// }
//
// //console.log(traveler(1, 0));
//
// function SubSum(Number,numbers){
//     if(Number===0)return true;
//     if(Number<0)return false;
//     for(let num of numbers){
//         const r=Number-num
//         if(SubSum(r,numbers)===true){return true;}
//     }
//     return false;
// }
//
//
// SubSum(4,[1,2,3,4])
var count = 0;

function dodad(){
    let t=document.getElementById("tabla");
    count+=1;
    count=parseInt(count);
    t.innerHTML+="<tr><td>"+(count+1)+"</td></tr>";
}


function odzemi(){
    const t=document.getElementById("tabla").children;
    let dd=t.length;
    t[dd-1].innerHTML="";
    dd--;
}