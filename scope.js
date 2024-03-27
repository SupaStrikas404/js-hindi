// Nested Scope 

function bigger() {
    const myName = "Kabir"
    function smaller() {
        const website = "leetcode"
        console.log(myName);       // Children function can access Parent function.
    }
    // console.log(website);      // Parent function can not access Children function.
    smaller()
}
// bigger()


if (true) {
    const userName = "Kabir"
    if (userName === "Kabir") {
        website = " leetcode"
        // console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);

//  ++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++++++
// Normal function
// console.log(addone(5));
function addone(num) {
    return num + 1
}
// (function with expression) also, known as hoisting
// console.log(addtwo(5));
const addtwo = function (num) {
    return num + 2
}
// console.log(addtwo(5));