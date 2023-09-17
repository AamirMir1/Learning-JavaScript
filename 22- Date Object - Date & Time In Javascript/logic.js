// ________________________________ Date Object - Date & Time In Javascript ______________________________________________

let today = new Date()                     // To print current date and time
console.log(typeof today, today)                       // The type of date is object

let otherDate = new Date('June 13 2020')                   // you will get a new date
console.log(otherDate)

otherDate = new Date( '09/12/2012/11:10:30')            //DD/MM/YY/Time            
console.log('Other Date is set', otherDate)

let getDay = otherDate.getDay()                      // You can get the otherDate day
console.log(getDay)                   

let getDate = otherDate.getDate()                   // This will show you otherDate Date
console.log(getDate)

let getMinutes = otherDate.getMinutes()                  // This will show you otherDate minutes
console.log(getMinutes)

let getSeconds = otherDate.getSeconds()                   // This will show you otherDate seconds
console.log(getSeconds)

let getHours = otherDate.getHours()                      // This will show you otherDate hours
console.log(getHours)

let getTime = otherDate.getTime()                    // This will show you otherDate time
console.log(getTime)

let getMilliseconds = otherDate.getMilliseconds()                         // This will show you Milliseconds
console.log(getMilliseconds)

let getMonth = otherDate.getMonth()                      // This will show you otherDate month
console.log(getMonth)

let newDate = new Date()
console.log(newDate)

newDate.setFullYear('2050')                // You can set full year
console.log(newDate)

newDate.setMonth('9')                    // You can set month
console.log(newDate)

newDate.setHours('5')                   // You can set hours
console.log(newDate)

newDate.setMinutes('6')                 // You can set minutes
console.log(newDate)

newDate.setSeconds('7')                  // You can set seconds
console.log(newDate)




