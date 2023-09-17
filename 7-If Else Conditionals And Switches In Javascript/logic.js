// _________________________________If Else Conditionals And Switches In Javascript___________________________________
// ___Comparison Operators___ ==, ===, !=, !==,

//  == will check the value
//  === will check the type and value
// != means is not equal to
// !== means is not equal to and type
// >= means greater than or equal to
// <= means less than or equal to 
// ___Logical Operators___ &&, ||, ?

// && means and - In this operator if one condition will be false the condition will be false
// || means or - In this operator if one condition will be true the condition will be true
// ? ternary operator

// Example of ___ == ___

let age = 30;

if(age == "30"){                       // The if condition will be true because == will not check type it will check only value
    console.log("Age is 30")
}
else{
    console.log("Age is not 30")
}

// Example of ___ === ____

age = 30;

if(age === "30"){
    console.log("Age is 30")
}

else{                            // The else condition will be true because === will check the type and value
    console.log("Age is not 30")
}

age = 40;

if(age != 30){                         // The if condition will be true because age is not equal to 30
    console.log("Age is not equal to 30")
}
else{
    console.log("Age is equal to 30")
}

// Example of ___ !== ___

age = 51;

if(age !== '51'){                      // The if condition will be true because type is not equal
    console.log("Age is not equal to '51'")
}
else{
    console.log("Age is equal to '51'")
}

// Example of ___ && ___

let age1 = 40
let age2 = 21
let age3 = 32

if(age1> 39 && age2>33 && age3> 30){                       // The if condition will be true because one condition false
    console.log("All ages are correct")
}
else{
    console.log("All ages are not correct")
}

// Example of ___ || ____

let count1 = 40;
let count2 = 30;
let count3 = 11;

if(count1<50 || count2 === 52 || count3>30){                                 // The if condition will be true because a one condition is correct
    console.log("Some counts are correct")
}
else{
    console.log("Some counts are not correct")
}

// Example of ___ ? ____
let number = 77;
console.log(number === 77? "Number and type of number is equal to 77": "Number is not equal to 77")


// _____Switch Case Statements____

age = 20;

switch(age){
    case 18:
        console.log("Your age is 18")
        break;

    case 19:
        console.log("Your age is 19")
        break;

    case 20:                                                       // Case 20 will be print because the 20 is true
        console.log("Your age is 20")
        break;

    case 21:
        console.log("Your age is 21")
        break;

    case 22:
        console.log("Your age is 22")
        break;

}

























