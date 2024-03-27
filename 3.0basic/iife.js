// Immediately Invoked Function Expression (IIFE)  -  A function that immediately execute as it is defined.
// (When use more than 1 IIFE function) => In IIFE function invoked immediately but, you have to stop each context by ";" at the end of the function.

// Normal Function
function myComputer() {
    console.log(`Server is connecting....`);
}
myComputer();

// Immediately Invoked   =>   (function definition)(function execution)
(function myComputer() {
    // Named IIFE
    console.log(`Server is connecting....`);
})();

// Arrow Function
((user) => {
    // Noname IIFE
    console.log(`Hello welcome to the ${user}'s computer.`);
})('Kabir')