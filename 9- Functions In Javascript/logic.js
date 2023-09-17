// ___________________________________________________Functions In Javascript__________________________________________________

// Functions are the block of codes which is use do particular tasks repeatedly

let student1 = "Aamir";
let student2 = "Aliyan";

function greet(name1, name2) {
      console.log(`${name1} is a good boy and ${name2} is a bad boy and ${name1} is also a talented guy`)

}
let returnVal = greet(student1, student2)
console.log(returnVal)
const greetings = function (st1, st2) {
      console.log(`${st1} is boy and ${st2} is not a boy`)
}
greetings(student1, student2)

// ___Function in object___

let obj = {
      name: "Aamir",
      greet: function(){
            return "GTA";
      },
      class: "FSC1"
}

console.log(obj.class)
console.log(obj.name)
console.log(obj.greet())

let fruits = ["Mango", "Apple", "Banana", "Orange", "Lemon", "Grapes"]
fruits.forEach(function(element, index, array) {                              // You can print element, index and array from an array. The first parameter of the function give us element of the array and the second one give us index and the third give us array
      console.log(element, index, array)
});

// ___ Scope ____ The const and let has block level scope and var has functional level scope

var i = 235;
console.log(i)

function ui(name){
      i = 21;                                     // If you will change a var in function it will change globaly
      console.log(i)
      let messaged = `${name} is a programmer`
     return messaged;
}
 
console.log(i)                             // The answer will be 21 because you have changed the value of var in function

let returned = ui("Aamir");
console.log(returned)

{
      let bloke = 500;
      
}
// console.log(bloke)        // This will give you error because your variable is defined in a block 

{
      var globbal = 100;
}
console.log(globbal)                     // This will not give you error because var has functional level scope and you are in a block

function varBlock(){
      var functionalVar = 600;
}
console.log(functionalVar)                             // This will give you error because var has functional level scope and you have console in global so the var is not defined in global

