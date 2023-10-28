function createPromise(){
    return new Promise(function exec(resolve , reject){
        // write your asyncronous piece of code here
        setTimeout( function f() {
            console.log("timer done");
            reject("done");
        },3000);
    });
}

console.log("start");
let x = createPromise();
console.log("got a new promise");

// we can use x as a dummy variable 
// x.then means that when the timer is over in your promise object or when your asyncronous code is done then do this. then do this 
// then aslo returns a promise


x.then(function f(value){
    console.log("promise done");
}).catch(function g(value) {
    console.log("handled", value);
}).finally(function fn(){
    console.log("finally");
})
console.log("end");
for(let i = 0 ; i < 100000 ;i++){};

// we can write then inside a then 
