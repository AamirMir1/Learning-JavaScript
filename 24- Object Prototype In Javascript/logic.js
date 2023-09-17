// ________________________________ Object Prototype In Javascript ________________________________

// Object Literals___
let obj = {
    name: "Aamir",
    class: "FSC Fail",
    subject: "Computer Science",
    notInterestIn: "Study"
}

// Object Using Constructor

function generalName(myName, myClass, myPerson){
    this.name = myName,
    this.class = myClass,
    this.person = myPerson,
    this.analyze = function(){
        console.log(`${this.name} is a student and the class of ${this.class}`)
    }
}

let firstName = new generalName("Aliyan", "FSC", "Student")

generalName.prototype.getName = function(){
    return this.name ;
}
generalName.prototype.setName = function(myName){
    this.name = myName
}