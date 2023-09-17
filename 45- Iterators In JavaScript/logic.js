// ______________________________ Iterators In JavaScript __________________________________

let arr = ["Apple", "Mango", "Orange", "Grapes", "Banana", "Coconut", "Lemon"]
console.log(arr);

let iterateArr = arr[Symbol.iterator]()
// console.log(iterateArr.next())
// console.log(iterateArr.next().done)
// console.log(iterateArr.next())
// console.log(iterateArr.next().value)
// console.log(iterateArr.next().value)
// console.log(iterateArr.next().value)
// console.log(iterateArr.next())
// console.log(iterateArr.next())

let result = iterateArr.next()
while (!result.done) {
    console.log(result.value);
    result = iterateArr.next()
}

// Creating our own iterator

function iterator(values) {
    let nextVal = 0;
    return {
        next: function () {
            if (nextVal < values.length) {
                return {
                    value: values[nextVal++],
                    done: false
                }
            }
            else{
                return {
                    value: undefined,
                    done: true
                }
            }
        }
    }
}
let Iterator = iterator(arr)
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next())
console.log(Iterator.next().value)
console.log(Iterator.next().value)
console.log(Iterator.next())








