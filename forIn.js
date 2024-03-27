// for in Loop (High Order Array Loops)



// Objective
const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rs: 'Rust',
    ts: 'TypeScript',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} is the shortcut of ${myObject[key]}`);
}



const myCode = ["js", "cpp", "rs", "ts", "rb"]

for (const key in myCode) {
    // console.log(key);
    console.log(myCode[key]);
}