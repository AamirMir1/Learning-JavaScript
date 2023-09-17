// ______________________________ Fetch API In JavaScript _____________________________

function fetching() {
    let url = './fetch.json'
    console.log("Inside fetching before then")
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.json()
    }).then((data) => {
        console.log("Inside second then")
        console.log(data[0])
    })
}
console.log("Before fetching data")
fetching()
console.log("After fetching data")

// POST Request

function PostReq() {
    let url = './fetch.json'
    let postData = '{"name": "Sanjey", "Hobby: "Singing", "email: "sanjey3@gmail.com"}'
    params = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    }
    fetch(url, params).then(response => response.json()).then(data => console.log(data))
}

PostReq()