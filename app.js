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
    },
    {
        title: "A really long book title to test out styling",
        author: "Tester",
        pages: 123,
        readStatus: "Read"
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

myLibrary.forEach((book) => {
    createBookCard(book);
})

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

    createBookCard(newBook);
}

function createBookCard(book) {
    const bookGrid = document.getElementById("book-grid");
    const bookCard = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookButtonArea = document.createElement("div");
    const statusButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    bookCard.classList.add("book-card");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookPages.classList.add("book-pages");
    bookButtonArea.classList.add("book-buttons");
    statusButton.classList.add("status-button");
    deleteButton.classList.add("delete-button");

    bookTitle.innerHTML = `"${book.title}"`;
    bookAuthor.innerHTML = book.author;
    bookPages.innerHTML = `${book.pages} pages`;
    statusButton.innerHTML = book.readStatus;
    deleteButton.innerHTML = "Delete";

    bookGrid.appendChild(bookCard);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookButtonArea);
    bookButtonArea.appendChild(statusButton);
    bookButtonArea.appendChild(deleteButton);
}