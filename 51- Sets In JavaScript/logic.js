// _______________________________ Sets In JavaScript ______________________________________

// Sets: You can Store unique value in sets

let sets = new Set()   // Initializing an empty set
console.log(sets);

// Adding values to the set

sets.add('Aamir')
sets.add('Rahul')
sets.add('Aliyan')
sets.add('Aamir')    // This value is not be add in the set because you have already set it

console.log(sets);

// Another way to add values in set

let sets1 = new Set([43, 52, "Aamir", "Aliyan", "Rahul", "Aamir"])
console.log(sets1);

// Check the size of set

console.log(sets1.size)

// Checking my value is include in set or not

console.log(sets1.has("Aliyan"))

// Deleting a value from set

console.log("Before Deleting value from set ", sets1)
sets1.delete('Aliyan')
console.log("After Deleted a value from set ", sets1)


// Removing Dublicate elements from an array using sets

let array = ["Rahul", "Sundeep", "Maheshwari", "CarryMinati", "Ashishchanchalani", "CarryMinati", "Sundeep"]

let newSet = new Set(array)
console.log(newSet)
let convertToArr = Array.from(newSet)
console.log(convertToArr)

