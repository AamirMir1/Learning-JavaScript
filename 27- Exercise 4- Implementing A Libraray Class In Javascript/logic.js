// _______________________________________ Implementing A Library Class In Javascript ______________________________________
/*
 Create a library class and implement the following:
 Books must be in the constructor
 1: getBookList()
 2: issueBook(bookName, user)
 3: returnBook(bookName)

*/
class Library {
    constructor(name, givenBook1, givenBook2, givenBook3, givenBook4, givenBook5) {
        this.user = name
        this.book1 = givenBook1;
        this.book2 = givenBook2;
        this.book3 = givenBook3;
        this.book4 = givenBook4;
        this.book5 = givenBook5;
    }
    getBookList() {
        return `${this.book1} book. ${this.book2} book.${this.book3} book.${this.book4} book.${this.book5} book.`
    }
    issueBook(Book, user) {
        return `${Book} book is issued to ${user}`
    }
    returnBook(bookName) {
        if (this.returnBook) {
            return `${bookName} is returned to ${this.user}`
        }
    }
}

let implementLibrary = new Library("Aamir", "Computer", "English", "Science", "Maths", "Biology")