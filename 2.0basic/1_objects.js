// There are 2 types to declare an Objects -> Literal, Constructor.
// Singleton -> If objects are declear by constructor.

// Object Literals

const mySym = Symbol("Key1")

const user = {
    fname: "Kabir",
    "name": "Traveling",
    location: "Durgapur",
    age: 21,
    [mySym]: "myKey1",
    email: "abhishek.raut@gmail.com",
    login: false,
    lastActive: ["Saturday", "Sunday"]
}

// console.log(user.email);
// console.log(user["location"])
// console.log(user["name"]);
// console.log(user);

user.email = "abhishek2002@gmail.com"
// console.log(user.email);

Object.freeze(user)          // Use to lock the element in the Object.

// user.email="kabir@outlook.com"
// console.log(user);

// console.log(user[mySym]);
// console.log(typeof user[mySym]);