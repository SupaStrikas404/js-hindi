// Chaining - Allows to run multiple methods on the same element within a single statement.

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.map((item) => { return item + 10 })

// Chaining
const newNum = myNum
                    .map((item) => item * 10)
                    .map((item) => item + 1)
                    .filter((item) => item >= 50)

console.log(newNum);