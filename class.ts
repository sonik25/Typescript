class Book{
    public bookName:string;
    private price:number;

    constructor(){
        console.log('Hello world');
    };

    public bookTitle():string{
        if(this.bookName){console.log(this.bookName)}
        return this.bookName;

    };
}

let books = new Book();
books.bookName = 'Zero to one';
books.bookTitle();