// ______________________________________  Arrow Functions In Javascript __________________________________________

// You can create a function using arrow function

const str = ()=>{            // Syntax of arrow function
    return "Hello World";
}
str()              // You can't print the return value like this it will give you undefined you must have to use console.log to print the return value
console.log(str())                  // Printing the return value

const str1 = ()=> "Hello World 2"         // You can return a value without using curly brackets in arrow functions
console.log(str1())

const obj = ()=> ({name: "Aamir", subject: "JavaScript"})                // You have to use these () to return a object
console.log(obj())

const str2 = name => name + "is a good boy"          // You can also pass only a one argument to arrow function without using brackets ()
console.log(str2("Aamir"))

const str3 = (name, subject)=> `The name of student is ${name} and the subject of student is ${subject}`
console.log(str3("Aamir", "JavaScript"))
