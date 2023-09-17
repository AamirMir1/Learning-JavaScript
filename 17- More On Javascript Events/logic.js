// ____________________________ More On Javascript Events _______________________________

let btn = document.getElementById('btn')

btn.addEventListener('click', funcName)                            // This is a click event
btn.addEventListener('dblclick', funcName2)                        // This is a double click event
btn.addEventListener('mousedown', funcName3)                        // This is a mouse down event

function funcName(e){
    console.log("Thanks Your For The Single Click", e)
    e.preventDefault()                       // This function is used to not submit form
}

function funcName2(e){
    console.log("Thanks You For The Double Click", e)
    e.preventDefault()                       // This function is used to not submit form
}

function funcName3(e){
    e.preventDefault();
    console.log("This is a mouse down event")
}

document.querySelector('h1').addEventListener('mouseenter', function(){                      // This is a mouseenter event
    console.log("You entered the mouse")
})

document.querySelector('h1').addEventListener('mouseleave', function(){                     // This is a mouseleave event
    console.log("You leaved the mouse")
})

document.addEventListener('mousemove', function(e){                            // This is a mousemove event
   console.log("This is the offsetX", e.offsetX)
   console.log("This is the offsetY", e.offsetY)
   document.body.style.backgroundColor = `rgb(${e.offsetY} ${e.offsetY} ${e.offsetX})`
})
