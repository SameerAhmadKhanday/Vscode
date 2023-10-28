// there are no  classes before the ecmascript6,but there are the blueprints
// that the developers were using that time by using function constructor

function product(n,p,r){
    this.name = n;
    this.price = p;
    this.rating = r;
    // in best case there is no return statement
    // primitive is also ignoredbut non primitive is not ignored
    return {x:10};
}
const p = new product("iphone",100000,4.4);
console.log(p);

// we cant use arrow function as function constructor
// we cant use this with arrow fun