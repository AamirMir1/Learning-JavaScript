// 2-   ------------- Varibles_ var, let and const ---------------
// Variables are used to store data for example storing strings and integers in variables
// var___ The scope of var is global and you can change, overwrite and redeclear.
var student = "Aamir" // The name of variable is student
var channel = "CodeWithAamir" // The name of variable is channel
var marks = 30 // The name of variable is marks
console.log("The name of student is",student,"He has a channel called",channel,"and the marks of student is ",marks)

// Rules for creating variables
// 1- You cannot start with number
// 2- You can start with letter, _ or $
// 3- Variables are case sensitive

var _village = "Gilgit"
var $country = "Pakistan"
console.log($country, _village)

// const___ You cannot change a const variable but you can add element in const variable
const message = [32, 43, 23, 42, 52, 53]
message.push(30)
message = "You cannot change a const variable" // This will give you error because you cannot change a const variable
// You can add element in a const variable but you cannot change it like message = [43, 42]

// let___ The scope of let is block level scope

let name = "Ayan"
{
    let name = "Aamir"
    name = "Aliyan" // You can chage a let variable
    console.log(name)
}
console.log(name)

/*
Most programming case types
1- camelCase = camelCase mai first word ka first alphabet small hota hai or us say aagay jitnay bhi words ayengay un kay first word ka first alphabet kapital hoga
2- kabab-case = kabab-case mai saray words small hotay hain or is mai aik word kay baad minus ka sign lagaya jata hai
3-snake_case = snake_case mai saray words small hotay hain or is mai aik word kay baad dash ka sign lagaya jata hai
4-PascalCase = PascalCase mai har word ka first alphabet capital hota hai
*/