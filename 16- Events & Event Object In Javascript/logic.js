// _________________________ Events & Event Object In Javascript ________________________

document.getElementById('heading').addEventListener('click', function(e){                                 // The second call back function e is event object
    console.log(e)
    let targetElem = e.target.className                      // e.target to get the element in which you have add the event
    console.log(targetElem)

    console.log("The class name of element is ", e.target.className)                                // You can get the class name of the element
    console.log("The id of element of is ", e.target.id)                              // You can get the id of element                                
    console.log("The distance from x is ", e.offsetX)                                 // You can get the distance from x
    console.log("The distance from y is ", e.offsetY)                                 // You can get the distance from y
    console.log("The client distance from x is ", e.clientX)                          // You can get the client distance from x
    console.log("The client distance from y is ", e.clientY)                          // You can get the client distance from y

    let classList = e.target.classList;
    Array.from(classList).forEach(element =>{                                         // You can iterate the class List of element
        console.log(element, " is the class name of element")                         
    })
})

