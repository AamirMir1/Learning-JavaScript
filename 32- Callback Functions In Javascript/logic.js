// ___________________________________________________ Callback Functions In Javascript ___________________________________________

// Pretend that this response is coming from server
let students = [
    {name: "Aamir", subject: "JavaScript"},
    {name: "Harry", subject: "Deep Learning"}
]

function enrollStudents(student, callBack){
    setTimeout(() => {
        students.push(student)
        callBack()
    }, 3000);
}

function getStudents(){
    setTimeout(() => {
        let str = ""
        students.forEach(element => {
            str += `<li>${element.name}, subject = ${element.subject}</li>`
            document.getElementById('students').innerHTML = str;
        });
    }, 5000);
}

let newStudent = {name: "Shahzaib", subject: "Coffee Script"}
enrollStudents(newStudent, getStudents)
// getStudents()