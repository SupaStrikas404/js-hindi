/*
const fname="Kabir"
const age=21
console.log(`Hi my name is ${fname}, and my age is ${age}.`);
*/

const first=new String('Kabir Singh')

// Prototype   =>   
console.log(first.toUpperCase());
console.log(first.charAt(6));
console.log(first.indexOf('r'));

// This is "Object" Datatype.
// console.log(typeof first);

// Use to breck the string into small part.
const brke=first.substring(6, 9)
console.log(brke);

// Use to break the string from the middle.
const brk=first.slice(-9, 5)
console.log(brk);


/*
// Trim
const a="       kabir              "
console.log(a);
console.log(a.trim());

// Study => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
*/

const mailId="kabir.02@google.com"
console.log(mailId.replace("google", "iem"));
console.log(mailId.includes("singh"));

const ans="ajgkjj jgloig gogi hh khohopy jl"
console.log(ans.split(" "));