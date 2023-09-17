//  _______________________________________________ Object Literals, Constructors And Object Oriented In Javascript ________________________________________________________-

// Object Literals For Creating Objects___

let car = {                                  // This is a object literal
    name: "BMW",
    topSpeed: 120,
    price: '3000$',
    run: function(){
        console.log("Your car is running")
    }
}

// Creating A Contructor For Cars___

function generalBike(bikeName, topSpeed, price){
    this.name = bikeName;
    this.speed = topSpeed;
    this.price = price;
    this.run = function(){
        console.log(`${this.name} is running with the speed of ${this.speed} and the price of ${this.name} is ${this.price} and ${this.name} is ${320 - this.speed} kmph slower than sports bike`)
    }
}

let bike1 = new generalBike('Honda', 120, 60000)
let bike2 = new generalBike('CD70', 80, 40000)
let bike3 = new generalBike('Delux', 140, 80000)

function generalProcessor(pName, pCores, pThreads, pPrice, pReleaseDate, pHyperThreading, pOverClocking){
    this.name = pName;
    this.cores = pCores;
    this.threads = pThreads;
    this.price = pPrice;
    this.releaseDate = pReleaseDate;
    this.hyperThreading = pHyperThreading;
    this.overClock = pOverClocking;
    this.analyze = function(){
      console.log(`${this.name} has ${this.cores} cores and ${this.threads} threads and the price of ${this.name} is ${this.price} and the release Date of ${this.name} is ${this.releaseDate} The HyperThreading is ${this.hyperThreading} for ${this.name} and OverClock is ${this.overClock}`)
    }
}

let processor1 = new generalProcessor('Core i3-4030u', 2, 4, 10000, 2014, 'unlocked', 'locked')
let processor2 = new generalProcessor('Core i5-650', 2, 4, 6000, 2010, 'unlocked', 'locked')
let processor3 = new generalProcessor('Core i7-9977k', 8, 16, 34000, 2019, 'unlocked', 'unlocked')

let pName = prompt("What is the name of processor?")
let pcores = prompt('How many cores in your processor?')
let pthreads = prompt("How many threads are in your processor?")
let pprice = prompt("What is the price of your processor?")
let releaseD = prompt("What is the release date of your processor?")
let hyperT = prompt("Is hyperThreading available in your processor?")
let overC = prompt("Is your processor is capable for overclocking?")

let processor4ByUser = new generalProcessor(pName, pcores, pthreads, pprice, releaseD, hyperT, overC)