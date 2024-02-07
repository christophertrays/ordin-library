const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  // the constructor...

}
function Render(){
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML ="";
  for (let i = 0; i < myLibrary.length; i++){
    let book = myLibrary[i];
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    let titleEl = document.createElement("h3");
    titleEl.textContent = book.title;

    let authorEl = document.createElement("p");
    authorEl.textContent = "Author: " + book.author;

    let pagesEl = document.createElement("p");
    pagesEl.textContent = "Pages: " + book.pages;

    let readEl = document.createElement("p");
    readEl.textContent = book.read ? "Read" : "Not Read";
    console.log(book.read);
     // Display read or not read based on the value of the 'read' property

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      deleteBook(i);
    });

    bookCard.appendChild(titleEl);
    bookCard.appendChild(authorEl);
    bookCard.appendChild(pagesEl);
    bookCard.appendChild(readEl); // Append the read element
    bookCard.appendChild(deleteBtn);

    libraryEl.appendChild(bookCard);
  }
}


function deleteBook(index) {
  myLibrary.splice(index, 1);
  Render();
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value; // Corrected from #read
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title,author,pages,read);
  
  myLibrary.push(newBook);
  Render();
}




let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function (event){
    let newBookform = document.querySelector("#new-form-book");
    newBookform.style.display ="block";
})

document.querySelector("#new-form-book").addEventListener('submit', function (event) {
  event.preventDefault(); // Corrected from event.preventDefault
  addBookToLibrary();
});
