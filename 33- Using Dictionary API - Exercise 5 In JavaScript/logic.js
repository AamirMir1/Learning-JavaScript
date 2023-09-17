// _____________________________ Using Dictionary API - Exercise 5 ______________________

let fetchNames = document.getElementById('fetchNames')
let fetchHobby = document.getElementById('fetchHobby')
let fetchEmail = document.getElementById('fetchEmail')
let fetchPhone = document.getElementById('fetchPhone')
let fetchImage = document.getElementById('fetchImage')
let fetchAddress = document.getElementById('fetchAddress')

let list = document.getElementById('list')
async function fetching() {
    let response = await fetch('fetch.json')
    let data = await response.json()
    return data;
}

fetching().then((res) => {
    fetchNames.addEventListener('click', () => {
        let html = ``
        res.forEach((element, index) => {
            html += `<li>${index + 1}: ${element.name}`
        });
        list.innerHTML = html;
    })

    fetchHobby.addEventListener('click', function () {
        let html = ``
        res.forEach((element, index) => {
            html += `<li>${index + 1}: ${element.Hobby}`
        });
        list.innerHTML = html;
    })

    fetchEmail.addEventListener('click', function () {
        let html = ``
        res.forEach((element, index) => {
            html += `<li>${index + 1}: ${element.email}`
        });
        list.innerHTML = html;
    })

    fetchPhone.addEventListener('click', function () {
        let html = ``
        res.forEach((element, index) => {
            html += `<li>${index + 1}: ${element.phone}`
        });
        list.innerHTML = html;
    })

    fetchImage.addEventListener('click', function () {
        let html = ``
        res.forEach((element, index) => {
            html += `<li>${index + 1}: ${element.image}`
        });
        list.innerHTML = html;
    })
    fetchAddress.addEventListener('click', function () {
        let html = ``
        res.forEach((element, index) => {
            html += `<li>${index + 1}: ${element.address}`
        });
        list.innerHTML = html;
    })
})





