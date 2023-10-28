//  questions on values and datatypes

//  Q1; create a js file , using js comments , list of all data types js , with examples 
//  1) string
// String = "this is a string "

// 2) number 
// integer = 7
// Floating values = 10.3
// infinity = number.positive_infinity,
// not a number :- NaN



// 3) Bigint
// Bigint = 1024n  by putting n at the end it becomes Bigin 4) boolean 
// boolean = true , false

//  5) undefined

// undefined : undefined 

// 6) null

// Null : null


//  7) symbol

// symbol : symbol('pw skills')

// 8) object   like list and dict.

// 1) array : ["sam",2,3]
// 2) object :{class:10,course:"fswd"}


// Q2 ;-create an array of 10 products that you have purchased or viewed on an e commerce site

array = ["iphone","shoes","watch","dresses","ball"]


// Q3 ;- create an object of a student registry 5 students whose key is the the regestration number and the value is the students name 

regestration = {1:"sam", 2:"aabid", 3:"nadeem" , 4:"shahid" , 5:"yasir"}
console.log(regestration);


//  questions on variables an dtype of

// Q4;- specify an example for all datatypes in js store the values in a variable and verify the type of value stored

// 1) string 
let var1 = "hello ! sam "
console.log(typeof var1);

// 2) numbers 
// i) integers 
let var2 = 5
console.log(typeof var2);

// ii) floating values 
let var3 = 10.2
console.log(typeof var3 );

// iii) infinity 
let var4 = Number.positive_infinity;
console.log(typeof var4);

// iv) not a number 
let var5 = NaN;
console.log(typeof var5);

// Q3;- Bigint
let var6 = 1024n
console.log(typeof var6);


// Q4;- boolean
let var7 = true;
console.log(typeof var7);


// Q5;- object

let var8 = {1:"sam" , 2:"aabid"}
console.log(typeof var8);


// Q6;- array
let var9 = ["sam", 1, 2.3 ]
console.log(typeof var9);


// Q2;-create 2 valid variables and 2 invalid variables and print them onto the console .comment the result an the error message

// valid variable

let name = "sam"
console.log(name);
let happy = true;
console.log(happy);

// invalid variables 

// let 1name = "sameer "
// console.log(1name);
// // gives synatx  error : invalid or unexpected token 

// let var = 13
// console.log(var);

// gives the syntax error : unexpected token " var "


// Questions on Operators 

// Q1;- wap that prints the multiplication  table 



// Q2;-Write a program to perform all the arithmetic operations[except increment and decrement operators] of 
// javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.


let num1 = 10;
let num2 = 8;

// addition
console.log("addition of two numbers is : ",num1 + num2);

// subtraction 

console.log("subtraction is given by : ",num1 - num2);

// multiplication 
console.log("multiplication is given by : ", num1 * num2);


// division 

console.log("division is given by : ", num1 / num2);

// modulus

console.log("modulus is given by ; ", num1 % num2);

// exponental 

console.log("exponential is given by : ", num1**num2);


// Q3;- Write a program to find out the perimeter of a rectangle. Print the results to the console

let length = 10;
let breadth = 2 ;
let perimeter = 2*(length * breadth )
console.log("the perimeter of rectangle is : ",perimeter);



// Questions on if else 

// Q1;-. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the 
// traffic light is red print the vehicles must stop

let trafficlight = "red";
if (trafficlight == "red"){
    console.log("stop");
}

else if(trafficlight == "green "){
    console.log("go");
}

else {
    console.log("default");
}



// Q2;-  Write a program to print the largest of 2 numbers

let Num1 = 10 ;
let Num2 = 9 ;

if(Num1 > Num2){
    console.log("Num1 is greater",Num1);
}

else{
    console.log("Num2 is greater ,",num2);
}



// Q3;-  Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible 
// by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to 
// the numbers divisible by 3 or 5

let num = 30;
if (num % 3 == 0 && num % 5 == 0){
    console.log("fizzbuzz");
}
else if(num % 3 == 0){
    console.log("fizz");
}

else if(num % 5 == 0 ){
    console.log("Buzz");
}
else{
    console.log("yep");
}


// switch case 
// Q1;- Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of 
// days until the weekend.

let day = "friday";
switch(day){
    case "monday":
        console.log("6 days");
        break
    case "tuesday":
        console.log("5 days");
        break
    case "wednesday":
        console.log("4 days");
        break
    case "thursday":
        console.log("3 days");
        break
    case "friday":
        console.log("2 days");
        break
        
    case "saturday":
        console.log("1 day to go");
        break
    
    default:
        console.log("check");
        break

}

// Q2;- Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.

let number = 6;
switch (number){
    case 1:
        console.log('jan');
        break
    case  2:
        console.log("feb");
        break
    case 3 :
        console.log("march");
        break
        
    case 4 :
        console.log(april);
        break

    case 5 :
        console.log("may");
        break

    case 6 :
        console.log("june");
        break

    case 7 :
        console.log("july");
        break
    
    case 8 :
        console.log("aug");
        break

    case 9 :
        console.log("sep");
        break

    case 10 :
        console.log("oct");
        break

    case 11 :
        console.log("nov");
        break

    case 12 :
        console.log("dec");
        break

    default:
        console.log("check");
}


// ternary conditions 

// Q1;- Write a program that takes in a number and outputs whether it is positive, negative, or zero.
let NUM = 0 ;
NUM == 0
?console.log("num is zero")
:NUM > 1
?console.log("number is positive")
:console.log("number is negavtive");;;


// Q2;-  Create a program that takes in two numbers and prints the larger one.

let N1 = 10 ;
let N2 = 10  ;
N1 == N2 
?console.log("both are equal")
:N1 > N2
?console.log("n1 is greater")
:console.log("n2 is greater");;;


// loops

// Q1;- Write a program that generates the multiplication table in the textbook format for a given number


let n = 5 ;
for(let i = 0 ; i < 11 ; i++){
    console.log( n ,"x", i ,"=", n*i);
}


// Q2;- Write a program that prints all the positive even numbers till the number specified
let y = 11 ;
for(let x = 1 ; x < y ; x++){
    if (x % 2 == 0){
        console.log("even numbers are", x);
    }
}







