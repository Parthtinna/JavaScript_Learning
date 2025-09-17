// Primitive 

 // 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 const id =Symbol('123')
 const anotherId = Symbol('123')
 
 console.log(id === anotherId);

 const bigNumber = 32345593939393939n
 

 // Reference (Non - Primitive)

// Array, Objects, Functions


const heros = ["IronMan","SpiderMan","Hulk"];

let myobj ={
    name:"parth",
    age: 21,
};

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction);

console.log( typeof anotherId);