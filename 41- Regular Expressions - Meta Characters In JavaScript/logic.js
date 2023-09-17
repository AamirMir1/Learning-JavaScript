// ________________ Regular Expressions - Meta Characters In JavaScript _________________

let regex = /Aamir/;

// Looking for some meta character symbols

regex = /^Aamir/;   // ^ means start with expression will match if strings start with
regex = /i$/;    // $ at the end means end with
regex = /Aam.r/;  // . matches any one character
regex = /A*mir/   // * matches any 0 or more character
regex = /Aamm?iri?/  // ? after character means that character is optional
regex = /Aam\*r/  // 
let str = "Aamir is Aamir"

let result = regex.exec(str)
console.log(result)

if (regex.test(str)) {
    console.log(`Your ${regex.source} is matched with ${str}`)
} else {
    console.log(`Your ${regex.source} is not matched with ${str}`)
}

