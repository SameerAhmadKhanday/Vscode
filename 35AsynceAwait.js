function createPromise(){
    return new Promise(function exec(resolve , reject){
        // write your asyncronous piece of code here
        setTimeout( function f() {
            console.log("timer done");
            reject("done");
        },3000);
    });
}

async function consume(){
    try{
        console.log("inside function");
        const response = await createPromise();
        // const response1 = await createPromise();
        console.log("response is ", response );

    } catch(err){
        console.log("handled " ,err);
    }
    
}
console.log("start");
consume();

console.log("end");