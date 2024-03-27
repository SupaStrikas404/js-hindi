// IF 

// In "IF" statement if, the condition is "false" code will not execute.  
// if (false) {
//     console.log("Hi there");
// }

// Operator : >, <, >=, <=, ==(It checks only Value), !=, ===(It checks Datatype), !== 

// var is a Global Scope. 



const temp = 23
// if (temp === 25) {
//     console.log("Temperature is normal");
// }
// else{
//     console.log("Temperature is not stable.");
// }


const age = 21
// if (age >= 18) {
//     const component = "helmet"
//     console.log(`You can Drive with ${component}.`);
// }


// // Bad approach of writing code
// const balance = 6000
// if (balance>5000) console.log("you have sufficient balance."), console.log(`Total amount : ${balance}`);


const num = 100
// if (num > 300) {
//     console.log("Test1 Pass");
// }
// else if (num > 500) {
//     console.log("Test2 Pass");
// }
// else if (num > 700) {
//     console.log("Test3 Pass");
// } else {
//     console.log("Number is less then 1000.");
// }


const isSingle = true
const UserAge = 21
const isActive = true
const havingFBacc = false
const havingEmailID = true
if (isSingle && UserAge >= 18 && isActive) {
    console.log("Allow to Create an account.");
    if (havingEmailID || havingFBacc) {
        console.log("Successfully Logged In..");
    }
}
else {
    console.log("Oops You cann't create an accoount.");
}