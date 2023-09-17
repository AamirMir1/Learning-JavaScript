// ______________________________ Maps In JavaScript _________________________________

// Maps : Map is a collection of key-value pairs where the key can be of any type.

let map = new Map()
console.log(map);

const key1 = "This is a string", key2 = {}, key3 = function () { };

// Setting map values

map.set(key1, 'Aamir is developer')
map.set(key2, 'This is a blank object')
map.set(key3, 'This is a blank function')
console.log(map);

// Getting map values

let getVal = map.get(key1)
console.log(getVal);

// Getting the size of the map

console.log(map.size);         // Keep in mind map.size is not a function it's a method

// You can loop using for.. of to get keys and values

for (let [key, value] of map) {
    console.log(key, value);
}

// Get only keys of map

for (let key of map.keys()) {
    console.log('key is ', key);
}

// Get only values of map

for (let value of map.values()) {
    console.log('value is ', value);
}


// You can loop through a map using for each loop

map.forEach((value, key) => {
    console.log('value is ', value);
    console.log('key is ', key);
})

// Converting map to an array

let mapToArr = Array.from(map)
console.log(mapToArr);

// Converting map keys to an array

mapToArr = Array.from(map.keys())
console.log('Keys are ', mapToArr);

// Converting map values to an array

mapToArr = Array.from(map.values())
console.log('Values are ', mapToArr);


















