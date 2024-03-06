// Dates 

let myDate=new Date()
console.log(myDate);      // Same
  
// Method of Dates

console.log(myDate.toLocaleString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());         // Same
console.log(myDate.toDateString());
console.log(myDate.toISOString());     // Same
console.log(myDate.toTimeString());

// console.log(typeof(myDate));

// let myDay=new Date(2024, 2, 12)
// console.log(myDay.toDateString());

const d = new Date(0);

console.log(d.toString()); // "Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time)"
console.log(d.toTimeString()); // "00:00:00 GMT+0000 (Coordinated Universal Time)"
