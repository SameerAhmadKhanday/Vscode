const OneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

// const threeArray = OneArray.concat(twoArray)
//  ... spread operator
const threeArray = [ ...OneArray, ... twoArray]
console.log(threeArray);

// arguments into an array
function manyArguments(){
    let args = Array.from(arguments)
    let finalarr = args.map(e => e)
    console.log(finalarr);
}




// another way  ||  Rest operator
function manyArguments2 (...args){
    console.log(typeof args);
    let finalArr =  args.map(e => e)
    console.log(finalArr);
}


// manyArguments2(1,2,3)
manyArguments2(1,2,3,4,5,6,7)




// +++++++++++++++++++++++++++++++++++++++++
const names = ["sam" , "rouf" ,"yasir","saif"]
const newnames = ["batman",...names ,"thor"]
console.log(newnames);
// spread
const name = "sameer"
console.log([...name]);

// rest
function pwSkills(...values){
    return values
}
console.log(pwSkills("sam","rouf"));

