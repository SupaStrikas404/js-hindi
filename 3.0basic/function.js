// A lot of code put inside the package and send the copy of it's and call that. 
// Function and Parameters

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

function hack(userName = "Syste's Name") {                      // Default user name is set.
    if (!userName) {                                           // userName == undefined    OR    !userName
        console.log("Finding user's system...");
        return
    }
    return `${userName} your system is hacked....`
}
// console.log(hack());
// console.log(hack("Kabir"));


// Functions with Objects

function calculateCartPrice(...item1Price) {
    return item1Price
}
// function calculateCartPrice(item1, item2, ...item1Price) {
//     return item1Price
// }
// console.log(calculateCartPrice(400, 200, 500, 1000));

const user = {
    userName: "Kabir",
    location: "Durgapur",
    isActive: true,
    age: 21
}
function userDetails(anyUser) {
    console.log(`This is ${anyUser.userName}, from ${anyUser.location}. His active status is ${anyUser.isActive} and age is ${anyUser.age}.`);
}
// userDetails(user)
userDetails({
    userName: "Ram",
    location: "Ayodhya",
    isActive: "true",
    age: Infinity
})

const myArr = [100, 200, 300, 400, 500]

function secondValue(anyArr) {
    return anyArr[1]
}
// console.log(secondvalue(myArr));
console.log(secondValue([300, 250, 100, 220]));