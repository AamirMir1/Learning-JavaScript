// ______________Strings-Properties, Methods And Template Literals in javascript_______________

let string = "Aamir is a good boy"
let string2 = "and he has a channel called"
let string3 = "CodeWithAamir"

// ___Template Literal___  You can write template literal using back tex
console.log(`${string} ${string2} ${string3}`) // This is the method to write template literal

// ___String Methods And Properties___

let concatinate = "Aamir "
let concatinate2 = "is a good boy"
let str = concatinate.concat(concatinate2) // concat function add variables but not mathematically
console.log(str)
console.log(str.length) // Length property is used to find the length of variable
str = str.toUpperCase() // This function convert the text to uppercase means CAPITALIZE
console.log(str)
str = str.toLowerCase() // This function convert the text to lowercase means not CAPITALIZE
console.log(str)

console.log(str[4]) // This method called indexing. This will print the 5th character of variable because the indexing starts from 0
console.log(str.indexOf('good')) // indexOf function finds the first position of your character
console.log(str.lastIndexOf('d')) // lastIndexOf function finds the last position of your character
console.log(str.charAt(5)) // charAt function print 5 position character 
console.log(str.endsWith('boy')) // if my text ends with boy this will print true or if my text is not end with boy this will print false
console.log(str.includes('good')) // if good is include in my text this will print true or if its not include in my text this will print false
console.log(str.substring(0, 4)) // Substring function print from start to -1 end you can also gives substring to -values
console.log(str.slice(0, 5)) // slice function print from start to -1 end
console.log(str.split(' ')) // Split function is used to cut the words and took them into a array
console.log(str.replace("good", "bad")) // replace function replace the word from your text which you have entered

// __Quick Quiz__   Generating HTML using template literals

// let template = `<h1 style = "color: red;">This is HTML using template literal</h1>`
// document.write(template)





