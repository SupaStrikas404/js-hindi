const myNum = [1, 2, 3, 4, 5]

// const total = myNum.reduce(function (acc, cur) {
//     console.log(`Accumulator is: ${acc} and Current Value is: ${cur}`);
//     return acc + cur
// }, 0)

const total = myNum.reduce((acc, cur) => acc + cur, 0)

// console.log(`Total number is: ${total}`);


const courses = [
    {
        courseName: "Python course",
        price: 999
    },
    {
        courseName: "Java Script course",
        price: 2999
    },
    {
        courseName: "AIML course",
        price: 4999
    },
    {
        courseName: "Data Science course",
        price: 9999
    },
    {
        courseName: "Web Dev course",
        price: 6999
    }
]

const price = courses.reduce((acc, item) => acc + item.price, 0)

console.log(`Total Price is : ${price}`);