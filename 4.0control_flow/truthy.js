// Truthy Value - If value is assumed as true without comparing the condition true/flse.
// Examples:
// Falsy Value - false, 0, -0, BigInt 0n, "", null, NaN, undefined
// Truthy Value - "0", 'false', " ", [], {}, function () {}
/*
false == 0      => (true)
false == ""     => (true)
"" == 0         => (true)
*/




// const userMailid = "kabir.org@gmail.com"
// const userMailid = ""
const userMailid = []

if (userMailid) {
    console.log("You have mail id");
}
else {
    console.log("You don't have mail id");
}

// if (userMailid.length === 0) {
//     console.log("Array is empty.");
// }

const empObj = {}
if (Object.keys(empObj).length === 0) {
    console.log("Object is empty.");
}



// Nullish Coalescing Operator (??): null  undefined

let val1;
// val1 = 10 ?? 15
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 7 ?? undefined ?? 10            // When it will get first value, it will return.

console.log(val1);



// Terniary Operator 
// Syntax => condition ? true : false 

const userAge = 21
userAge >= 18 ? console.log("You can drive") : console.log("You can't drive")