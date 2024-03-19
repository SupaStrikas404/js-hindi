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
    // console.log("Inner value:", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// Nested Scope 

function bigger() {
    const myName = "Kabir"
    function smaller() {
        const website = "leetcode"
        console.log(myName);       // Children function can access Parent function.
    }
    console.log(website);      // Parent function can not access Children function.
    smaller()
}
// bigger()


if (true) {
    const userName = "Kabir"
    if (userName == "Kabir") {
        website = " leetcode"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

//  ++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++
// Normal function
console.log(addone(5));
function addone(num) {
    return num + 1
}
// (function with expression) also, known as hoisting
// console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2
}
console.log(addtwo(5));