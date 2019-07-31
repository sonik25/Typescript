var Book = /** @class */ (function () {
    function Book() {
        console.log('Hello world');
    }
    ;
    Book.prototype.bookTitle = function () {
        if (this.bookName) {
            console.log(this.bookName);
        }
        return this.bookName;
    };
    ;
    return Book;
}());
var books = new Book();
books.bookName = 'Zero to one';
books.bookTitle();
