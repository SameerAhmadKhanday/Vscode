// let myHeros = ["thor","spidreman"]
// let dcHeros = ["batman","flash","superman"]


// inheritance
const user = {
    name : "top name",
    email : "top@gmail.com"
}

const teacher = {
    makeVideo : true,
}

const teacherSupport = {
    isAvailable : false
}

const Taassistant = {
    makeassignment : "js assignment",
    fulltime : true,
    // inheriting methods of teachersupport
    __proto__:teacherSupport
}
console.log(Taassistant.isAvailable);
// or wee can do this to inherit the methods
teacher.__proto__ = user;
console.log(teacher.name);

// mostly we us this

Object.setPrototypeOf(teacher , Taassistant);