// For Loop 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 7) {
//         console.log("Thala for a reason.");
//     }
//     console.log(element);
// }

/*
for (let i = 1; i <= 10; i++) {
    // console.log(`Class of: ${i}`);
    console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Class ${i} Roll No. ${j}`);
        console.log(`${i} * ${j} = ` + i*j);
    }
}
*/

const myFrnd=["Ram", "Sam", "Jadu", "Momo", "Bora"]

// for (let i = 0; i < myFrnd.length; i++) {
//     const ans = myFrnd[i];
//     console.log(ans);
// }

// Break and Continue 
 
// for (let i = 0; i < myFrnd.length; i++) {
//     console.log(myFrnd[i]);
//     if (myFrnd[i] == "Jadu") {
//         console.log(`Jadu found.`);
//         break
//     }
// }
// console.log(`Jadu is Gaddar.`);


for (let i = 0; i < myFrnd.length; i++) {
    if (myFrnd[i] == "Jadu") {
        console.log(`Skip It...`);
        continue
    }
    console.log(myFrnd[i]);
}