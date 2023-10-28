 const powerTwo = (n) =>{
    return n**2
}
// accessing powerTWo function into another fun

function powerCube(powerTWo , n){
     return powerTWo(n) * n
}

console.log(powerCube(powerTwo), 3);



