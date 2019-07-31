function BookDetails() {
    var books = [{
            courseName: 'MSc',
            price: 'Rs210',
            rating: '4star',
            author: 'Godbole',
            name: bookName.research,
            avl: true
        },
        {
            courseName: 'BE',
            price: 'Rs410',
            rating: '2star',
            author: 'Balguruswami',
            name: bookName.engineering,
            avl: false
        },
        {
            courseName: 'MCA',
            price: 'Rs500',
            rating: '4star',
            author: 'Janardan Pawar',
            name: bookName.application,
            avl: true
        },
        {
            courseName: 'MBA',
            price: 'Rs640',
            rating: '5star',
            author: 'K Martin',
            name: bookName.management,
            avl: true
        },
    ];
    return books;
}
;
var bookName;
(function (bookName) {
    bookName[bookName["research"] = 0] = "research";
    bookName[bookName["management"] = 1] = "management";
    bookName[bookName["engineering"] = 2] = "engineering";
    bookName[bookName["application"] = 3] = "application";
})(bookName || (bookName = {}));
function currentBookDetails(data) {
    var storeCurrentBookdetals;
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var d = data_1[_i];
        if (!d.avl) {
            storeCurrentBookdetals = d.courseName + " " + d.price;
            break;
        }
    }
    console.log(storeCurrentBookdetals);
    return storeCurrentBookdetals;
}
var details = BookDetails();
currentBookDetails(details);
function getBookName(title) {
    console.log("bookname: " + bookName[title]);
    var bookData = [];
    var details = BookDetails();
    for (var _i = 0, details_1 = details; _i < details_1.length; _i++) {
        var d = details_1[_i];
        if (d.avl) {
            bookData.push(d.courseName, d.rating);
            break;
        }
    }
    ;
    console.log(bookData);
    return bookData;
}
;
var view = getBookName(bookName.management);
