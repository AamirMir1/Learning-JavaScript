// _________________ Regular Expressions - Character Sets In JavaScript _______________

// Basic Regular Expression Functions - Learned
// Meta Characters Of Regular Expressions - Learned
// Character Sets Of Regular Expressions

let regex = /the/

// Character Sets - []

regex = /co[dib]er/  // Can be an d, i or b 
regex = /co[a-z]er/   // Can be any character from a to z
regex = /na[^em]e/    // Cannot be e or m
regex = /[mn]a[^ne]e/   // You can also you multi character sets
regex = /[a-zA-Z]a[Ry]Ry[0-3]/  // You can also use many characters

// Quantifiers - {} To check the quantity

regex = /HaR{2}y/  // R can occur exactly two times
regex = /HaR{0,2}y/  // R can occur exactly 0 to 2 (0, 1 or 2) times

// Grouping - () We use parenthesis for grouping

regex = /(er){3}/  // er should be three times in the string
regex = /(OP){2}S[0-3]{2}/ // OP should be two times. S should be also include in the string and also 2 times numbers from 0 - 3

let str = "The coder ererer name is HaRy2. OPOPS32 ererer"

let result = regex.exec(str)
console.log("Your match is ", result);

if (regex.test(str)) {
    console.log(`${regex.source} is match with ${str}`);
} else {
    console.log(`${regex.source} is not match with ${str}`);
}
