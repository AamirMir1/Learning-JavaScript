// let fetchBtn = document.getElementById('fetchBtn')
// let backupBtn = document.getElementById('backupBtn')

// fetchBtn.addEventListener('click', handleOnClick)

// // // For Get Request____

// function handleOnClick() {
//     console.log("Clicked on button")
//     // Creating a xhr(XML HTTP Request) Object
//     const xhr = new XMLHttpRequest()

//     // Opening the xhr object

//     xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true)
//     xhr.getResponseHeader('Content-type', 'application/json')
//     // First argument is for Get request 
//     // Second argument is for from where the data will be set
//     // Third argument is for async (means blocking or non blocking) the true argument is for    asynchronous and the false is for synchronous


//     // What to do on progress (optional)
//     xhr.onprogress = function () {
//         console.log('On Progress')
//     }

//     xhr.onreadystatechange = function () {
//         console.log(xhr.readyState)
//     }
//     // 0 is for unset
//     // 1 is for opened
//     // 2 is for send
//     // 3 is for loading
//     // 4 is for Done


//     // What to do when response is ready
//     xhr.onload = function () {
//         if (this.status === 200) {
//             console.log(this.responseText)
//         }
//         else {
//             console.error("Some errors occured")
//         }
//     }

//     // Sending the request
//     xhr.send(params)
// }



// Generating API data in UI

let populate = document.getElementById('populate')
populate.addEventListener('click', populates)
function populates() {
    const xhr = new XMLHttpRequest()
    xhr.open('Get', 'https://fakestoreapi.com/products', true)
    // xhr.getResponseHeader('Content-type', 'application/json')
    // xhr.onprogress = function () {
    //     console.log('On Progress')
    // }

    // xhr.onreadystatechange = function () {
    //     console.log(xhr.readyState)
    // }
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText)
            console.log(obj)
            let str = ""
            let list = document.getElementById('list')
            obj.forEach(element => {
                console.log(element)
                str+= `<li>${element.title}</li>`
                list.innerHTML = str
            });
            // let str = ""
            // let list = document.getElementById('list')
            // for(key in obj){
            //   str += `<li>${obj[key].title}<li>`
            //   list.innerHTML = str
            // }
        }
        else {
            console.error("Some errors occured")
        }
    }
    xhr.send()
}

