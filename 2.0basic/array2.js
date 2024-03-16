 const myName = ["Ram", "sam", "Krish", "Sappy"]
const car = ["AUDI", "TATA", "BMW", "TOYOTA"]

// myName.push(car)          // Push -> Push the element inside the existing array.
// console.log(myName);
// console.log(myName[4][2]);

// const newArr = myName.concat(car)     // Concat -> It returns new array.
// console.log(newArr);

// const all_new = [...myName, ...car]      // Spread operator -> Spread the element in Individually.
// console.log(all_new);

//Create an array with subarray
const other_array = ["Kabir", "Kamal", "Sappy", ["He/Him", "She/Her", "They/Them"], 7, [25, 69, "Durgapur", [5, 8, 9]]]

// const new_other_arr=other_array.flat(Infinity)     // Flat -> Returns a new array with all sub-array element up to the specified depth.
// console.log(new_other_arr);

console.log(Array.isArray("Kabir"));
console.log(Array.from("Kabir"));
console.log(Array.from({ name: "KABIR" }));     // Interesting

let num1 = 69
let num2 = 70
let num3 = 100
let num4 = 200
console.log(Array.of(num1, num2, num3, num4));