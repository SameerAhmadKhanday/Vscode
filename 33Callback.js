// function h(x , fn){

//     // h -> is a higher order fun
//     //  fn -> is a call  back
//     console.log(x*x);
//     fn(x*x);
// }

// h(10, function(){
//     console.log("done with callback");
// })

// h(10 , exec)

// function exec(n){
//     console.log("square value is : ", n);
// }
console.log("start");
setTimeout(function f (){
    console.log("timer done 1 ");
},100);
setTimeout(function f (){
    console.log("timer done 2 ");
},0);

console.log("end");
for(let i = 0 ; i < 10000000000; i++){}
