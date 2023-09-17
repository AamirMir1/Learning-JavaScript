// _____________________________ Symbols In JavaScript _________________________________

// Symbols are primitive data types which are newly introduced in ES6 Version and these are unique primitives

let sym1 = Symbol("This is a string")  
let sym2 = Symbol("This is a string")

console.log(sym1 == sym2);  // This will give you false because both are unique values
console.log(sym1.description)    // To get the value of symbol
console.log(sym2.description)    // To get the value of symbol

// Storing Symbols in object
let obj = {}

obj[sym1] = "This is symbol1"
obj[sym2] = "This is symbol2"
obj["name"] = "Aamir"

console.log(obj);

// Symbols are ignore in loops

for(let key in obj){
    console.log(key, obj[key])
}


