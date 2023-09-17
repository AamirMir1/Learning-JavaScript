// ______________________________ Math Object In Javascript ___________________________________

let mathObj = Math;                      // This will give you all the functions of math. The typeof math is object
console.log(mathObj)

let x = Math.PI                        // This will give you the value of PI
console.log('The value of PI is', x)

x = Math.E                         // This will give you the value of E
console.log('The value of E is', x)

x = Math.round(5.5)
console.log('The value of 5.5 after round is', x)                           // The value of 5.3 after round is 5

x = Math.ceil(5.3)
console.log("The value of 5.3 after ceil is", x)                           // The value of 5.3 after ceil is 6

x =  Math.floor(5.9)                                 // The value of 5.2 is 5 after floor
console.log('The value of 5.9 after floor is', x)

x = Math.abs(-532)                     // The value of -532 is 532 after abs
console.log("The value of -532 after abs is", x)

x = Math.sqrt(81)                    // This will give you the number of square root and the square root of 81 is 9
console.log('The value of 81 after sqrt is', x)

x = Math.pow(3, 2)                       // The value of 3, 2 is 8 after pow
console.log('The value of 3, 2 after pow is', x)

x = Math.min(3, 532, 23, 6, 32, 52)                        // This will give you the smallest number from your min function and the smallest number in your min function is 3
console.log('After min =', x)

x = Math.max(3, 532, 23, 6, 32, 52)                        // This will give you the largest number from your min function and the largest number in your min function is 532
console.log('After max =', x)

// ____Generating Randoms Numbers___

x = 300*Math.random()
console.log('This will give you numbers from 0 to 300', x)

x = 70 + (300 - 70)*Math.random()
console.log('This wil give you numbers from 70 to 300', x)

x = 5 + (15 - 5)*Math.random()
console.log('This will give you numbers from 5 to 15', x)

// logic

let player1 = document.getElementById('firstp')
let player2 = document.getElementById('secondp')
let player1Btn = document.getElementById('player1btn')
let player2Btn = document.getElementById('player2btn')

player1Btn.addEventListener('click', function(){
    let plus1 = Math.ceil(5 + (30 - 5)*Math.random())
    player1.innerHTML = plus1
    if(player1.style.color !='blue'){
        player1.style.color = 'blue'
        player2.style.color = 'red'
    }else{
        player1.style.color = 'red'
        player2.style.color = 'blue'
    }
    if(player1.innerHTML == 30){
        setTimeout(aler1, 1000);
        player2.innerHTML = ""
       player1.innerHTML = ""
    player1.innerHTML = 30
    }
    function aler1(){
        alert("Player 1 won")
    }
    
})
player2Btn.addEventListener('click', function(){
    let plus2 = Math.ceil(5 + (30 - 5)*Math.random())
    player2.innerHTML = plus2 
    if(player2.innerHTML == 30){
       setTimeout(aler2, 1000);
       player2.innerHTML = ""
       player1.innerHTML = ""
    }
    if(player2.style.color !='red'){
        player2.style.color = 'red'
        player1.style.color = 'blue'
    }else{
        player2.style.color = 'blue'
        player1.style.color = 'red'
    }
    function aler2(){
        alert("Player 2 won")
    }
})






