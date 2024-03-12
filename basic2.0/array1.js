// Array

const myArr = [3, 4, 5, true, "kabir"]
const name = ["kamal", "souro", "ratul", "souvik"]
const arr = new Array(65, 56, 22, 45, 90, 69)
// console.log(myArr[3]);
// console.log(arr);

// Array Method
// myArr.push("Elvish", '0001')
// myArr.push(7)
// myArr.pop()                                            // It jush pop out the last element from an array.

// myArr.unshift(50, "Systumm")                         // Inserts new elements at the start of an array, and returns the new length of the array.
// myArr.shift()                                       // Removes the first element from an array and returns it.

// console.log(myArr.includes(7));                   // Boolean datatype (Use to find the element is present or not.)
// console.log(myArr.indexOf(5));                   // It helps to find exact position in an Array. 

// const newArr=myArr.join()
// console.log(typeof newArr) 

console.log(myArr);                            // Datatype => Object
// console.log(newArr);                       // Datatype => String




// Slice, Splice

console.log("A ", myArr);

const mynew1 = myArr.slice(1, 3)          // Last range not include, and Original array as it is. 
console.log(mynew1);
console.log("B ", myArr);

const mynew2 = myArr.splice(1, 3)        // Last range include, Original array manipulate.

console.log(mynew2);
console.log("C ", myArr);