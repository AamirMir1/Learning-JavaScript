// _________________________________________ ES6 Classes And Inheritance In Javascript _________________________________________________

class Employee {
    constructor(newName, newExperience, newDivision) {  // Constructor
        this.name = newName;
        this.experience = newExperience;
        this.division = newDivision;
    }
    slogan() {  // Prototype
        return `I am ${this.name} and this company is the best`
    }
    joiningYear() {
        return `I am in this company since ${2022 - this.experience}`
    }
    static add(a, b) {  // Static method                 // You can use the static method without creating a object
        return a + b;
    }
}

let harry = new Employee('Harry', 56, 'Division')
console.log(harry)


class Programmer extends Employee {
    constructor(newName, newExperience, newDivision, language, github) {
        super(newName, newExperience, newDivision)                 // You can call the arguments from your Employee constructor
        this.language = language;
        this.github = github;
    }
    favouriteLanguage() {
        if (this.language == 'python') {
            return "Python";
        }
        else {
            return "Javascript";
        }
    }
    static mulitiply(a, b) {
        return a * b;
    }
}

let rohan = new Programmer("Rohan", 3, "Division", "Go", "Rohan")
console.log(rohan)
console.log(rohan.favouriteLanguage())
console.log(Programmer.mulitiply(9, 9))

// Revision






























class Dynamo {
    constructor(givenName, givenSalary, givenPC, givenAddress) {
        this.name = givenName;
        this.salary = givenSalary;
        this.pc = givenPC;
        this.address = givenAddress;
    }
    analyzePerson() {
        return `The name of person is ${this.name} and the salary of ${this.name} is ${this.salary}. And he has a gaming pc called ${this.pc}. The address of ${this.name} is ${this.address}`
    }
    static add(a, b) {
        return a + b;
    }
    comparison(){
        return `Comparison between ${dynamo.name} and ${shroud.name} = ${dynamo.salary - shroud.salary}`
    }
}

let dynamo = new Dynamo("Dynamo", 300000, "Alienware Aurora R11", "Delhi")
console.log(dynamo)

class Shroud extends Dynamo {
    constructor(givenName, givenSalary, givenPC, givenAddress, gamerType){
        super(givenName, givenSalary, givenPC, givenAddress);
        this.gamerType = gamerType;
    }
}
   
let shroud = new Shroud("Shroud", 400000, 'Ultra Pro Max', "Thailand", "FPS")
console.log(shroud)