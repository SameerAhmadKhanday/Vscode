
// fetching keys of object
let emp = {
    id : 1 ,
    name : "sameer",
    age : 20 
}
let keys = Object.keys(emp);
console.log("keys are : ",keys)

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

Object.seal(emp);
// allowss updating but stop adding new value to the objec and addition and deletion is also stoped


emp.id = 100 ;
emp.adress = "kmr";
console.log(emp);

// copying value of emp object into o objecct using assign

let o = Object.assign({salary : 10000} , emp);
console.log("new object : ",o);

