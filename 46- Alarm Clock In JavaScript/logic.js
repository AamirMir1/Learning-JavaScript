// ______________ Alarm App ______________

let AlarmBtn = document.getElementById('AlarmBtn')
let date = document.getElementById('Date');
let StopAlarm = document.getElementById('StopBtn')
function ringBell() {
    let alarmAudio = new Audio('./alarm.mp3');
    alarmAudio.play()
    StopAlarm.addEventListener('click', function (e) {
        e.preventDefault();
        alarmAudio.pause()
    })
}

AlarmBtn.addEventListener('click', function (e) {
    e.preventDefault()
    let alarmTime = new Date(date.value)
    let nowTime = new Date()
    let test = alarmTime - nowTime
        setTimeout(() => {
            ringBell()
        }, test);
})