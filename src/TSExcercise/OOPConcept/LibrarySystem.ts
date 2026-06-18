/**
 * 5. Library Management System (Composition)

Create:

* Book
* Library

Library should:

* add books
* remove books
* display books

Concepts:

* composition
* array of objects
* class interaction
 */

class Book {
    protected bookTitle : string;
    protected bookAuthor : string;
    protected bookId : number;
    constructor(bookTitle:string, bookAuthor:string, bookId:number) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookId = bookId;
    }

    displayBook():void{
        console.log(`Book title : ${this.bookTitle}`);
        console.log(`Book author : ${this.bookAuthor}`);
        console.log(`Book ID : ${this.bookId}`);
    }

}

class Library{

    private book:Book[] = [];

    constructor(book:Book) {
        this.book[] = book;
    }

    addBook(book:Book){
        this.book.push(book);
    }

    getBook(id:number){
        return this.book.find(book=>book.displayBook)
    }

}