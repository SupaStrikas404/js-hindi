// for Each Loop (High Order Array Loops)

const coding = ["js", "cpp", "c", "java", "py", "css"]


// // Normal Function 
// coding.forEach(function (val) {
//     console.log(val);
// });


// // Arrow Function 
// coding.forEach(item => {
//     console.log(item);
// });


// // Calling diff. Function 
// function printIt(item) {
//     console.log(item);
// }
// coding.forEach(printIt)


// coding.forEach((val, index, arr) => {
//     console.log(val, index, arr);
// });



const myCoding = [
    {
        languageName: "JavaScript",
        languageFilename: "js"
    },
    {
        languageName: "Python",
        languageFilename: "py"
    },
    {
        languageName: "C++",
        languageFilename: "cpp"
    },
    {
        languageName: "Rust",
        languageFilename: "rs"
    }
]
myCoding.forEach((item) => {
    // console.log(item.languageFilename);
    // console.log(item.languageName);
    console.log(`${item.languageName} language save as ${item.languageFilename} file.`);
});