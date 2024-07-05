const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.read = false;
  this.info = function () {
    return `${this.title} by ${this.author}`;
  };
}
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien");
console.log(theHobbit.info());
// "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

const formSubmit = document.getElementById("submit");
const bookName = document.getElementById("book-name");
const bookAuthor = document.getElementById("book-author");

formSubmit.addEventListener("click", (e) => {
  const newBook = new Book(bookName.value, bookAuthor.value);
  function displayBook() {
    const yourBooks = document.querySelector(".your-books");
    const newBookElement = document.createElement("div");
    const newBookText = document.createElement("div");
    const newButtonsDiv = document.createElement("div");
    const newUnreadButton = document.createElement("button");
    const newDeleteButton = document.createElement("button");

    newUnreadButton.addEventListener("click", () => {
      if (newUnreadButton.textContent === "Unread") {
        newUnreadButton.textContent = "Read";
        newBook.read = true;
        console.log(newBook);
      } else if (newUnreadButton.textContent === "Read") {
        newUnreadButton.textContent = "Unread";
        newBook.read = false;
        console.log(newBook);
      }
    });

    newDeleteButton.addEventListener("click", () => {
      //This deletes the book entry
      const confirmDelete = confirm(
        "Are you sure you want to delete this book?"
      );
      if (confirmDelete === true) {
        newDeleteButton.parentElement.parentElement.remove();
      }
    });

    newBookElement.id = "book-item";
    newBookText.id = "book-text";
    newUnreadButton.textContent = "Unread";
    newDeleteButton.textContent = "Delete";
    newBookText.textContent = `${newBook.info()}`;
    newButtonsDiv.id = "book-edit";

    newButtonsDiv.append(newUnreadButton, newDeleteButton);
    newBookElement.append(newBookText, newButtonsDiv);
    yourBooks.append(newBookElement);
  }

  e.preventDefault();
  if (bookName.value !== "" && bookAuthor.value !== "") {
    displayBook();
    myLibrary.push(newBook);
    console.log(myLibrary);
    console.log(newBook.info());
    bookName.value = null;
    bookAuthor.value = null;
  } else {
    alert("Please insert a name and author");
  }
});
