const myCoding = ["js", "cpp", "c", "java", "py", "css"]

// forEach Loop is not return anything.
// const value = myCoding.forEach(item => {
//     console.log(item);
//     return item
// });
// console.log(value);


// Filter 


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNum.filter((item) => item > 5)

/*
// If you are using "scope-{}" then you have to use return. 

const newNum = myNum.filter((item) => {
    return item > 5
})
*/

const newNum = []

myNum.forEach((item) => {
    if (item > 5) {
        newNum.push(item)
    }
});

// console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'Science', publish: 1999, edition: 2020 }
  ];

// const myBook = books.filter((sort_book) => sort_book.genre === 'Science')

const myBook = books.filter((sort_book) => {
    return sort_book.publish >= 1995 && sort_book.genre === 'History'
})

// console.log(books);
console.log(myBook);