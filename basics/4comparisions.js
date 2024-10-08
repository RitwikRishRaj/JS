// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);


console.log("2">1);
console.log("02">1);  

console.log(null > 0);//false
console.log(null == 0);// false
console.log(null >=0);// true coz comparision convert null to a number 0
// < > == and >= <= works differently
console.log(undefined <= 0);


// === strict check
console.log("2"=== 2);


//************summary*************** 
//types of memory
//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//************************************* 

//Types of memory
//stack (primitive), heap (Non-primitive)

let myYtName = "ritwik.com"
let anotherName = myYtName
anotherName = "rishuraj"
console.log(myYtName);
console.log(anotherName);



let user = {
    email: "user@google.com",
    upi: "387964@yhsbi"

}

let user1 = user
user1.email = "ritwik@gmail.com"

console.log(user.email);
console.log(user1.email);

