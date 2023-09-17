// _____________________________ Generators In JavaScript ________________________________

function* generateValues() {
    /*yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;*/
    let i = 0
    while (true) {
        yield i++
    }
}

let g = generateValues()
console.log(g.next());
console.log(g.next());
console.log(g.next());

// Unlimited Yields With Loop

for(let value of g){
  if(value>300) break;
}


// Working With Array

function* withArr(){
    yield* ["Aamir", "Haris", "Rahul", "Sundeep"]
}

let r = withArr()
console.log(r.next());
console.log(r.next());
console.log(r.return());  // not printing values after return
console.log(r.next());

// Working with spread operator

function *withSpread(){
    yield "Aamir"
    yield "shahzaib"
    yield "rahul"
    yield "rohan"
    yield "raj"
}
let t = withSpread()
console.log([...t])


