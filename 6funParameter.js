// lecture 3c

function add(x ,y = 10){
    return x + y;
}

console.log(add(1));


//  array as an argument

function sum([num1 , num2 ]){
    return num1 + num2 ;

}

let a = sum([10,10]);
console.log(a);