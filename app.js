let myLibrary = [
    {
        title: "In the Wake",
        author: "Christina Sharpe",
        pages: 121,
        readStatus: "Read"
    },
    {
        title: "Testing",
        author: "Tester",
        pages: 123,
        readStatus: "Not Read"
    }
];

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
    addBookToLibrary();
})

function addBookToLibrary() {
    const titleInput = document.getElementById("title-input");
    const authorInput = document.getElementById("author-input");
    const pagesInput = document.getElementById("pages-input");
    const statusInput = document.getElementById("status-input");

    const newBook = new Book(titleInput.value,authorInput.value,pagesInput.value,statusInput.value);
    myLibrary.push(newBook)
}

myLibrary.forEach((book) => {
    console.log(book.title);
})