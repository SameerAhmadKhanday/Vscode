let score =4 ;
function one(){
    let score =0;
    console.log(score);
}

function two(){
    let score = 3 ;
    console.log(score);
}


// if there is no deceleration of score var the it looks for the same variable but outside (global scope) the scope
function three(){
    console.log(score);
}
// one()
// two()
// three()
// console.log(score);

function outerfun(){
    let outervar = " i am at scope level 1"
    function innerfun(){
        let innervar = " i am at scope level 2"
        console.log(outervar);
    }
    console.log(innervar);
    innerfun()
}
//   outerfun()

const myGlobalValue = 0 
function fun(){
    const val1 =1;
    console.log(myGlobalValue );


    function innerOfFun(){
        const val2 = 2
        console.log(val2 , val1 , myGlobalValue);

        function innerOfInnerFun(){
            const val3 = 3
            console.log(val3,val2,val1,myGlobalValue);
        }
        innerOfInnerFun()
    }
    innerOfFun()
}
// fun()


// +++++++++++++++++++  closure

function superFun(){
    let outerValue = " i am outer"
    function minorFun(){
        console.log(outerValue);
    }
    minorFun()
}

//  superFun()



// +++++++++++ real world application


const errorMessage = " file not found"

setTimeout(function callback(){
    console.log(errorMessage);
},1000) 

let pageCount = 0
let items = [2,4,5,7,8]
items.forEach(function iteraror(num){
    pageCount++
    console.log(num);
})

console.log(pageCount);
