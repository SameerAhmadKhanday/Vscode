class product{
    // adding properties -> variables ->data members
    // name;
    // price;
    // rating;


    // creating the constructor method
    // making the variable private
    #rating
    constructor(n ,p ,r){
        console.log("calling the constr");
        this.name = n ;
        this.price = p;
        this.rating = r;
    //    if we try to return primitivr then it is avoided
        // return n;
        //if you return non primitive then it will be defined
        // return {x:0,y:20} 

    }


    static custom(){
        console.log("calling a static method");
    }

    get ratingGetter(){
        console.log(this.#rating);
    }

    set ratingSetter(r) {
        if(r < 0) return;
        this.#rating = r
    }

    // behaviours ->functions ->member functions
    display(){
        console.log("displaying the current product",this.name,this.price,this.#rating);
        
    }
}
// creating object
const p = new product("iphone ",10000,5); 

// updating nammme
// p.name="sam"
// console.log(p.name); 
// in the above piece of code we are calling the constructor method
console.log(p);
p.ratingSetter = 10;
p.ratingGetter;

// calling the member fun
p.display();