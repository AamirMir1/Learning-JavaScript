let proto = {
    slogan: function () {
        return `Our company is the best`
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// Creating a object

let harry = Object.create(proto)
harry.name = "Aamir"
harry.salary = 100000;
harry.role = "Programmer"
harry.changeName('Shahzaib')
console.log(harry)

// Alternative syntax to create a object

let harry1 = Object.create(proto, {
    name: {value: 'harry', writable: true},                  // You have to set writable to change the value
    role: {value: 'Programmer'},
    salary: {value: 9000000}
})
harry1.name = "Aliyan"
console.log(harry1)

// Constructor for employee

function Employee(name, salary, experience, role){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
    this.role = role
}

// slogan

Employee.prototype.slogan = function(){
    return `Our company is the best regard, ${this.name}`
}

let newEmployee = new Employee("Aamir", 158923, 82, "Programmer")
console.log(newEmployee.slogan())

// Constructor for programmer

function Programmer(name, salary, experience, role, language){
    Employee.call(this, name, salary, experience, role);
    this.language = language
}

// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype)                   // Syntax to inherit the prototype

// Manually set the prototype

Programmer.prototype.constructor = Programmer

let rohan = new Programmer("Rohan", 580217, 33, 'Programmer', "Javascript")
console.log(rohan)

// Quick Quiz__ Food Inheriting

function ingredients(ingre1, ingre2, ingre3, ingre4, ingre5){
    this.ingre1 = ingre1
    this.ingre2 = ingre2
    this.ingre3 = ingre3
    this.ingre4 = ingre4
    this.ingre5 = ingre5
}

ingredients.prototype.recipe = function(){
    return `You have to add ${this.ingre1} first and then ${this.ingre2} and then mix them in a container and wait for 5 minutes and then mix ${this.ingre3}, ${this.ingre4} and ${this.ingre5}. Hope your ${this.foodName} is good`
}

function cake(ingre1, ingre2, ingre3, ingre4, ingre5, foodName){
    ingredients.call(this, ingre1, ingre2, ingre3, ingre4, ingre5);
    this.foodName = foodName
}

cake.prototype = Object.create(ingredients.prototype)
// cake.prototype.recipe = cake

let makingcake = new cake("Sugar", "Milk", "Flour", "Banana", "Foods", "Cake")
console.log(makingcake.recipe())

// Thanks for the exercise
















