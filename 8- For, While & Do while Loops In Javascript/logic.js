// _______________________________________For, While And Do while Loops In Javascript____________________________________________

// General Loops: For, While, Do while

// ___For Loop___

for(let i=0; i<100; i+=1){
    console.log(i + " is less than 100")
}

let countries = ["Pakistan", "Iran", "Africa", "Indonesia", "America", "Canada"]

for (let i = 0; i < countries.length; i++) {
    // const element = countries[i];
    console.log(element + " is a country")
}

// ___While Loop___

let j = 0;

while (j<150) {
    console.log(j + " is less than 150");
    j+=1;
}

// ___Break and Continue___
let i = 0;
do{
    if(i===25){                               // when the value of i becomes 25 the loop will be break (means stop)
        break;
    }
    console.log(i + " is less than 50");
    i++;
}while(i<50)

// Example 2

i = 0;
for(i=0; i<30; i+=1){
    console.log(i + " is less than 30")
    if(i===20){
        break;
    }
}

// ___Continue___

i = 0;

do{
    if(i===25){
        i+=5                                  // After 25, 5 numbers will be not print 
        continue;
    }
    else if(i === 35){
        i+=5                                   // After 35, 5 numbers will be not print
        continue;
    }
    console.log(i + " is less than 50")
     i+=1;
}while(i<50)

// ___forEach___

friends = ["Aliyan", "Rahul", "Sajjad", "Ayan", "Shahzaib"]

friends.forEach(element => {
    console.log(element + " is a friend")
});

// ___forIn Loops___

let obj = {
    Name: "Aamir",
    Class: "FSC1",
    Subject: "Computer Science",
    rollNo: "33",
    OS: "Windows OS"
}

for(let key in obj){
    console.log(`The ${key} of student is ${obj[key]}`)
}











