let emptySet = new Set()
// console.log(emptySet.size);

let myArray = [1,2,3,4,3,4,5]
let mySet =new Set(myArray)
console.log(mySet);

// mySet.add(7)
// console.log(mySet);
// console.log(mySet.has(0));
mySet.clear()
console.log(mySet);

// +++++++++++++++++++
// set difference || gives the unique elements

function setDifference(setA , setB){
   return new Set([...setA].filter((el)=> !setB.has(el)))

}
const setA = new Set([1,2,3,4,5])
const SetB = new Set([4,5,6,7,1])

const difference = setDifference(setA , SetB);
console.log(difference);

// ++++++++++++++
// Map

let map = new Map()
console.log(map.size);

let arr = [
    [1, "sameer"],
    [2 , "rouf"],
    [3 , "saif"],
    [4 , "yasir"]
];
arr.map((arrayItem) => map.set(arrayItem[0],arrayItem[1]))