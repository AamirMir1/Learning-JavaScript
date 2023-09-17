// ____________________________ Destructuring In JavaScript __________________________

// Destructuring Array

//Example 1:

let a, b, c, d;

[a, b, c, d] = [32, 53, 23, 64]

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// Example 2:

let arr = ["Aamir", "Shahzaib", "Aliyan", "Rahul"]
let [friend1, friend2, friend3, friend4] = arr

console.log(friend1);
console.log(friend2);
console.log(friend3);
console.log(friend4);

// Example 3:

[fruit1, fruit2, ...fruits] = ["Orange", "Mango", "Banana", "Coconut", "Grapes", "Lemon"]

console.log(fruit1)
console.log(fruit2)
console.log(fruits)

// Example 4: 

let numbers = [43, 53, 23, 63, 53, 64, 53, 64, 75, 73, 32, 23, 44]
let [num1, num2, num3, num4, ...nums] = numbers

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(...nums);

// Destructuring Objects

let obj =  {name: "Aamir", Class: "Failiure", subject: "JavaScript", hobby: "Gaming", func: function(){console.log("This is a function")}}

let {name, Class, subject, hobby, func} = obj

console.log(name)
console.log(Class)
console.log(subject)
console.log(hobby)
func()