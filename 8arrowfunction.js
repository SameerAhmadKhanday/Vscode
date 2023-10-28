//  one parameter , and a single return statement 

const square = (x) => x*x;
let output1 = square(5);
console.log(output1);
// multiple parameter ,and a single return expression

const sumofnumbers =  (x , y) => x * y ;
let output2 = sumofnumbers(1,2);
console.log(output2);

// multiple statement

const sum =  (x, y) => {
    console.log('adding ${x} and {y}');;
    return x + y ;
}
let output3 = sum (1,2);
console.log(output3);

//  returening an object

const SumandDifference = (x , y) => ({Sum : x + y , Differwnce : x - y}) ;
let output4 = SumandDifference(5 ,3);
console.log(output4);