// ____________________________________Arrays And Objects In Javascript___________________________

// ___Arrays___

let fruits = ["Orange", "Mango", "Grapes", "Banana"]                     // Syntax to make a array
let friends = ["Shahzaib", "Ayan", "Sahil", "Sajjad",]                     // Syntax to make a array
let integers = new Array(43, 53, 52, 25, 62, 62, 23 ,56)                     // Syntax to make a array using constructor
console.log(fruits)
console.log(friends)
console.log(integers)
console.log(friends[3])                     // Print a one element from array using indexing
console.log(integers.length)                // length property is used to find the length
console.log((friends))                   // To check this is array or not
friends[2] = "Aamir"                       // To change a element from array using indexing
console.log(friends)
console.log(fruits.indexOf("Grapes"))             // To find the position of your element

// ___Mutating or Modifying Arrays___

friends.push("Kashan")            // push function is used to add a last element in array
console.log(friends)
friends.unshift("Ali")            // unshift function is used to add a first element in array
console.log(friends)
friends.pop()                  // Delete the last element from array
friends.shift()               // Shift function is used to delete the first element from array
friends.splice(2, 1, "Rahul")                     // Splice function is used to add or remove element from your array
console.log(friends)
friends.reverse()                  // Reverse function is used to reverse the array 
console.log(friends)
let addArrays = friends.concat(integers)                 // concat function is used to add arrays or elements
console.log(addArrays)

// ___Objects___ Syntax to make a object
let myobj = {
    name: "Aamir",
    class: "FSC1",
    channel: "CodeWithAamir",
    Subject: "Computer Science",
    arr: [32, 44, 34, 12, 61]
}
console.log(myobj)
console.log(myobj.name)
console.log(myobj["name"])

















