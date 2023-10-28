let obj = {id : 101 , name : "sameer" , salary : 1000000 }
console.log(obj);

let b = new Object();
b.id = 101;
b.name = "sameer";
b.salary = 100000;
console.log(b);

// we can create the objects with the help of function constructors

function emp (i ,n , s){
    this.id = i;
    this.name = n;
    this.salary = s;
}
let x =  new emp(101,"sammy",10000);
console.log(x);
// new makes the new empty objects and and then we assign the values like thid.id , name  , salary



// accessing key values of objects
// object.keyname and we can access the values

let sam = {id : 99 , name : "rouf" , salary : 900900}
console.log(sam.id);
console.log(sam["name"]);

// assigning new values to the object or updating the objeect
sam.salary = 2000000;
sam.id = 13;
console.log(sam);

// deleting values from the object

delete sam.id;
console.log(sam);