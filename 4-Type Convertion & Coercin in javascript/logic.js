// _______________________Type Conversion And Type Coercion________________________
// Converting a number to string
let conversion
conversion = String(34) // You can covert a integer to string using String function
console.log("The typeof conversion is ",(typeof conversion)) // The type of conversion will be String because we used String function

// Converting a boolean to string
let booleanVar = true;
console.log(booleanVar, (typeof booleanVar))
booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar))

// Converting a Date to string
let date = new Date()
console.log(date, (typeof date))
date = String(new Date())
console.log(date, (typeof date))

// Converting a array to string
let array = [12, 51, 51, 25, 15, 22]
console.log(array, (typeof array))
array = String(array)
console.log(array.length, (typeof array))

let i = 34;
console.log(i, (typeof i))
console.log(i, i.toString())

// Converting to numbers
let bool = true
console.log(bool, (typeof bool))
bool = Number(true)
console.log(bool, (typeof bool)) // The value of true boolean variable will be 1 after conversion to number because true means 1 
bool = Number(false)
console.log(bool, (typeof bool)) // The value of false boolean variable will be 0 after conversion to number because false means 0 
let textToNum = "This is a text"
console.log(textToNum, (typeof textToNum))
textToNum = Number(textToNum)
console.log(textToNum, (typeof textToNum)) // The result will be Nan because to cannot convert a text to number

// __parseInt__
let number = "34.535"
console.log(number, (typeof number))

number = parseInt(number)
console.log(number, (typeof number)) // The parseInt function remove the number after dot.
number = "34.535"
number = parseFloat(number);
console.log(number, (typeof number))

// ______Type Coercion____
let num1 = "43";
let num2 = 41;
console.log(num1 + num2) // The answer will be 4341 because when you add a (string number) and number then they will be concatinate
