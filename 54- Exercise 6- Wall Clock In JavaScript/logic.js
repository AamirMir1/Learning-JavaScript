// ______________________ Exercise 6- Wall Clock In JavaScript ________________________

function updateTime(){
    // Getting The Current Date
    let currentTime = new Date()

    // Extract Hours, Minutes and Current From The Date
    let currentHours = new Date().getHours()
    let currentMinutes = new Date().getMinutes()
    let currentSeconds = new Date().getSeconds()
     
    // Minus 12, when the hours is greater than 12 because we don't need 24 hours time
    currentHours = (currentHours > 12? currentHours - 12: currentHours)

    // Pad 0, if minutes, seconds and hours is less than 10 (single digit)
    currentSeconds = (currentSeconds<10? '0' + currentSeconds: currentSeconds)
    currentMinutes = (currentMinutes<10? '0' + currentMinutes: currentMinutes)
    currentHours = (currentHours<10? '0' + currentHours: currentHours)

    // Adding AM and PM In Clock
    let amOrPm = (currentHours < 12? "AM": "PM")

    // Adding Time In DOM
    let time = `${currentHours}: ${currentMinutes}: ${currentSeconds} ${amOrPm}`
    let displayClock = document.getElementById('clock').innerHTML = time;
}

setInterval(() => {
    updateTime()
}, 1000);