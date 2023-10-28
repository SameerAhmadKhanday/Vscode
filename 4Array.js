let a = [1,2,3,4,"sam",false];
console.log(a);


// another way of creating array
let b = new Array(1,2,3,"sam");
console.log(b);

// let given array  - >  [1,2,3,4,5,"sam"]
// we can access all the elements by their respective indexing,starting with 0 
// index of last element = arr.length - 1

console.log(b[3]);
// how we update our array at some particular indexes
b[3] = "sameer"
console.log(b);

// how  we reverse the given array
let x = [1,2,3]
console.log(x.reverse());



// array methods

let s = [1,2,3,4,5]
s.push (6,7)
console.log(s);

// removes the last element 
s.pop();
console.log(s);

// removes the first element
let k = s.shift();
console.log(k);
console.log(s);

// used to add the element at the first position
s.unshift(10);
console.log(s);

// addition / concatination of arrayas 

let a1 = [1,2,3,]
let a2 = [3,4,5,]
let a3 = a1.concat(a2);
console.log(a3);

// joins the element
let S = a3.join("*");
console.log(S);

// gives index of elements

let v = [1,2,3,4,5]
console.log(v.indexOf(3));

// slice for particular continuous elements of an array 

let s1 = [1,2,3,4,5,6,7,8,9]
console.log(s1.slice(1,6));

// splice
s1.splice(2,0,11);
console.log(s1);





for(let i = 1 ; i < 101 ;i++){
    console.log("i love you");
}
