// ____________ Regular Expressions - Shorthand Character Classes In JavaScript ____________


// Character Classes In Regular Expressions

let regex = /\wware/g // \w means word character - _ or alphabet or numbers
regex = /\w+ware/    // \w+ means one or more word character
regex = /\Wode/   // \W means non word character
regex = /\W+ /    // \W+ one of more non characters
regex = /\d858 /  // \d means digit
regex = /\d+858 /  // d+ means one of more digit
regex = /\Dper/   // \D means non digit
regex = /\D+per/  // \D means one of more non digits
regex = /\s03/      // \s match whitespace characters
regex = /\s+is/     // \s match one or more whitespace characters
regex = /\Sdeveloper/   // \S match non whitespace characters
regex = /\S+developer/   // \S+ match one or more whitespace characters
regex = /is\b/     // word boundary - a word should be after (is) whitespace

// Assertions

regex = /Num(?=b)/     // b should be after Num 
regex = /softwar(?!m)/    // m should not be after softwar

let str = "Number 03583923858     is da softwaresdeveloper. %%%^&^& And Aamir isode with aamir" 

let result = regex.exec(str)
console.log(result);

if (regex.test(str)) {
    console.log(`${regex.source} is matched with ${str}`);
} else {
    console.log(`${regex.source} is not matched with ${str}`);
}


