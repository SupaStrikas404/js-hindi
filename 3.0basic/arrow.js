// "this" keyword is use for current context.
// For browser "Window" is global Object; so, "this" use "Window" as current context. 



const user = {
    userName: "Kabir",
    age: 21,

    greetingmsg: function () {
        console.log(`Hi ${this.userName}, welcome to this website.`);
        console.log(this);
    }
}
// user.greetingmsg()
// user.userName = "Abhishek"
// user.greetingmsg()

// console.log(this);



// Normal Function
// function site() {
//     website: "leetcode"
//     console.log(this.website);        // This context is use for Object only not for Function.
// }
// Arrow Function
const site = () => {
    website: "leetcode"
    console.log(this.website);        // This context is use for Object only not for Function.
}

// site()


// Implicit Return 
const sumNumber = (n1, n2) => n1 + n2 
// const sumNumber = (n1, n2) => (n1 + n2)
console.log(sumNumber(4, 6));

// const myUser = (fName) => ({userName: "Kabir"})
// console.log(myUser.userName);