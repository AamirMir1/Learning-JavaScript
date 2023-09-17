// _______________ Regular Expressions And Related Funcitons In JavaScript ______________

let str = "Aamir is a good boy and Aamir is a software developer"

let reg = /Aamir/ // This is a regular expression literal
reg = /Aamir/i  // i means case insensitive
reg = /Aamir/g  // g means global flag


console.log(reg)
console.log(reg.source)  // Give you the inner text regular expression literal

// Functions to match expressions 😊😊😊

// 1: exec()  This function will return array for match or null for no match

let result = reg.exec(str)
console.log(result)
result = reg.exec(str)
console.log(result)

result = reg.exec(str)
console.log(result)  // You can use multiple exec() with global flag

result = reg.exec(str)
if (result) {
    console.log(result.input)
    console.log(result.index)
}

// 2: test()  Returns true for match or false for no match

let result2 = reg.test(str)
console.log(result2); // This will only print true if reg is there in the str else false

// 3: match()  // This will return an array of results or null

// let result3 = reg.match(str)   // This is wrong!
let result3 = str.match(reg)   // This is right!
console.log(result3)


// 4: search()  Return index of first match else -1

let result4 = str.search(reg)
console.log(result4)

// 5: replace()  Returns new replaced string with all the replacements. (if no global flag is given, only first match string will be replace)

let result5 = str.replace(reg, "Haris")
console.log(result5);

// Revision -
/*
Syntax of regular expression
    let reg = /yourName/

// Functions of regular expression

1: exec()  return an array for match or null for no match
2: test()  return true for match or false for no match
3: match()  return an array of match results or null for no match
4: search()   return the index of first match or -1 for no match
5: replace()   return a string with all the replacements (if no global flag is given, only first match character will be replaced)
*/







