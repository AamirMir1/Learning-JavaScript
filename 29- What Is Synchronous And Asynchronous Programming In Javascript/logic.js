// Example Of Synchronous Programming

// for (let index = 0; index < 4000; index++) {
//     const element = index;
//     console.log('This is index ', index)
// }

// console.log('Done printing')


// Example Of Asynchronous Programming

setTimeout(() => {
    for (let index = 0; index < 4000; index++) {
        const element = index;
        console.log('This is index ', index)
    }
}, 50);

console.log('Done printing')