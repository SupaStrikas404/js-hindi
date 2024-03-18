// A lot of code put inside the package and send the copy of it's and call that. 

function myName() {
    console.log("K");
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("R");
}
// myName()

// function muntiply(num1, num2) {
//     console.log(num1 * num2);
// }
function muntiply(num1, num2) {
    // let ans = (num1 * num2);
    // return ans
    return num1 * num2
}
const result = muntiply(3, 4)
// console.log("Result :", result);

function hack(userName) {
    if (userName == undefined) {
        console.log("Finding user's system...");
        return
    }
    return `${userName} you system is hacked....`
}
console.log(hack());
console.log(hack("Kabir"));