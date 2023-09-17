// //_____________________________________________ Promises Basics, Promise then() & Promise catch() _____________________________________________

/* Promise:
   resolve
   reject
   pending
*/
//  Promises are used to handle asynchronous operations in JavaScript.

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Congratulations, no error found")
                resolve("no error occured")
            }
            else {
                console.log("Too bad error occured")
                reject("function: error occured")
            }
        }, 2000);
    })
}
func1().then(function () {
    console.log("there is no error")
}).catch(function (error) {
    console.log("error is found" + error)
})






function func() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (error) {
                resolve("No Error Occured")
            }
            else {
                reject("Error Occured")
            }
        }, 1500);
    })
}
func().then(function (error) {
    console.log(error + " In Your Program")
}).catch(function (error) {
    console.log(error + " In Your Program")
})


let students = [
    {name: "Aamir", subject: "JavaScript"},
    {name: "Harry", subject: "Deep Learning"}
]

function enrollStudents(student){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            students.push(student)
            const error = false;
            if(error){
              resolve()
            }
            else{
                reject()
            }
        }, 3000);
    })
}
function getStudents(){
    setTimeout(() => {
        let str = ""
        students.forEach(element => {
            str += `<li>${element.name}, subject = ${element.subject}</li>`
            document.getElementById('students').innerHTML = str;
        });
    }, 1000);
}

let newStudent = {name: "Shahzaib", subject: "Coffee Script"}
enrollStudents(newStudent).then(getStudents).catch(function(){
    console.log("error is occured")
})
