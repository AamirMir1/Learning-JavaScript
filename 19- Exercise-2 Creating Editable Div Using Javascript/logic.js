// Creating a element
let myElem = document.createElement('div')
myElem.setAttribute('class', 'elem')
myElem.setAttribute('id', 'myElem')
myElem.setAttribute('style', 'border: 2px solid red; border-radius: 5px; width: 150px; background-color: gray; padding: 20px')
let text;
let val = localStorage.getItem('text')
if (val == null) {
    text = document.createTextNode('Please Type Here To Add A Text')
} else {
    text = document.createTextNode(val)
}
document.addEventListener('mousemove', function (e) {
    myElem.style.backgroundColor = `rgb(${e.offsetX} ${e.offsetY} ${e.offsetX})`
})
myElem.appendChild(text)
let container = document.querySelector('.container')
let secondLast = document.getElementById('myfirst')
container.insertBefore(myElem, secondLast)

myElem.addEventListener('click', function () {
    let noOfText = document.getElementsByClassName('textarea').length
    if (noOfText == 0) {
        let html = myElem.innerHTML
        myElem.innerHTML = `<textarea class="textarea" id="textarea">${html}</textarea>`
    }
    let textarea = document.getElementById('textarea')
    textarea.addEventListener('blur', function () {
        myElem.innerHTML = textarea.value;
        localStorage.setItem('text', myElem.innerHTML)
    })
})
let fruits = ["Orange", "Shahzaib", "Mango", "Banana"]
console.log(fruits)
fruits.pop()                    
console.log(fruits)
fruits.pop()
console.log(fruits)

fruits.push('Aliyan')
console.log(fruits)

fruits.reverse()
console.log(fruits)

fruits.shift()
console.log(fruits)

let arr = [12, 43, 53, 63]
fruits = fruits.concat(arr)
console.log(fruits)

fruits.splice(2, 1, "Agrrhy")
console.log(fruits)

fruits = fruits.includes('Agrrhy')
console.log(fruits)


let str = "This is my friend and your name is Aamir"
val = str.charAt(3)
console.log(val)

rocket = str.lastIndexOf('is')
console.log(rocket)

roc = str.replace('This', "Shahzaib")
console.log(roc)


