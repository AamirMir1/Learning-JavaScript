//_______________________________________________Exercise 4- Library Class Implementation____________________________________________

// Create a library class and implement the following:
// Books must be in the constructor
// 1: getBookList()
// 2: issueBook(bookName, user)
// 3: returnBook(bookName)


// class libraryBook {
//     constructor(bookList){
//         this.bookList = bookList;
//         this.issueBook = {}
//     }
//     getBookList(){
//         this.bookList.forEach(element => {
//             console.log(element)
//         });
//     }
//     issuedBook(bookName, user){
//         if(this.issueBook[bookName] == undefined){
//         this.issueBook[bookName] = user
//     }
//     else{
//         console.log("Your book is already been declared")
//     }
//     }
//     returnBook(bookName){
//        delete this.issueBook[bookName]
//     }
// }


// Using prototype

class libraryBooks {
    constructor(bookList) {
        this.bookList = bookList,
            this.issueBook = {}
    }
}

libraryBooks.prototype.getBooks = function () {
    this.bookList.forEach(element => {
        console.log(element)
    });
}

libraryBooks.prototype.issuedBooks = function (bookName, user) {
    if (this.issueBook[bookName] == undefined) {
        this.issueBook[bookName] = user;
    }
    else {
        console.log("Your book is already been declared")
    }
}
libraryBooks.prototype.returnBooks = function (bookName) {
    delete this.issueBook[bookName]
}



