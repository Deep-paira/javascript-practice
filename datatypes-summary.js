//  Primitive

//  7 datatypes : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  //False (because return type is not same)

// const bigNumber = 3456543576654356754n  //use "n" at the end

// Reference (Non primitive)

// Array, Objects, Functions

const superheros = ["Ironman", "Batman", "Spiderman"];
let myObj = {
    name: "Deep",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

/*

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object         

*/
//link to study..
// https://262.ecma-international.org/5.1/#sec-11.4.3

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (primitive) , Heap (Non-primitive)

let myname = "Deep"
let anothername = myname
anothername = "Delta"

console.log(myname)
console.log(anothername) 

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "deep@google.com"

console.log(userOne.email); 
console.log(userTwo.upi)    //Giving the reference of UserOne not a copy..