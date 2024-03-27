// While and Do-While Loop

// let index = 0
// while (index <= 10) {
//     console.log(`value of the index is: ${index}`);
//     index = index + 2
// }

const myFrnd = ["Ram", "Sam", "Jadu", "Momo", "Bora"]

let i = 0
while (i < myFrnd.length) {
    console.log(`My friend: ${myFrnd[i]}`);
    i = i + 1
}


// In do-while loop It will execute first then check the conditions.  

let money = 1
do {
    console.log(`Price is: ${money}`);
    money++
} while (money <= 10);