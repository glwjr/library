let myLibrary = [
    {
        title: 'In the Wake',
        author: 'Christina Sharpe',
        pages: 118,
        readStatus: 'Not Read'
    },
    {
        title: 'A Dance with Dragons',
        author: 'George R.R. Martin',
        pages: 1056,
        readStatus: 'Read'
    }
]

class Book {
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }
}

const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const pagesInput = document.getElementById("pages-input");
const statusInput = document.getElementById("status-input");

function addBookToLibrary() {
    const newBook = new Book(titleInput.value,authorInput.value,pagesInput.value,statusInput.value);
    
    myLibrary.push(newBook);
    createBookCard(newBook);
    updateLocalStorage();
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

    statusButton.addEventListener("click", () => {
        changeReadStatus(book);
    })

    deleteButton.addEventListener("click", () => {
        removeBook(book);
    })
}

function changeReadStatus(book) {
    if (book.readStatus === "Read") {
        book.readStatus = "Not Read"
    }
    else {
        book.readStatus = "Read"
    }
    
    updateLocalStorage();
    updateBooksGrid();
}

function removeBook (book) {
    let title = book.title
    let foundIndex = myLibrary.findIndex(function (book) {
        return book.title == title
    });

    if (foundIndex > -1) {
        myLibrary.splice(foundIndex, 1);
    }

    updateLocalStorage();
    updateBooksGrid();
}

function updateBooksGrid() {
    const bookGrid = document.getElementById("book-grid");
    
    bookGrid.innerHTML = "";
    checkLocalStorage();
    myLibrary.forEach((book) => {
        createBookCard(book);
    })
}

function updateLocalStorage() {
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
}

function checkLocalStorage() {
    if (localStorage.getItem("myLibrary")) {
        myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    }
}

function clearForm() {
    document.getElementById("title-input").value = "";
    document.getElementById("author-input").value = "";
    document.getElementById("pages-input").value = "";
    document.getElementById("status-input").value = "";
}

const addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click", () => {
    modal.style.display = "block";
})

const modal = document.getElementById("modal");

const closeModalButton = document.getElementById("close-modal-button")
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", () => {
    if (titleInput.value == "" || authorInput.value == "" || pagesInput.value == "" || statusInput.value == "") {
        return
    }

    modal.style.display = "none";
    addBookToLibrary();
    updateBooksGrid();
    clearForm();
})

updateBooksGrid();