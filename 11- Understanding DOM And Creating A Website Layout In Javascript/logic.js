// _________________________________________________Understanding DOM And Creating A Website Layout In Javascript________________________________________________________

// DOM(Document Object Model) aik tarah ka API hota hai jo humay HTML ko manipulate krnay mai help krta hai.

//The DOM(Document Object Model) is an application programming interface (API) for HTML and XML documents. It allow us to create, change or remove elements from document

// API stands for Application programming interface. It allow different systems to interact with each other

let DOM = document;

console.log('Type of document is ', typeof DOM)                        // Type of document is object
console.log(DOM)

DOM = document.all;                     // Document.all to get all HTML collection. you can also use indexing
console.log(DOM)

DOM = document.links                    // You can get links from DOM using document.links method
console.log(DOM)

DOM = document.body;                    // Document.body to get body from HTML. you can also use indexing
console.log(DOM)

DOM = document.forms; 
console.log(DOM)                

DOM = document.all;
Array.from(DOM).forEach(element => {                                 // You can convert a HTML colleciton to array using this function
    console.log(element)
});

// __Quiz__

// use document.images and document.scripts and print the list of images and scripts on an html page

let img = document.images[0];
console.log(img)

let script = document.scripts
console.log(script)