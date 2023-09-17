// ____________________________________HTML Elements Selectors In Javascript_______________________________________

/* __Elements Selectors__
1:  Single Element Selector => getElementById, query selector
2:  Multi Elements Selector => getElementsByClassName, getElementsByTagName 
*/

// 1: Single Element Selector |

let identifier = document.getElementById('first')                          // You can get a HTML element from his id
console.log(identifier)

let className = identifier.className                     // You can get class name of the element
console.log(className)

let childs = identifier.childNodes                        // You can get childs of your element using childNodes method
console.log(childs)

let parents = identifier.parentNode                       // You can get the parent of your element
console.log(parents)

let customerize = identifier.style.backgroundColor = "gray"
console.log(customerize)

let innertext = identifier.innerText = "Aamir is a programmer"                         // You can also change the inner text of your element

let innerHTML = identifier.innerHTML = "<b>Aamir is a bold programmer</b>"                          // You can change the innerHTML of your element

console.log(identifier.innerHTML, identifier.innerText)                    // You can get innertext or innerHTML of element

let querySel = document.querySelector('.container')                        // You can also use querySelector to get elements
console.log(querySel)

querySel = document.querySelector('#first')                          // You can also use querySelector to get elements
console.log(querySel)

querySel = document.querySelector('h1')                          // You can also use querySelector to get elements
console.log(querySel)

// 2: Multi elements selector

let multi = document.getElementsByClassName('container')                   // You can get elements by it's class name
console.log(multi[0].getElementsByClassName('child'))                   // You can get elements by it's class name

let tag = document.getElementsByTagName('div')                      // You can get element by it's tag name
console.log(tag)

for (let index = 0; index < tag.length; index++) {                         // you can iterate HTML collection using for loop
    const element = tag[index];
    element.style.backgroundColor = 'purple'
}

Array.from(tag).forEach(element => {                            // You can also iterate these HTML collection
    element.style.color = 'red'
});





