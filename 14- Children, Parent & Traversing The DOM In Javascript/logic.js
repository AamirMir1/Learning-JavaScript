// _____________________________________Children, Parent & Traversing The DOM In Javascript_______________________________

let get = document.getElementById('cont');

let childNodes = get.childNodes;                            // childnodes will get the elements with new lines, comments and text
console.log(childNodes);

let children = get.children;                             // children will get elements but ignore new lines, comments and text
console.log(children)

let nodeName = get.childNodes[3].nodeName                     // You can get the nodeName using this property
console.log(nodeName)

let nodeName2 = get.children[0].nodeName                   // You can get the nodeName using this property
console.log(nodeName2)

// ______ Node Types _______
/*
   1: Element
   2: Attribute
   3: Text Node
   8: comment
   9: document
   10: docType
*/

let nodeType = get.childNodes[3].nodeType                     // This method will nodeType of your index
console.log(nodeType)

// ___ Traversing___

let childrens = get.children[1].children[5].children[0].style.backgroundColor = 'red'
console.log(childrens)

// ########### Traversing is finished ###########

let gets = document.querySelector('.container')
console.log(gets)

let firstChild = gets.firstChild;                              // This will get the first child of your parent 
console.log(firstChild);

let firstElemChild = gets.firstElementChild;                                 // This will get the first element child of your parent
console.log(firstElemChild);

let lastChild = gets.lastChild;                           // This will get the last child of your parent
console.log(lastChild)

let lastElemChild = gets.lastElementChild;                                  // This will get the last element child of your parent
console.log(lastElemChild)

let childElementCount = gets.childElementCount;                               // This will count how much child element in your parent
console.log(childElementCount)

let parentNode = gets.parentNode;                             // This will get the parent of your parent
console.log(parentNode)

let nextSibling = gets.firstElementChild.nextSibling;                        // This will get the nextsibling of your firstelement 
console.log(nextSibling)

let nextElemSibling = gets.firstElementChild.nextElementSibling.nextElementSibling;                            // This will get the nextElementSibling of your first element
console.log(nextElemSibling)

// --------- Revision ------------
/*
1: childNodes  ___ childnodes will get elements of your parent with next lines, comments and text
2: children ___ children will get elements of your parent without next lines, comments and text
3: nodeName ____ nodeName will print the nodeName of your index
4: nodeType {1:Element 2:Attribute 3:Text Node 8:Comment 9:Document 10:docType} _____ nodeType will get the nodeType of your index
5: firstChild ____ firstChild will get the firstChild of your parent
6: firstElementChild _____ firstElementChild will get the firstElementChild of your parent 
7: lastChild _____ lastChild will get the lastChild of your parent
8: lastElementChild ______ lastElementChild will get the lastElementChild of your parent
9: childElementCount ______ childElementCount will count how much elements in your parent
10: parentNode _______ parentNode will get the parent of parent
11: nextSibling ______ nextSibling will get the next sibling of your element
12: nextElementSibling ______ nextElementSibling will get the next element sibling of your element
*/

let getter = document.querySelector('.container')

let childNodes1 = getter.childNodes;
console.log(childNodes1)

let children1 = getter.children;
console.log(children1)

let nodeName1 = getter.children[0].nodeName;
console.log(nodeName1)

let nodeType1 = getter.children[3].nodeType;
console.log(nodeType1)

let firstChild1 = getter.firstChild;
console.log(firstChild1)

let firstElemChild1 = getter.firstElementChild;
console.log(firstElemChild1)

let lastChild1 = getter.lastChild;
console.log(lastChild1)

let lastElemChild1 = getter.lastElementChild;
console.log(lastElemChild1)

let parentNode1 = getter.parentNode;
console.log(parentNode1)

let nextSibling1 = getter.firstElementChild.nextSibling;
console.log(nextSibling1)

let nextElemSibling1 = getter.firstElementChild.nextElementSibling;
console.log(nextElemSibling1)

let traversing = getter.children['navbar'].children
console.log(traversing)

let childElemCount1 = getter.childElementCount;
console.log(childElemCount1)






