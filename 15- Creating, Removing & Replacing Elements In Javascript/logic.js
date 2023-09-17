//_____________________________________Creating, Removing & Replacing Elements In Javascript___________________________________

let element = document.createElement('li');

//___ Add a class name, id and attribute in element

element.className = 'liChild';                 // You can give a class name to element
element.id = 'listitem';                       // You can give id to element
element.setAttribute('title', 'myTitle')                         // You can set attribute in element
// element.innerText = 'Hello this li element is created by Aamir'                    // You can set innerText of element
console.log(element)

let listitems = document.querySelector('#navbar')
listitems.appendChild(element)                 // appendChild is used to append something in it

let text = document.createTextNode('Hello this text is created by createTextNode function')                           // This function create a text node
element.appendChild(text)                 // appendChild is used to append something in it

//____ Replacing Element ____

let element2 = document.createElement('h3');                      // createElement function is used to create a 
element2.className = 'heading';                          // You can set a class name of a element using this method
element2.id = 'h3Heading';                                // You can set id of a element using this method
element2.setAttribute('title', 'myTitle');                              // You can set attribute of a element using this method
let text2 = document.createTextNode('Hello this is a h3 heading created by createTextNode function')
element2.appendChild(text2)                 // appendChild is used to append something in it
element.replaceWith(element2)                       // You can replace a element using replaceWith function

let replace = document.getElementById('navbar');
// replace.replaceChild(element, document.getElementById('services'))                    // replaceChild function is used to replace a child element from its parent
console.log(replace)
replace.removeChild(document.getElementById('services'))                                 // removeChild function is used to remove a element from a container

let attrib = element.getAttribute('class')                                         // getAttribute function is used to get the attribute of the element
console.log(attrib)

let attrib2 = element.getAttribute('id')                                         // getAttribute function is used to get the attribute of the element
console.log(attrib2)

let hasAttrib = element.hasAttribute('placeholder')                              // hadAttribute function is used to check the attribute is available or not
console.log(hasAttrib)

let hasAttrib1 = element.hasAttribute('class')                                       // hadAttribute function is used to check the attribute is available or not
console.log(hasAttrib1)

element.removeAttribute('class')                                       // removeAttribute function is used to remove the attribute from a element
console.log(element)


//------ Revision ------
/*
1: createElement()                  // createElement is used to create a element
2: createTextNode()                 // createTextNode is used to create a text node
3: className = ""                   // This method is used to set the class name of element
4: id = ""                          // This method is used to set the id of element
5: innerText = ""                   // innerText property is used to set the innerText of the element
6: setAttribute()                   // setAttribute function is used to set the attribute of element
7: getAttribute()                   // getAttribute function is used to get the attribute of element
8: hasAttribute()                   // hasAttribute function is used to check the attribute is available or not
9: removeAttribute()                // removeAttribute function is used to remove a attribute from element
10: removeChild()                    // removeChild function is used to remove a element from a container
11: appendChild()                   // appendChild function is used to add a element in a container
12: replaceWith()                   // replaceWith function is used to replace a element
13: replaceChild()                  // replaceChild function is used to replace a parent child
*/

// ___ Quick Quiz ___
// Create a heading element with text CodeWithHarry and set the link in a anchor tag

let element_ = document.createElement('h1')
let elemTxt = document.createTextNode('Go To CodeWithHarry')
element_.appendChild(elemTxt)
let body = document.body;
body.appendChild(element_)
let anchor = document.createElement('a')
anchor.setAttribute('href', 'https://www.CodeWithHarry.com')
let anchorTxt = document.createTextNode('Link Here')
anchor.appendChild(anchorTxt)
body.appendChild(anchor)





let createElem = document.createElement('li')
createElem.className = "listItem"
createElem.id = "listIdentifier"
createElem.setAttribute('title', 'myTitle')
// createElem.innerText = "This is innerText"
let createTxtNode = document.createTextNode('This is a text node')
createElem.appendChild(createTxtNode)
console.log(createElem)
let listItems = document.getElementById('navbar')
listItems.appendChild(createElem)
console.log(listItems)
let getAttrib = createElem.getAttribute('class')
console.log(getAttrib)
let hasAttribs = createElem.hasAttribute('title')
console.log(hasAttribs)
createElem.removeAttribute('title')
console.log(createElem)

let newGet = document.getElementById('navbar')
console.log(newGet)
let newElem = document.createElement('h1')
let txt = document.createTextNode('This is red heading')
newElem.appendChild(txt)
console.log(newElem)
newGet.appendChild(newElem)
{
    newElem.style.backgroundColor = 'red',
        newElem.style.borderRadius = '15px'
}
console.log(newGet)

let replacechld = document.getElementById('navbar')
console.log(replacechld)

// replacechld.removeChild(document.getElementById('h3heading'))
replacechld.replaceChild(newElem, document.getElementById('h3heading'))
/*

1: createElement()
2: createTextNode()
3: className = ""
4: id = ""
5: innerText = ""
6: setAttribute()
7: getAttribute()
8: hasAttribute()
9: removeAttribute()
10: appendChild()
11: replaceWith()
12: replaceChild()
13: insertBefore()
*/