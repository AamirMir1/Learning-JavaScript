// ________________________ For In Loop VS For Of Loop In JavaScript ______________________

// Traditional For Loop With Object

let obj = {
    name: "Aamir",
    subject: "JavaScript",
    hobby: "Gaming"
}

// Object.values is for object values
for (let i = 0; i < Object.values(obj).length; i++) {
    const element = Object.values(obj)[i];
    console.log(element)   
}

// Object.keys is for object keys
for (let i = 0; i < Object.keys(obj).length; i++) {
    const element = Object.keys(obj)[i];
    console.log(element)   
}

// Traditional for loop with string

let str = "Aamir is a software developer"
for (let i = 0; i < str.length; i++) {
    const element = str[i];
    console.log(element)
}

// For in Loop

let obj2 = {
    name: "Haris",
    subject: "Django",
    hobby: "Coding"
}

for(let values in obj2){
    console.log(obj2[values]);
}

// For Of Loop

let array = ['Aliya', undefined, 'Haris', 50, 'Junaid', ['Rahul', 'Aliyan', 'Sagar'], 'Raj', 'Ayesha'];

for(let elements of array){
    console.log(elements)
}
