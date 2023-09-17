// _________________________________ Local & Session Storage In Javascript _______________________________

// _____ localStorage ________

window.localStorage.setItem('Friend1', "Shahzaib")                          // You can add a key and value in local storage
window.localStorage.setItem('Friend2', "Sharu")
window.localStorage.setItem('Friend3', "Ayan")
window.localStorage.setItem('Friend4', "Sahil")
window.localStorage.setItem('Friend5', "Alijo")
window.localStorage.setItem('Friend6', "Sajjad")

console.log(window.localStorage)                       // This will print the keys and values in a object because the type of localStorage is object
console.log(typeof localStorage)                       // The type of localStorage is object

let bestFriend = window.localStorage.getItem('Friend1')                          // You can the the item using this function and it's key
console.log(bestFriend)

// localStorage.clear()                       // You can clear the localStorage using this function

window.localStorage.removeItem('Friend1')                          // You can remove a item from your local Storage
console.log(localStorage)                    // Congratulations your item is removed

// You can't add a array and object in localStorage. If you try to add a array and object in localStorage it will be converted into string

let importantArr = ["Mango", "Banana", "Grapes", "Walnut", "Apple"]
window.localStorage.setItem('Fruits', importantArr)                       // Your array is converted into string and placed in localStorage and its key is fruit                        
console.log(localStorage.getItem('Fruits'))

// You can add a array in localStorage using JSON.stringify and JSON.parse functions

let favDishes = ["Chawal", "Bhindi", "Biryani", "Palak Paneer", "Roti"]
window.localStorage.setItem('Dishes', JSON.stringify(favDishes))                         // Your array is converted into string without any change and stored in localStorage
console.log(localStorage.getItem('Dishes'))    

let reArray = JSON.parse(window.localStorage.getItem('Dishes'))                            // You can also reconvert to array using this function
console.log(reArray)

// You can also add a object in localStorage using JSON.stringify and JSON.parse functions

let importantObj = {
    name: "Aamir",
    class: "FSC1",
    subject: "ICS",
    hobby: "Dancing, Gaming, Coding",
    favDish: "Biryani"
}

window.localStorage.setItem('Biography', JSON.stringify(importantObj))                        // Your object is now placed in localStorage and its type is string
console.log(localStorage.getItem('Biography'))
console.log(window.localStorage)

let reobject = JSON.parse(localStorage.getItem('Biography'))
console.log(reobject)

// _______ sessionStorage __________  

// The functions and methods are same for sessionStorage and localStorage 
// the difference is that if you closed your browser the sessionStorage will be cleared and the localStorage will not be cleared

sessionStorage.setItem('sessionName', "sessionAamir")
sessionStorage.setItem('sessionName2', "sesssionShahzaib")

console.log(sessionStorage.getItem('sessionName'))
console.log(sessionStorage.getItem('sessionName2'))

// Revision___
/*
localStorage.setItem('studentName', "Aamir")                  // To add a item in localStorage
localStorage.getItem('studentName')                   // To get the item from localStorage
localStorage.clear()                      // To clear the localStorage
localStorage.removeItem('studentName')                       // To remove item from localStorage

let array = ["elem1", "elem2", "elem3", "elem4", "elem5"]
localStorage.setItem('Array', JSON.stringify(array))                    // To add a array or object in localStorage
let reArray = JSON.parse(localStorage.getItem('Array'))                 // To reconvert in array or object

let obj = {
    name: "Aamir",
    class: "first year",
    subject: "Computer Science",
    favGame: "Farcry Series",
    favDish: "Biryani"
}

localStorage.setItem('Object', JSON.stringify(obj))                  // To add a object in localStorage
let reObject = JSON.parse(localStorage.getItem('Object'))              // To reconvert in object or array
*/
