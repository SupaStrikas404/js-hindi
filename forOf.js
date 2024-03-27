// for of Loop (High Order Array Loops)

// ["", "", "", ""]
// [{}, {}, {}, {}]

/*
const myArr = ["Ram", "Sam", "Jadu", "Momo", "Bora"]
// const myArr = [1, 2, 3, 4, 5]
const msg = "Hello Kabir, Good Morning."

for (const val of myArr) {
    // console.log(val);
}
for (const ans of msg) {
    // console.log(`Each char is ${ans}`);
}
*/
// Maps 

const map = new Map();
map.set('IN', "India")
map.set('USA', "America")
map.set('UAE', "Arab")
map.set('UK', "United Kingdom")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key);
    console.log(key, ":", value);
}

// Map is not Iterable in JavaScript can't iteration.
// for (const key in map) {
//     console.log(map[key]);
// }