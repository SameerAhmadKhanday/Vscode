// using classic function 
let arr = [2,3,4];
arr.forEach(function(element , index , arr){
    console.log(index , element , arr);
})

// using arrow function
arr.forEach( (element , index , arr) =>{
    console.log("arrow :",index,element,arr);
})


// convert all the heros name to upper case whose name is in lower case
const heros = ["sameer raj","sanat","rouf","saif"];
heros.forEach((el) => { console.log(el.toUpperCase())});

// map function 
arr.map(function(element,index,arr){
    console.log(element,index,arr);
})

heros.map((h) =>{console.log(h.toUpperCase())});

// filter
console.log(heros);

const herosWithRaj = heros.filter((h) =>{
   return h.endsWith("raj");
})
console.log(herosWithRaj);


// shopping cartt ,final bill


const cartBill = [20,30,50];
const sumOfCartBill = cartBill.reduce((prev , curr) =>prev + curr ,0);
console.log(sumOfCartBill);

// game score 
const gameScore =[200,100,300,250,150 ,"sam"];
// check if all values are numbers 
const gameScoreCheck = gameScore.every((v) =>typeof v ==="number");
console.log("check ",gameScoreCheck);

// find score above 200
const above200 = gameScore.find((score)=> score > 200);
console.log(above200);


const numbers = [10, 20, 30, 40, 50];

// Use findIndex to find the index of the first element greater than 25
const index = numbers.findIndex((element) => element > 25);

if (index !== -1) {
  console.log(`The first element greater than 25 is at index ${index}.`);
} else {
  console.log("No element greater than 25 was found in the array.");
}
// console.log(index);


// some
const Numbers = [10, 15, 20, 25, 30];

// Check if at least one number is greater than 20
const hasNumberGreaterThan20 = Numbers.some((number) => number > 20);

if (hasNumberGreaterThan20) {
  console.log("At least one number is greater than 20.");
} else {
  console.log("No number is greater than 20.");
}

const NUmbers = [10, 15, 20, 25, 30];

// Use forEach to iterate through the array and print numbers greater than 20
NUmbers.forEach((number) => {
  if (number > 20) {
    console.log(number);
  }
});

// sorting  , gives in ascending order

const number = [3, 1, 8, 5, 2, 7, 4, 6];

// Sort the array in ascending order (default behavior)
number.sort((a, b) => a - b);

console.log(number); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

