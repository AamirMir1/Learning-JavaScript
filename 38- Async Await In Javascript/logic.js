//____________________________ Async Await In JavaScript ________________________

async function fetching() {
    console.log("I am calling 1")
    let response = await fetch('fetch.json');
    console.log("I am calling 2")
    let data = await response.json()
    return data;
    console.log("I am calling 3")
}

console.log("I am calling 4")
fetching().then((res)=>{
console.log(res)
}).catch((error)=>{
console.log(error);
})
console.log("I am calling 5")
