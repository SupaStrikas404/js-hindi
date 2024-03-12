// Dates 

let myDate = new Date()
console.log(myDate);                    // (Same)

// console.log(`Today's day is ${myDate.toString()}}`);

console.log(myDate.getMonth());        // Month counting start from '0'
console.log(myDate.getDay());         // Day count start from 'Monday'

// Method of Dates

// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());                 // (Same)
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());           // (Same)
// console.log(myDate.toTimeString());

// console.log(typeof(myDate));

let myDay=new Date(2024, 2, 12)
console.log(myDay.toDateString());

// const newDate = new Date(0);

// console.log(newDate.toString());             // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
// console.log(newDate.toTimeString());        // "00:00:00 GMT+0000 (Coordinated Universal Time)"

// Times

let myTime=Date.now()
console.log(myTime);                        // In Milisec.                      
console.log(Math.ceil(myTime/1000));        // In Sec.