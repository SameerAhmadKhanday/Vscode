// regex or regular expression 
// defining regEx 
let pattern = "sameer"


let regExOne = new RegExp(pattern)
let flag = "gi"

let regExTwo = new RegExp(pattern , flag)

// short cut for defining the regEx

let regExThree = /sameer/g

const strToCheck = "hey my name is sameer , Sameer is from kashmir,sameer is a good boy "
// checking by regEx
const result = regExThree.test(strToCheck)
console.log(result);

// another result and checking it from the string
const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult);

const onemoreresult =strToCheck.replace(regExThree,"p - w")
console.log(onemoreresult);

// use case

const weburl = "https://abc.com/sameer%70khanday"
const newweuurl = weburl.replace(/%\d0/ , '-')
console.log(newweuurl);