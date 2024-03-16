// Object constructor

// const newUser = new Object()                            // Singleton object
const newUser = {}                                        // Nonsingleton object

newUser.id = "123abc"
newUser.fname = "Kabir"
newUser.password = 54321
newUser.activeStatus = true

// console.log(newUser);

const normalUser = {
    email: "kabir@gmail.com",
    fullDet: {
        Firstname: "Kabir",
        age: 21,
        active: {
            isActive: true
        }
    }
}
// console.log(normalUser.fullDet.active.isActive);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
// const obj3 = { obj1, obj2 }               // Object inside an object
// const obj3 = {...obj1, ...obj2 }                             // Same
const obj3 = Object.assign({}, obj1, obj2)                     // Same
// console.log(obj3);

const customer = [
    {
        id:111,
        email:"ar@mail.com"
    },
    {
        id:222,
        email:"kr@mail.com"
    },
    {
        id:333,
        email:"pp@mail.com"
    },
    {
        id:444,
        email:"ar@mail.com"
    }
]
// console.log(customer[2].email);

console.log(newUser);

console.log(Object.keys(newUser));
console.log(Object.values(newUser));
console.log(Object.entries(newUser));

console.log(newUser.hasOwnProperty("activeStatus"));