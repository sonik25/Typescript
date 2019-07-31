function BookDetails() {
    let books =[{
        courseName:'MSc',
        price:'Rs210',
        rating:'4star',
        author:'Godbole',
        name: bookName.research,
        avl:true
    },

    {
        courseName:'BE',
        price:'Rs410',
        rating:'2star',
        author:'Balguruswami',
        name:bookName.engineering,
        avl:false

    },

    {
        courseName:'MCA',
        price:'Rs500',
        rating:'4star',
        author:'Janardan Pawar',
        name:bookName.application,
        avl:true
    },

    {
        courseName:'MBA',
        price:'Rs640',
        rating:'5star',
        author:'K Martin',
        name:bookName.management,
        avl:true
    },

];
    return books;
};

enum bookName{'research', 'management', 'engineering', 'application'}


function currentBookDetails(data:any): string {
    let storeCurrentBookdetals: string;
    for(let d of data){
        if(!d.avl){
            storeCurrentBookdetals=d.courseName+ " " +d.price;
            break;
        }
    }
    console.log(storeCurrentBookdetals);
    return storeCurrentBookdetals;
}

let details = BookDetails();
currentBookDetails(details);


function getBookName(title:bookName):Array<string>{
    console.log(`bookname: ${bookName[title]}`);
    let bookData:string[] = [];
    let details = BookDetails();
    for(let d of details){
        if(d.avl){
            bookData.push(d.courseName, d.rating);
            break;
        }
    };
    console.log(bookData);
    return bookData;

};

let view = getBookName(bookName.management);

