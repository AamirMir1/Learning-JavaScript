/* ______________________________Data Types In Javascript______________________________

There are two data types in javascript Primitive Data Type and Reference Data Type

1- Primitive Data Type: Primitive Data Type muul data type hota hai yaani is ka memory allogation stack mai hota hai

Primitive Data Types Examples
i - Strings => " " String means the collection of characters 
ii - Numbers => 34
iii - Booleans => true false
iv - Null => Empty
v - Undefined => means value is not assigned
vi - Symbol => Symbols are newly introduced in ES6 and these are use to store unique value

2- Reference Data Type: Reference Data Type ka memory allogation heap mai hota hai (heap means dynamic) or Reference Data Types objects hotay hain

Reference Data Type Examples
i - Arrays
ii - Object Literals
iii - Functions
iv - Dates

*/
// 1- Primitive Date Types

// __Strings__
var str = "Aamir";
console.log("Data Type Of Str is " + (typeof str))  // Typeof property is used to check the type of variable

// __Numbers__

var Marks = 30;
console.log("Data type of Marks is " + (typeof Marks))

//__Boolean__ boolean may be true or false

let isDriver = true;
console.log("Data Type of isDriver is " + (typeof isDriver))

// __null__ The data type of null is object

let nullVar = null;
console.log("Data Type of null is " + (typeof nullVar))

// __undefined__ 
let undef = undefined;
console.log("Data Type of undef is " + (typeof undef))

// 2- Reference Data Types
// __Array__
let array = [12, 41, 51, 25, "String", undefined, true, false] // The Data type of array will be object because array is a reference data type
console.log("Data Type Of Array Is " + (typeof array))

// __Object Literals__
let obj = {
    Name: "Aamir",
    Class: "FSC1",
    Subject: "ICS",
    'Roll Number': 33
}
console.log("Data Type Of Obj is " + (typeof obj))

// __Function__
function findName(){
console.log("This is a function")
}
console.log("Data Type Of findName Function is " + (typeof findName))

let date = new Date()
console.log("Data Type of date is " + (typeof date))
