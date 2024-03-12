// Premitive Datatype
// 7 Types: String, Number, Boolean, null, Symbol, undefined, BigInt.

const mark=5657
const markVal=278373.234
const isjob=false
const money=null
const want=undefined
// let password
// console.log(typeof password);

const id=Symbol('0005')
const code=Symbol('0005')
// console.log(id===code);

const bigNumber=349843689345648689862396423n
// console.log(typeof bigNumber);


// Non Premitive Datatype
// Refference Type: Array, Objects, Function.
const frnd=["Ratul", "Souvik", "Sappy", "Avik"];
// console.log(frnd);
let myDet={
    fname:"Kabir",
    age:21,
    isMarried: false,
    money:null 
}
// console.log(myDet);
const myFunc = function() {
    console.log("Hi this is Kabir.");
}
// console.log(myFunc);
// console.log(typeof myFunc);
// console.log(typeof myDet);
// console.log(typeof frnd);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non Primitive)

let myname="kabir" 
let fname=myname
fname="Abhishek"

// console.log(myname);
// console.log(fname);

let user = {
    email:"kabir@mail.com",
    upi:"kabir@upi",
    id:1234
}
let user1=user
user1.email="Abhishek@iem.com"

console.log(user);
console.log(user1);