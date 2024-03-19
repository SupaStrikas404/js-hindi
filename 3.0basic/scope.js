// "var" value will change if it's call inside the block scope.

// Global Scope
let a = 10
var b = 20
// const c = 30

// Block Scope
if (true) {
    let a = 100
    var b = 300
    const c = 200
    console.log("Inner value:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope 