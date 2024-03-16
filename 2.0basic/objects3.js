// Objects destructuring

const course = {
    courseName: "Java Script",
    price: 1000,
    courseMentor: "Kabir"
}
// console.log(course.courseMentor);
const {courseMentor:instructor} = course
console.log(instructor);

/*
// Value and Key => String
{
    "name" : "Kabir",
    "age" : 12,
    "location" : "Durgapur",
    "isStudent" : true
}
*/

// JSON Format use to restructured API in different format